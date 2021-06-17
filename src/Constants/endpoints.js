module.exports = {
  baseUrl: "http://localhost:8888",
  auth: {
    login: "/api/login",
    register: "/api/register",
    refresh: "/api/refresh",
  },
  user: {
    self: "/api/user",
  },
  chans: {
    getAll: "/api/chans",
    getThreads: "/api/chans/:chanId",
  },
};
