Swagger UI is a browser interface that takes an OpenAPI or Swagger description of an API and renders it as documentation a reader can browse and try out. It runs in the visitor's browser, so the built assets can be copied to a server and served as static files. The assets also come from an npm package that a build bundles, from a CDN script tag or from a Composer package. A Docker image instead starts an nginx server with the interface.

The [installation guide](https://github.com/swagger-api/swagger-ui/blob/main/docs/usage/installation.md) lists each of these routes with its own example.

## Worth knowing

Installing the package sends anonymized installation analytics through Scarf. The README says setting the `SCARF_ANALYTICS` environment variable to `false` turns it off.

The Swagger site also offers commercial products, such as SwaggerHub and Swagger Enterprise. They are separate from this interface and are not editions of it.
