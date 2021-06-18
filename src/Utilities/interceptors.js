import http from "./http";
import * as authService from "../Services/auth";
import * as tokenService from "../Services/token";

const RETRY_COUNT_LIMIT = 3;
const TOKEN_EXPIRE = "Transaction Token Expired";
const TOKEN_ERROR = "Transaction Token Error";
const AUTHORIZATION_HEADER = "Authorization";
const SESSION_EXPIRE = "Persistent Token Expired";

function buildAuthHeader(transactionToken) {
  return `Bearer ${transactionToken}`;
}

export function requestInterceptor(request) {
  const transactionToken = tokenService.getTransactionToken();
  if (transactionToken || !request.headers[AUTHORIZATION_HEADER])
    request.headers[AUTHORIZATION_HEADER] = buildAuthHeader(transactionToken);
  return request;
}

export async function responseInterceptor(error) {
  if (!error.response) {
    return Promise.reject(error);
  }
  const originalRequest = error.config;

  const { status, msg, data } = error.response.data;

  if (status === "failed" && (msg === TOKEN_EXPIRE || msg === TOKEN_ERROR) && !originalRequest.__isRetryRequest) {
    originalRequest._retry = true;
    originalRequest.retryCount = isNaN(originalRequest.retryCount) ? 1 : originalRequest.retryCount++;
    const transactionToken = tokenService.getTransactionToken();
    const persistentToken = tokenService.getPersistentToken();
    const { data } = await authService.refresh({
      tokens: { persistentToken, transactionToken },
    });
    tokenService.setTransactionToken(data.transactionToken);

    originalRequest.headers[AUTHORIZATION_HEADER] = buildAuthHeader(data.transactionToken);

    return http.request(originalRequest);
  }

  if (
    (status === "failed" && (msg === SESSION_EXPIRE || msg.includes("Invalid"))) ||
    originalRequest.retryCount > RETRY_COUNT_LIMIT
  ) {
    await authService.logout();
  }

  return Promise.reject(error);
}
