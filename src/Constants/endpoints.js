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
  thread: {
    getPosts: "/api/threads/:threadId/posts",
    create: "/api/threads",
  },
  posts: {
    getAll: "/api/post",
    create: "/api/post",
    remove: "/api/post/:postId",
  },
};
