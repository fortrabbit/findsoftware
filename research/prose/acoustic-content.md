Acoustic Content is a hosted headless content platform from Acoustic, L.P. It keeps content in its own database and exposes it through [REST APIs](https://developer.goacoustic.com/acoustic-content/docs/api) that retrieve, update and manage content. Editors manage pages and content in a content UI, and each API operation is limited to the user roles allowed to call it.

The Sites feature serves websites from a site application, which the docs describe as an Angular web application hosted on the Content CDN. Individual sites can be mapped to their own hostnames, and in preview mode draft content is overlaid on the published content.

## Worth knowing

The API and the content UI run on Acoustic's infrastructure as a subscription service. Requests are limited per subscription, and calls above the throughput limit receive HTTP 429.
