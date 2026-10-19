Angular is a TypeScript framework from Google for building web applications, with templates based on HTML syntax. Applications render in the browser by default, and each route can be set to client rendering, prerendering at build time or server rendering. Server rendering is added with the @angular/ssr package and renders the application on the server for each request. The framework includes its own internationalization tooling.

## Worth knowing

Routes in server render mode need a running server process, while client-rendered and prerendered routes do not. Several of the deploy builders that the deployment guide adds with ng add come from third parties.
