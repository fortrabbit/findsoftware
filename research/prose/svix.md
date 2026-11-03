Svix is an open source webhook service. An application calls the Svix API to send a webhook, and Svix delivers it to the endpoints its customers have configured, with retries, signatures and a customer-facing portal. The server is written in Rust and is installed from the official Docker image or a pre-compiled binary, or built from source.

The server stores events in PostgreSQL, and it can use Redis for its task queue and cache. The company also runs a hosted version of the same service, which the [open source page](https://www.svix.com/open-source-webhook-service/) describes next to the self-hosted server. Svix's own comparison pages set it beside Convoy, Hook0 and Hookdeck Outpost as webhook-sending platforms.

## Worth knowing

Building from source needs a Rust build environment.
