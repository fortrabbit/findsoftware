Sanity is a hosted content platform made of two parts: Sanity Studio, an editing interface, and the Content Lake, a hosted database that the studio connects to. Studio is an open-source React single-page app that runs in the browser and is created with one npm command. Content is queried through GROQ, and GraphQL APIs can also be deployed. Sanity US Inc. operates the platform. The studio can be deployed with the Sanity CLI or self-hosted as a static single-page app on any host that supports single-page-app routing, while the [Studio deployment guide](https://www.sanity.io/docs/studio/deployment) states that the Content Lake stays on Sanity's infrastructure.

## Worth knowing

Content storage exists only as a hosted service, so a self-hosted studio still depends on Sanity's APIs to read and write content. The hosted API applies rate limits per IP address and per dataset.
