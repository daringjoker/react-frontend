import http from "./Utilities/http";

import * as interceptors from "./Utilities/interceptors";
function initInterceptors() {
  http.interceptors.request.use(interceptors.requestInterceptor);
  http.interceptors.response.use(
    (response) => response,
       interceptors.responseInterceptor
  );
}

export default function init() {
  initInterceptors();
}
