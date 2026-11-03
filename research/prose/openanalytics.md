OpenAnalytics is web analytics built around one tracker script. The server is split into services: an ingest collector, a worker that writes events, a control plane, a query gateway, a realtime stream and a dashboard. Control-plane data sits in Postgres, events in ClickHouse and queues and caches in Valkey.

The self-hosted install is a Docker Compose stack that pulls published images, and the authors also run a hosted instance of the same code.

## Worth knowing

Four DNS names must point at the host before the first start, because certificates are issued on first boot and issuance fails without them. The README also states that migrations do not go down, so the way back from an upgrade is a restore.
