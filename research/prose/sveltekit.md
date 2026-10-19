SvelteKit is a framework for building web applications with Svelte, using Vite for development and builds. Pages can be rendered on the server, prerendered to static HTML, rendered in the browser only, or a mix of these. Adapters turn the built app into output for a target such as a Node server, a Bun server, Cloudflare, Netlify, Vercel or static hosting. The adapter-auto package picks one for the platform it detects.

## Worth knowing

The server needs depend on the adapter. The Node adapter needs a long-running Node process, while the static adapter needs no server. Development is done by volunteers, and donations go through Open Collective. The [adapters page](https://svelte.dev/docs/kit/adapters) lists the official adapters.
