Medusa runs as a Node.js backend on Express, with its commerce logic split into modules. It exposes REST store and admin APIs and includes an admin dashboard built in React. Medusa renders no storefront itself, although create-medusa-app can add a Next.js storefront starter. PostgreSQL is the database, Redis is used for sessions in production, and separate server and worker processes run the application. MedusaJS, Inc. maintains it, and the company offers the hosted Medusa Cloud.

## Worth knowing

The repository is MIT licensed except for Enterprise Edition materials, which need a commercial agreement with MedusaJS, Inc. Docker is documented for local development, and the project has no official container image.
