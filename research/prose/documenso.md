Documenso is a document signing application that sends PDF documents out for electronic signature and records the signatures. It can be self-hosted with Docker, Docker Compose, Railway, Kubernetes or a manual Node.js setup, as the [self-hosting guide](https://docs.documenso.com/docs/self-hosting) describes, and the same project is offered as Documenso Cloud. The project documents a REST API and a webhooks guide. Documents are stored in PostgreSQL by default.

## Worth knowing

The Community Edition is licensed under AGPL-3.0. Enterprise features, including single sign-on with SAML and OIDC, come with a commercial Enterprise license, which removes the AGPL source disclosure requirement. Documenso does not ship a signing certificate, and document signing fails until one is configured.
