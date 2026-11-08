Flicking is a carousel component for web pages, published as the @egjs/flicking package. The core is written for plain JavaScript and TypeScript, and the React and Vue 3 ports are separate packages in the same repository. Plugins for autoplay, fade, parallax, arrows and pagination ship as a further package. The README lists circular mode, free scroll and virtual scroll for large sets of panels among its features. Apps install the core with npm or yarn, and the quickstart also gives a CDN route for prototypes.

## Worth knowing

Flicking measures the size of DOM elements to place its panels, so with server-side rendering the panels can shift once the page hydrates; the SSR guide covers this. Next.js and Nuxt are the frameworks the project names for server-side rendering.
