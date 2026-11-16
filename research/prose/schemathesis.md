Schemathesis is a testing tool that generates test requests from an API's schema. It works with OpenAPI, GraphQL and gRPC schemas and is built on Hypothesis. It runs locally or in CI, and the [Docker guide](https://schemathesis.readthedocs.io/en/stable/guides/docker/) describes running the official image without installing Python.

## Worth knowing

Schemathesis sends requests that create, change and delete data, so the README advises pointing it at a dev or staging environment, not production.
