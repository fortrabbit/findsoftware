AnyCable is a realtime server written in Go. It runs as a standalone server, a single binary, that accepts WebSocket connections; the docs present it as a drop-in replacement for Action Cable in Rails and for Reverb or Pusher in Laravel. Its documented features include delivery guarantees with recovery after disconnects, presence tracking, signed streams and the Pusher protocol. The homepage says it needs no further infrastructure for operation and scaling, because an embedded NATS pub/sub server is included, and that an existing Redis or NATS can be used as well. Installation routes are Homebrew, a release binary, an npm package and a Docker image, and the systemd guide recommends running the server as a system service.

## Worth knowing

The open-source server is MIT licensed. A commercial Pro edition adds memory and cluster features and some protocols, and AnyCable+ is the managed form of Pro. The editions page names Apollo GraphQL, long polling and OCPP as Pro-only protocols.
