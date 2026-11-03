---
id: upstash-qstash
name: Upstash QStash
urls:
  home: https://upstash.com/docs/qstash
  docs: https://upstash.com/docs/qstash/overall/getstarted
  pricing: https://upstash.com/pricing/qstash
category:
  - backend
  - database
description: Hosted HTTP message delivery and scheduling service that calls an endpoint with retries, delays and cron schedules.
status: hosted-service
maintainer: Upstash, Inc.
maintainerType: company
licenseModel: saas
social:
  x: https://twitter.com/upstash
  discord: https://upstash.com/discord
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://upstash.com/docs/qstash
    checkedAt: 2026-11-03
  - field: urls
    url: https://upstash.com/docs/qstash/overall/getstarted
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://upstash.com/trust/terms.pdf
    checkedAt: 2026-11-03
  - field: category
    url: https://upstash.com/docs/qstash/features/schedules
    checkedAt: 2026-11-03
  - field: category
    url: https://upstash.com/docs/qstash/overall/compare
    checkedAt: 2026-11-03
  - field: urls
    url: https://upstash.com/pricing/qstash
    checkedAt: 2026-11-03
ai: authored
---

QStash is a hosted messaging and scheduling service that Upstash, Inc. runs. An application publishes a message over HTTP, and QStash delivers it to the application's endpoint, with retries and delays. A schedule publishes messages on a cron expression. The service is offered in an EU region and a US region, and the [documentation](https://upstash.com/docs/qstash/overall/getstarted) describes how to publish messages and choose a region.

## Worth knowing

QStash has no self-hosted form, so it runs only on Upstash's infrastructure. A local development server from the QStash CLI exists for testing, and it keeps its data in memory. The company's compare page sets QStash against BullMQ, Kafka, Amazon SQS, Amazon SNS and Google Pub/Sub.

Requests whose body exceeds the plan's maximum message size receive an HTTP 412 error. SAML single sign-on is listed for the Enterprise plan.
