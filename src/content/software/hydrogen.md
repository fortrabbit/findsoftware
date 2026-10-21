---
id: hydrogen
name: Shopify Hydrogen
urls:
  home: https://hydrogen.shopify.dev
  repository: https://github.com/Shopify/hydrogen
  docs: https://shopify.dev/docs/custom-storefronts/hydrogen
category:
  - e-commerce
  - library
description: Shopify's headless toolkit that adds Shopify commerce primitives, such as the cart, product and collection state and a Storefront API client, to a JavaScript framework.
status: active
maintainer: Shopify Inc.
maintainerType: company
firstRelease: 2021
hqCountry: CA
language: typescript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
installMethod: npm
licenseModel: open-source
license: MIT
latestReleaseDate: 2026-10-20
githubStargazers: 2153
npmWeeklyDownloads: 42489
contributors: 139
social:
  x: https://x.com/shopifydevs
  forum: https://community.shopify.dev/c/hydrogen-and-storefront-apis/9
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://hydrogen.shopify.dev
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/Shopify/hydrogen
    checkedAt: 2026-10-21
  - field: urls
    url: https://shopify.dev/docs/custom-storefronts/hydrogen
    checkedAt: 2026-10-21
  - field: firstRelease
    url: https://registry.npmjs.org/@shopify/hydrogen
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/Shopify/hydrogen/blob/main/LICENSE.md
    checkedAt: 2026-10-21
  - field: hqCountry
    url: https://www.shopify.com/legal/terms
    checkedAt: 2026-10-21
  - field: language
    url: https://github.com/Shopify/hydrogen
    checkedAt: 2026-10-21
  - field: category
    url: https://hydrogen.shopify.dev
    checkedAt: 2026-10-21
  - field: category
    url: https://shopify.dev/docs/custom-storefronts/hydrogen
    checkedAt: 2026-10-21
  - field: runtime
    url: https://shopify.dev/docs/storefronts/hydrogen/deploy
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://shopify.dev/docs/storefronts/hydrogen/getting-started/add-to-existing-project
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://hydrogen.shopify.dev
    checkedAt: 2026-10-21
  - field: license
    url: https://registry.npmjs.org/@shopify/hydrogen/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/Shopify/hydrogen/releases/latest
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://github.com/Shopify/hydrogen
    checkedAt: 2026-10-21
  - field: contributors
    url: https://github.com/Shopify/hydrogen
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@shopify/hydrogen
    checkedAt: 2026-10-21
figure:
  emoji: 🛒
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: TypeScript · Shop
ai: authored
packagistDownloads: null
---

Shopify Hydrogen is Shopify's toolkit for adding Shopify commerce to a JavaScript framework that a project already uses. It provides a typed Storefront API client with GraphQL queries, cart and product state stores, request handlers for the routes a Shopify storefront needs, Shop Pay, analytics with consent handling and money formatting. The framework keeps routing, rendering and UI, and Hydrogen covers the Shopify-specific parts. The [docs](https://shopify.dev/docs/custom-storefronts/hydrogen) name React Router and Next.js for the two starter templates and list Nuxt, Astro and SvelteKit among the frameworks that work with it.

Oxygen is Shopify's hosting platform for storefronts. The deploy guide also lists Vercel, Cloudflare Workers and Node servers as places a storefront can run, and the framework decides which of them apply.

## Worth knowing

Hydrogen connects to the Storefront API and the Customer Account API. Checkout stays on Shopify, and the toolkit ships no component library, so the interface is the storefront's own.

The docs cover one Hydrogen release line. Storefronts built on earlier releases follow a separate legacy guide and a migration page.
