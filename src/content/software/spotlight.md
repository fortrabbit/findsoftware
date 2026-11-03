---
id: spotlight
name: Spotlight
urls:
  home: https://spotlightjs.com
  repository: https://github.com/getsentry/spotlight
  docs: https://spotlightjs.com/docs/
category:
  - analytics
description: Local development tool that gives Sentry SDKs a place on the developer's machine to send errors, traces and logs.
status: active
maintainer: Sentry
firstRelease: 2023
language: javascript
runsAs:
  - local
installMethod: npx
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-10-26
githubStargazers: 629
npmWeeklyDownloads: 109967
contributors: 44
social:
  discord: https://discord.gg/EJjqM3XtXQ
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://spotlightjs.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/getsentry/spotlight
    checkedAt: 2026-11-03
  - field: urls
    url: https://spotlightjs.com/docs/
    checkedAt: 2026-11-03
  - field: category
    url: https://spotlightjs.com/docs/getting-started/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/getsentry/spotlight/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/getsentry/spotlight/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://registry.npmjs.org/@spotlightjs/spotlight/latest
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/getsentry/spotlight/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/getsentry/spotlight/releases
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/getsentry/spotlight
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://spotlightjs.com/docs/getting-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://spotlightjs.com/docs/getting-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://spotlightjs.com/docs/getting-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://spotlightjs.com/docs/getting-started/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/getsentry/spotlight/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/getsentry/spotlight/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/getsentry/spotlight
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/getsentry/spotlight
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@spotlightjs/spotlight
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Spotlight is a local development tool that brings Sentry's error tracking into the developer's own environment. An application adds Spotlight to its Sentry SDK configuration, and the SDK sends its events to the Sidecar, a local proxy server that runs on the developer's machine. The [getting-started guide](https://spotlightjs.com/docs/getting-started/) starts it with npx, and also covers a global npm install, a desktop app and a container image.

The tool works without a Sentry account.

## Worth knowing

The container image is published to GitHub Container Registry rather than Docker Hub, and the desktop app is a separate download from the npm package.
