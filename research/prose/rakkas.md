Rakkas is a React framework built on Vite. The default build renders pages on the server, and the guide shows `node dist/server/index.js` launching the built app. The same project can prerender selected pages during the build and save them as static files, and the generated client assets sit in `dist/client` for a static host or CDN. The homepage lists Node, Vercel, Netlify and Cloudflare Workers as deploy targets.

## Worth knowing

A page can be prerendered only when its content is determined by its URL path alone. The README says minor releases will introduce breaking changes until 1.0 and that the framework is not yet ready for production use.
