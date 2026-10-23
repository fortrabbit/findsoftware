SiteGen is a single Go binary that builds a site from templates written with Go's html/template package and writes the result to a public directory. The build flags clean that directory first and minify the HTML, JavaScript and CSS output.

The built-in editing UI at /__cms edits the same source files the build reads, with no database and no separate content store. It is available only in serve mode.

## Worth knowing

The -share option relays the development server through the sitegen.dev server, so a public link to a local site depends on that service and runs only with the development server.
