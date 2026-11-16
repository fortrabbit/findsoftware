SockJS-client is a browser JavaScript library that gives a page a WebSocket-like object for two-way communication with a server. The README says it tries native WebSockets first and falls back to other browser transports, such as streaming and polling, when those fail.

The client needs a server counterpart. The README names SockJS-node as the server for Node.js and lists servers for other languages.

## Worth knowing

A single SockJS session uses two browser connections to one domain, so the README says a page should not open more than one session to the same domain at a time.
