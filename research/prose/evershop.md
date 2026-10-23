EverShop is an open-source e-commerce platform written in TypeScript. React components are rendered on the server and hydrated in the browser, and the platform exposes a GraphQL API for reading and a REST API for creating, updating and deleting resources. The store runs as a Node process on top of PostgreSQL, which holds the catalog, orders and settings. The admin panel is a React application served at /admin.

A new store is created with the create-evershop-app command; the [installation guide](https://evershop.io/docs/development/getting-started/installation-guide) covers the setup wizard, which asks for the database connection and the first admin user. Core modules cover the catalog, checkout, orders, promotions, tax, CMS pages, a page builder and a blog, and Stripe, PayPal and cash on delivery ship as built-in payment modules. Themes and extensions customize the storefront and the platform. The [deployment guides](https://evershop.io/docs/development/deployment) cover AWS, Azure, DigitalOcean and Heroku. One running process can serve several storefront languages.

## Worth knowing

The public Docker image is meant for a local environment only. Database migrations run when the application starts. The README mentions EverShop Cloud, a hosted offering whose plans are not described on the pages read.
