Freshlytics is a self-hosted web analytics service written in TypeScript and run on Node. A site adds a tracking snippet to the head of its pages, which sends page views to the instance, and a dashboard shows them by page URL, referrer, browser and date range across several projects. Users are either admins, who manage projects and other users, or regular users. The instance stores its data in PostgreSQL through the PipelineDB image that the installation guide names, and the guide runs the service with Docker Compose.

## Worth knowing

The project's own pages say it uses no cookies and collects no personally identifiable information. Its installation guide depends on PipelineDB for data storage, and the database is recorded as PostgreSQL because the guide's image is a PostgreSQL build. The project publishes tags without GitHub releases, and the newest tag is the release date the record shows.
