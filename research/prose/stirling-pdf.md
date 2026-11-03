Stirling PDF is a PDF editing and processing platform. It runs as a desktop app, in the browser, or as a server on the user's own infrastructure, installed with Docker, a Helm chart for Kubernetes, or a Java JAR. Every server-side tool has a [REST API](https://docs.stirlingpdf.com/Developers/API/) endpoint, so a site or app can call PDF operations from its own code. The server keeps users and teams in a built-in H2 database or in PostgreSQL, and the interface is available in 40+ languages.

## Worth knowing

The license is open-core. The MIT license covers most of the code, but the engine and proprietary directories need a Stirling PDF User License for production use. A self-hosted server runs on a free plan until a Team or Enterprise license is added: an external PostgreSQL database needs Team, SAML single sign-on needs Enterprise, and Enterprise is sold by the company. A hosted service, Stirling Cloud, is offered alongside the self-hosted server.
