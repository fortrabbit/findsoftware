microfeed is a self-hosted content management system for podcasts, blogs, photos, documents and external links, built by Listen Notes, Inc. It runs as a Cloudflare Worker in the owner's own Cloudflare account, keeps metadata in Cloudflare D1 and media files in Cloudflare R2, and is edited in a built-in admin dashboard. Each item is published as a web page, an RSS entry and a JSON Feed entry. Themes are Mustache templates, and a REST API is available for other applications, with a headless mode that turns off the generated website. Installation runs `npx @microfeed/cli manage` to deploy an official release, `yarn manage` from a cloned checkout, or a GitHub Actions workflow.

## Worth knowing

Every install path needs a Cloudflare account, and the deployment CLI needs Node.js. The README FAQ describes microfeed as still in open alpha phase. The software is licensed under AGPL-3.0.
