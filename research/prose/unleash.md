Unleash is an open-source feature flag platform. Its server is a TypeScript application that runs on Node.js, and the [README](https://github.com/Unleash/unleash/blob/main/README.md) describes running it either in Docker or as a Node.js process. It stores its data in PostgreSQL and serves a web admin UI. The same project is sold as Unleash Enterprise, a paid edition that is also available as a cloud service.

## Worth knowing

The open-source server is licensed under the AGPL. The README lists single sign-on, advanced segmentation and other features under its Pro and Enterprise plans, so those are not part of the open-source edition. For production, the README says the server needs a persistent host. Enterprise can also run on the user's own infrastructure, and the [self-hosting guide](https://docs.getunleash.io/deploy/getting-started) sets up either edition with Docker and a PostgreSQL container.
