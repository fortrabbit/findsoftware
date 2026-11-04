centrifuge-js is a JavaScript client SDK that connects a browser, a Node.js process or a React Native app to a Centrifugo or Centrifuge server. WebSocket is the main transport. When a WebSocket connection cannot be established, for example behind a corporate firewall or proxy, the SDK can use HTTP-streaming or SSE instead, and it offers WebTransport as an experimental option. The library works with JSON by default, and a separate Protobuf build sends binary payloads.

The package is installed from npm, or loaded in a page from a CDN script. The [SDK documentation](https://centrifugal.dev/docs/transports/client_sdk) holds the feature matrix. Centrifugal Labs LTD maintains the SDK under the MIT license.

## Worth knowing

The SDK is a client only. A Centrifugo or Centrifuge server must accept the connection, and the HTTP fallbacks need bidirectional emulation enabled on the server first. SockJS usage is deprecated.
