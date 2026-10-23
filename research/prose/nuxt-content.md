Nuxt Content is a module for Nuxt that reads the files in a project's content folder, in Markdown, YAML, CSV or JSON, and makes them queryable from Vue components. Markdown files can contain Vue components through the MDC syntax. Collections are declared in a `content.config.ts` file. Multi-language sites use the @nuxtjs/i18n module.

The [docs](https://content.nuxt.com/docs/getting-started/installation) describe installation as adding the package to a Nuxt project and registering the module in `nuxt.config.ts`. The visual editor for the same content is the separate Nuxt Studio module.

## Worth knowing

The module runs inside a Nuxt application, so the hosting options are those of that application. The deploy docs cover static hosting through Nuxt prerendering, where the database loads in the browser as WASM SQLite and content queries run there, serverless platforms, where each request starts a fresh Nuxt server, and a Node server. With the default SQLite connector the server needs an OS with a recent enough glibc.
