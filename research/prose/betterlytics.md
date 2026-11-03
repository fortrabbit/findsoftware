Betterlytics is an open-source web analytics platform that also records session replays, JavaScript errors, Core Web Vitals and uptime checks in one dashboard. A site adds a tracking script or the `@betterlytics/tracker` npm package, which sends events to the platform. It runs as a managed cloud service hosted in the EU, or it is self-hosted with Docker Compose from a separate repository. ClickHouse is the store for session recordings, and a self-hosted instance serves plain HTTP on a local port for use behind a reverse proxy.

## Worth knowing

Self-hosted installations send the project a daily report unless the operator turns it off. Two optional features need outside services: geolocation uses a MaxMind GeoLite2 license key, and session recordings can go to S3-compatible storage instead of ClickHouse.
