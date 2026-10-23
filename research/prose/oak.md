Oak is a middleware framework for handling HTTP requests in TypeScript, and its README says it is inspired by Koa. It runs on Deno, Node.js, Bun and Cloudflare Workers, and it is installed from JSR with `deno add jsr:@oak/oak` or from npm for Node.js. The project site links to the JSR documentation for the API and says oak was originally written for the Deno runtime. The license names the oak authors as the copyright holder.

## Worth knowing

The README says send, WebSocket upgrades and serving over TLS or HTTPS are not supported on Node.js, and send and WebSocket upgrades are not supported on Bun and Cloudflare Workers. The project has no GitHub releases, so its current major is read from JSR. The npm package of the same project carries an older major than the JSR package.
