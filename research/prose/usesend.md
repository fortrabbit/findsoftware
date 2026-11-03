useSend is an open source email platform that sends product, transactional and marketing email through a REST API, an SMTP relay and a web dashboard. The dashboard shows deliveries, opens, clicks and bounces. The software runs as a Docker image, which can be started with Docker Compose together with Postgres and Redis, or on Railway. Redis serves as its queue and Postgres as its database. Mail goes out through Amazon SES, and delivery status comes back through SNS, so a self-hosted install needs an AWS account. The GitHub organization named useSend maintains the project.

## Worth knowing

The vendor runs a hosted version at app.usesend.com alongside the open source code, and the project says it is funded by that offering and by sponsors. Stored email content stays in the database unless a retention period is set, and images added in the editor go to S3-compatible storage.
