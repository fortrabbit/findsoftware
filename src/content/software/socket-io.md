---
id: socket-io
name: Socket.IO
urls:
  home: https://socket.io
  repository: https://github.com/socketio/socket.io
  docs: https://socket.io/docs/v4/
category:
  - library
  - backend
description: Library that enables low-latency, bidirectional and event-based communication between a client and a server.
status: active
maintainer: Guillermo Rauch and Socket.IO contributors
maintainerType: community
firstRelease: 2010
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 10
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-09-25
githubStargazers: 63236
npmWeeklyDownloads: 26171098
contributors: 402
dependentRepos: 1351985
dependentPackages: 10715
social:
  x: https://twitter.com/SocketIO
  forum: https://github.com/socketio/socket.io/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://socket.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/socketio/socket.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://socket.io/docs/v4/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/socketio/socket.io
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/socketio/socket.io/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://socket.io/docs/v4/
    checkedAt: 2026-11-03
  - field: category
    url: https://socket.io
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/socketio/socket.io/languages
    checkedAt: 2026-11-03
  - field: runtime
    url: https://socket.io/docs/v4/server-installation/
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://registry.npmjs.org/socket.io/latest
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://socket.io/docs/v4/server-installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://socket.io/docs/v4/server-installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://socket.io/docs/v4/server-installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://socket.io/docs/v4/server-installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://socket.io/docs/v4/client-installation/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/socketio/socket.io/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/socketio/socket.io/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://registry.npmjs.org/socket.io/latest
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/socket.io
    checkedAt: 2026-11-03
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/socket.io
    checkedAt: 2026-11-03
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/socket.io
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/socketio/socket.io
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/socketio/socket.io
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Socket.IO is a library for low-latency, bidirectional and event-based communication between a client and a server. The server is installed from the socket.io npm package with npm, Yarn, pnpm or Bun, and the browser client is a separate package. The client can also be loaded from a CDN. The connection uses WebSocket for transport when possible and falls back to HTTP long-polling when the WebSocket connection cannot be established.

## Worth knowing

Socket.IO is not a WebSocket implementation. It adds its own metadata to each packet on top of the transport, so a plain WebSocket client does not speak it. The docs advise against using it in a background service for mobile applications, because the library keeps an open TCP connection to the server.
