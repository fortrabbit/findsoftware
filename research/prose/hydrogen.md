Shopify Hydrogen is Shopify's toolkit for adding Shopify commerce to a JavaScript framework that a project already uses. It provides a typed Storefront API client with GraphQL queries, cart and product state stores, request handlers for the routes a Shopify storefront needs, Shop Pay, analytics with consent handling and money formatting. The framework keeps routing, rendering and UI, and Hydrogen covers the Shopify-specific parts. The [docs](https://shopify.dev/docs/custom-storefronts/hydrogen) name React Router and Next.js for the two starter templates and list Nuxt, Astro and SvelteKit among the frameworks that work with it.

Oxygen is Shopify's hosting platform for storefronts. The deploy guide also lists Vercel, Cloudflare Workers and Node servers as places a storefront can run, and the framework decides which of them apply.

## Worth knowing

Hydrogen connects to the Storefront API and the Customer Account API. Checkout stays on Shopify, and the toolkit ships no component library, so the interface is the storefront's own.

The docs cover one Hydrogen release line. Storefronts built on earlier releases follow a separate legacy guide and a migration page.
