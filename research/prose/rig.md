RIG, the Reactive Interaction Gateway, sits between a frontend and its backend services. Backend events are picked up from Kafka, NATS or Amazon Kinesis and forwarded to connected clients over WebSocket, server-sent events or long polling, according to each client's subscriptions. Client requests can be proxied to HTTP backends and answered synchronously, or turned into messages for asynchronous processing, with the response returned to the open connection when the backend replies.

The project is written in Elixir and runs on the Erlang VM. The operator's guide says RIG is typically deployed with Docker, and its ports for client traffic and internal APIs, together with the message broker and JWT settings, are set through environment variables.

## Worth knowing

The repository includes Kubernetes deployment instructions, and the FAQ says no knowledge of Elixir or Erlang is needed to use RIG.
