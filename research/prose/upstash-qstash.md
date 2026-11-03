QStash is a hosted messaging and scheduling service that Upstash, Inc. runs. An application publishes a message over HTTP, and QStash delivers it to the application's endpoint, with retries and delays. A schedule publishes messages on a cron expression. The service is offered in an EU region and a US region, and the [documentation](https://upstash.com/docs/qstash/overall/getstarted) describes how to publish messages and choose a region.

## Worth knowing

QStash has no self-hosted form, so it runs only on Upstash's infrastructure. A local development server from the QStash CLI exists for testing, and it keeps its data in memory. The company's compare page sets QStash against BullMQ, Kafka, Amazon SQS, Amazon SNS and Google Pub/Sub.

Requests whose body exceeds the plan's maximum message size receive an HTTP 412 error. SAML single sign-on is listed for the Enterprise plan.
