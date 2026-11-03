Cap is a self-hosted CAPTCHA that checks visitors with proof-of-work and instrumentation challenges, which the visitor's browser solves in the background. The browser side is the `cap-widget` package from npm, a web component that a site can also load from a CDN. The server side is Cap Standalone, a Bun program that runs from the `tiago2/cap` Docker image, keeps its data in Redis or Valkey, and offers a web dashboard for site keys, a REST API and a verification endpoint compatible with reCAPTCHA. The project is made by tiago.zip.

## Worth knowing

The widget and the standalone server have separate release lines in one repository.
