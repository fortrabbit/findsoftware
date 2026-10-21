Fresh is a web framework for Deno. Each route renders on the server as a Preact component, and only the parts marked as islands run JavaScript in the browser. Forms are handled on the server with standard Request and FormData objects, and partial responses let the server stream HTML into one part of a page without a full reload. Route handlers define GET, POST, DELETE and other HTTP methods as named functions on a route.

## Worth knowing

The [deployment guide](https://usefresh.dev/docs/deployment/deno-deploy) describes Deno Deploy as the recommended host, a hosted platform next to the open source framework. The home page also lists Docker, Cloudflare Workers and deno compile as deploy targets.
