---
id: connect-es
name: Connect for ECMAScript
urls:
  home: https://connectrpc.com
  repository: https://github.com/connectrpc/connect-es
  docs: https://connectrpc.com/docs/node/getting-started/
category:
  - backend
description: TypeScript implementation of Connect, a family of libraries for building type-safe APIs from Protocol Buffers schemas.
status: active
maintainer: The Connect Authors
maintainerType: community
firstRelease: 2022
language: javascript
runtime:
  - node
hosting:
  - node
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-27
githubStargazers: 1829
npmWeeklyDownloads: 8367026
contributors: 45
dependentRepos: 6
dependentPackages: 28
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://connectrpc.com/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/connectrpc/connect-es
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/connectrpc/connect-es/blob/main/README.md
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://connectrpc.com/
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/connectrpc/connect-es
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/connectrpc/connect-es/blob/main/README.md
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/connectrpc/connect-es/blob/main/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://connectrpc.com/docs/node/getting-started/
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/connectrpc/connect-es
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/connectrpc/connect-es/releases
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/connectrpc/connect-es/releases
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/connectrpc/connect-es/releases
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/connectrpc/connect-es
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/connectrpc/connect-es/contributors?per_page=1
    checkedAt: 2026-11-04
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@connectrpc/connect
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@connectrpc%2Fconnect
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@connectrpc%2Fconnect
    checkedAt: 2026-11-04
ai: authored
packagistDownloads: null
---

Connect for ECMAScript is the TypeScript side of Connect, a family of libraries for remote procedure calls over HTTP. The core package, @connectrpc/connect, provides the clients and servers for a service schema. Separate packages adapt them for web browsers, for plain Node.js servers, and for the Fastify, Next.js and Express frameworks. The README states that Connect implements gRPC, gRPC-Web and its own protocol.

Schemas are written in Protocol Buffers, and the README names Protobuf-ES as the Protobuf library Connect uses. The Node.js guide installs the packages with npm.

## Worth knowing

The Node.js examples serve requests from a plain HTTP server, which the README says is not fit for production use. The README points to a server plugins guide for Fastify, Next.js and Express.

Node.js support follows the maintained Node.js release lines, and browser support covers baseline browsers from the last 2.5 years.
