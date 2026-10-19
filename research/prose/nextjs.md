Next.js is a React framework for full-stack web applications. One project can render pages on the server, prerender them as static HTML, run as a single-page app, or regenerate static pages incrementally. Streaming lets a page send parts of its output as they become ready. Internationalized routing puts each language in a sub-path or a domain, and translated strings come from third-party libraries.

Self-hosting with the full feature set runs a long-running Node server process, and the docs recommend a reverse proxy in front of it. The project publishes no official Docker image, but the repository includes example Dockerfiles. The static export writes HTML, CSS and JavaScript for any file host and leaves out the server features.

## Worth knowing

A self-hosted server keeps regenerated pages on the local disk of each instance unless a shared cache handler is configured. Next.js has two routers, the App Router and the Pages Router, documented separately. The [self-hosting guide](https://nextjs.org/docs/app/guides/self-hosting) covers the cache in detail.
