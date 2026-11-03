FeatureProbe is an open-source feature management service for feature toggles, gradual rollouts and A/B tests. It is run from Docker images: the README gives docker compose up as the way to start the services, and the compose file starts an API image, a server image, an admin UI image and an analysis image. The API connects to a MySQL-protocol database, and a management portal in the browser configures the toggles.

The docs describe the self-hosted environment as five independent images that all need to start before the platform runs normally.
