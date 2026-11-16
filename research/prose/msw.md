Mock Service Worker is an API mocking library for JavaScript that answers an application's requests with mocked responses while the application code stays unchanged. In the browser it uses the Service Worker API to intercept requests at the network level. In Node.js it intercepts requests at the socket level, and the same request handlers serve tests, local development and debugging in both environments.

Handlers use an Express-like routing syntax and can describe REST, GraphQL, Server-Sent Events and WebSocket traffic. The [documentation](https://mswjs.io/docs/) covers setup for each environment, and a [comparison page](https://mswjs.io/docs/comparison) sets it beside Nock, JSON Server, Mirage, Cypress and Playwright.

## Worth knowing

The FAQ says Node.js versions below a stated minimum are not supported.
