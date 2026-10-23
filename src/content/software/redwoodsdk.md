---
id: redwoodsdk
name: RedwoodSDK
urls:
  home: https://rwsdk.com
  repository: https://github.com/redwoodjs/sdk
  docs: https://docs.rwsdk.com
category:
  - framework
description: Server-first React framework that runs on the Cloudflare platform and starts as a Vite plugin.
status: active
maintainer: RedwoodJS Inc
maintainerType: company
firstRelease: 2025
language: javascript
basedOn:
  - react
  - vite
databases:
  - sqlite
renderingModes:
  - server
installMethod: npx create-rwsdk
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-09-23
githubStargazers: 1719
npmWeeklyDownloads: 6695
contributors: 61
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/redwoodjs/sdk
    checkedAt: 2026-10-22
  - field: urls
    url: https://github.com/redwoodjs/sdk
    checkedAt: 2026-10-22
  - field: urls
    url: https://docs.rwsdk.com/getting-started/quick-start
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/redwoodjs/sdk/main/LICENSE.md
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/rwsdk
    checkedAt: 2026-10-22
  - field: category
    url: https://raw.githubusercontent.com/redwoodjs/sdk/main/README.md
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://raw.githubusercontent.com/redwoodjs/sdk/main/README.md
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://raw.githubusercontent.com/redwoodjs/sdk/main/README.md
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/redwoodjs/sdk
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://raw.githubusercontent.com/redwoodjs/sdk/main/README.md
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://docs.rwsdk.com/getting-started/quick-start
    checkedAt: 2026-10-22
  - field: databases
    url: https://docs.rwsdk.com/experimental/database/
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/redwoodjs/sdk
    checkedAt: 2026-10-22
  - field: license
    url: https://raw.githubusercontent.com/redwoodjs/sdk/main/LICENSE.md
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/rwsdk/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/redwoodjs/sdk/releases/latest
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/redwoodjs/sdk
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/redwoodjs/sdk/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/rwsdk
    checkedAt: 2026-10-22
figure:
  emoji: 🧱
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Framework
ai: authored
packagistDownloads: null
---

RedwoodSDK is a server-first React framework that starts as a Vite plugin and adds React Server Components and Server Functions to a project. A route returns JSX, which renders on the server and reaches the browser as HTML.

The README says the framework is for Cloudflare (workerd) only, and the quick start deploys to Cloudflare with a single command. The built-in database uses SQLite Durable Objects and is marked experimental.

## Worth knowing

RedwoodSDK has its own repository and is not part of the RedwoodJS framework, which the same organization maintains. The [hosting page](https://docs.rwsdk.com/core/hosting/) says Cloudflare's platform is not required and any bare-metal hosting provider can be used, which differs from the README's workerd-only statement.
