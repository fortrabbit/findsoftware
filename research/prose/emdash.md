EmDash is a full-stack TypeScript CMS built on Astro. It includes an admin panel, a REST API, role-based access control and a WordPress import. The admin signs in with passkeys by default, with GitHub, Google and Microsoft available as login providers.

EmDash runs on Cloudflare with D1, R2 and Workers, or on a Node.js server with SQLite. On a Node.js server the built-in scheduler runs only while the Node.js process is running, according to the deployment guide.

## Worth knowing

The WordPress import covers posts, pages, media and taxonomies from WXR exports.
