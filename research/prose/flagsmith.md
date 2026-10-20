Flagsmith manages feature flags and remote config for web, mobile and server-side apps. Its server is a Python API built with Django and the Django REST Framework, a web dashboard written in Node.js and React talks to it over REST, and PostgreSQL stores the data. Besides self-hosting, the docs describe a cloud service and a private cloud deployment.

## Worth knowing

A self-hosted instance keeps the API, the dashboard and the database running, so it needs a host that runs processes; the [Docker guide](https://docs.flagsmith.com/deployment-self-hosting/hosting-guides/docker) sets them up with Docker Compose. Enterprise Edition requires a Flagsmith Enterprise license, and the core functionality is open source.
