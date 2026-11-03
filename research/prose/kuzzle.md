Kuzzle is a backend server, written in TypeScript and run on Node.js, that gives applications a pre-built API for storing data, managing users and rights, and sending realtime notifications. Applications reach it over HTTP, WebSocket and MQTT, and the officially supported SDKs cover JavaScript, Go, Java, C#, Dart and the JVM. The project describes it as a backend with ready-to-use features that can be extended in the same way as any other framework. Kuzzle uses Elasticsearch as its document storage, so the Node.js application runs beside Elasticsearch and Redis.

The [run guide](https://docs.kuzzle.io/core/2/guides/getting-started/run-kuzzle/) starts the stack with Docker Compose or installs the npm package `kuzzle`. The Admin Console is a Vue.js single page application for managing data and user permissions, and the project also hosts an online copy of it.

## Worth knowing

The run guide says Node.js 25 and later are not supported. The deployment guide recommends cluster mode for production, and the company offers support for those deployments.
