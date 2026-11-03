Hook0 is a webhook server that an application calls to send events, and that delivers each event to the endpoints the application's users subscribe to, with retries, signatures and delivery logs. The application sends an event with one POST to the server's REST API, the server keeps the events and their delivery attempts, and a web dashboard manages the webhooks. The server is built from source with Cargo or started with Docker Compose or a Kubernetes deployment file, and it keeps its data in PostgreSQL. The project is operated by FGRibreau SARL in France, which also runs the hosted service, [Hook0 Cloud](https://www.hook0.com/pricing).

## Worth knowing

The self-hosting guides for Docker Compose, bare metal and Kubernetes are each headed "Development Only", and they point production workloads to Hook0 Cloud. The same guides set DISABLE_TARGET_IP_CHECK to true, which lets a webhook target on a local address receive deliveries.
