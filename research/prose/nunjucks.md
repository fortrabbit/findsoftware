Nunjucks is a templating engine for JavaScript that fills template files with data. Its template language has block inheritance, autoescaping, macros and asynchronous control, and the project describes the language as essentially a port of jinja2. It runs on Node.js, and in the browser a script tag loads either the full compiler or a smaller build that only renders templates precompiled ahead of time.

## Worth knowing

Nunjucks does not sandbox execution, so user-defined templates, or user content placed into template definitions, are unsafe. On the server that can expose data or run code; in the browser it can open cross-site scripting, which a strong content security policy can mitigate. Templates written for jinja2 may need changes, because the language differs in a few places.
