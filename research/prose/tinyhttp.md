tinyhttp is an Express-like web framework for Node.js and Bun, written in TypeScript and compiled to native ESM. Its README describes it as a replacement for Express. The docs list the differences: no static file server and no body parser, so those come from external middleware, and template engines are registered per file extension. The project keeps a [middleware list](https://tinyhttp.v1rtl.site/docs/middleware) on its site.

The [deployment guide](https://tinyhttp.v1rtl.site/docs/advanced) covers serverless platforms, and for a server of your own a process manager with a web server as reverse proxy. Its database examples include MongoDB and Postgres.

## Worth knowing

The getting-started page states a lower Node.js minimum than the README and the npm package for `@tinyhttp/app` do.
