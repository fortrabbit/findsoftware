Medama Analytics is website analytics that runs as a single server binary with no additional database setup, or as a Docker image. The [installation guide](https://oss.medama.io/deployment/installation.md) describes the binary, which a start command launches as the analytics server. The tracking script is served by the analytics instance and loaded with a script tag in the page head.

The web interface is a single page application that is built on the same API that external dashboards can call, and the instance serves an OpenAPI description of that API. The project describes its tracker as cookie free and as collecting no IP addresses or other identifiers. The Fly.io and Railway guides deploy the same Docker image on those platforms.

## Worth knowing

The single-binary guide lists Windows as unsupported and suggests Docker there.
