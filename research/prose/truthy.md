Truthy is the backend API of a CMS, written in NestJS and run as a Node.js service. It provides modules for authentication, users, roles and permissions, an email module, account settings, one-time passwords and localization, with two-factor sign-in by time-based codes. Its data is kept in PostgreSQL, and Redis is used for queues and rate limiting. Its Swagger documentation is available in development mode.

It can be installed with `npx truthy-api` or by cloning the repository, and its Docker Compose setup starts PostgreSQL, Redis and the API as three containers.

## Worth knowing

The frontend is a separate project, so the API has no admin screens of its own.
