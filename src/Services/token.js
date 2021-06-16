import * as storage from "../Utilities/storage";

import { TRANSACTION_TOKEN, PERSISTENT_TOKEN } from "../Constants/tokens";

export function saveTokens(transactionToken, persistentToken) {
  storage.set(TRANSACTION_TOKEN, transactionToken);
  storage.set(PERSISTENT_TOKEN, persistentToken);
}

export function getTransactionToken() {
  return storage.get(TRANSACTION_TOKEN);
}

export function setTransactionToken(transactionToken) {
  storage.set(TRANSACTION_TOKEN, transactionToken);
}

export function getPersistentToken() {
  return storage.get(PERSISTENT_TOKEN);
}

export function setPersistentToken(persistentToken) {
  return storage.set(PERSISTENT_TOKEN, persistentToken);
}
