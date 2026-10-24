Beego is a web framework for Go that builds RESTful APIs, web apps and backend services. Its modules cover MVC routing, an ORM with drivers for MySQL, PostgreSQL, SQLite and TiDB, sessions, caching, background tasks, i18n and a monitoring dashboard. Views render through Go's built-in html/template package. An application is a Go program that imports the framework's web package and starts its own HTTP server, as the [quick start in the README](https://github.com/beego/beego/blob/master/README.md) shows.

## Worth knowing

The documentation source is in the [beego-doc repository](https://github.com/beego/beego-doc), because the documentation site named in the README is listed as unavailable. The graceful restart feature lets old processes keep serving earlier connections while a new process starts, so hosting needs a long-running process rather than static files.
