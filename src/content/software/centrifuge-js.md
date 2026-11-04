---
id: centrifuge-js
name: centrifuge-js
urls:
  home: https://centrifugal.dev
  repository: https://github.com/centrifugal/centrifuge-js
  docs: https://centrifugal.dev/docs/transports/client_sdk
category:
  - backend
description: JavaScript client SDK that connects a browser, Node.js or React Native app to a Centrifugo or Centrifuge server over WebSocket or HTTP-based transports.
status: active
maintainer: Centrifugal Labs LTD
firstRelease: 2015
hqCountry: CY
language: javascript
installMethod: npm install
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-10-20
githubStargazers: 512
npmWeeklyDownloads: 2004075
contributors: 30
social:
  x: https://twitter.com/centrifugalabs
  discord: https://discord.gg/tYgADKx
  youtube: https://www.youtube.com/channel/UCdQmdbYM5pzqrrRFmt6KA1Q
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://centrifugal.dev
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/centrifugal/centrifuge-js
    checkedAt: 2026-11-04
  - field: urls
    url: https://centrifugal.dev/docs/transports/client_sdk
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/centrifugal/centrifuge-js/blob/master/LICENSE
    checkedAt: 2026-11-04
  - field: hqCountry
    url: https://centrifugal.dev/company
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/centrifugal/centrifuge-js
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/centrifugal/centrifuge-js/blob/master/LICENSE
    checkedAt: 2026-11-04
  - field: language
    url: https://github.com/centrifugal/centrifuge-js
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/centrifugal/centrifuge-js
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/centrifugal/centrifuge-js
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/centrifugal/centrifuge-js
    checkedAt: 2026-11-04
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/centrifuge
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://github.com/centrifugal/centrifuge-js
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/centrifugal/centrifuge-js/contributors?per_page=1
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://github.com/centrifugal/centrifuge-js/releases/tag/5.8.0
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://github.com/centrifugal/centrifuge-js/releases/tag/5.8.0
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://registry.npmjs.org/centrifuge
    checkedAt: 2026-11-04
ai: authored
packagistDownloads: null
---

centrifuge-js is a JavaScript client SDK that connects a browser, a Node.js process or a React Native app to a Centrifugo or Centrifuge server. WebSocket is the main transport. When a WebSocket connection cannot be established, for example behind a corporate firewall or proxy, the SDK can use HTTP-streaming or SSE instead, and it offers WebTransport as an experimental option. The library works with JSON by default, and a separate Protobuf build sends binary payloads.

The package is installed from npm, or loaded in a page from a CDN script. The [SDK documentation](https://centrifugal.dev/docs/transports/client_sdk) holds the feature matrix. Centrifugal Labs LTD maintains the SDK under the MIT license.

## Worth knowing

The SDK is a client only. A Centrifugo or Centrifuge server must accept the connection, and the HTTP fallbacks need bidirectional emulation enabled on the server first. SockJS usage is deprecated.
