staticgen is a static website generator written in Go. It starts the HTTP server of a project the user already has, crawls the pages that server returns, and generates the pages and assets as a static site.

## Worth knowing

The README says it does not pre-render with a headless browser, so pages that rely on client-side JavaScript are copied in the state the server returns them.
