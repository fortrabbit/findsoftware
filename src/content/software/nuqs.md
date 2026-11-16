---
id: nuqs
name: nuqs
urls:
  home: https://nuqs.dev
  repository: https://github.com/47ng/nuqs
  docs: https://nuqs.dev/docs/installation
category:
  - library
description: Type-safe state manager for React that keeps state in the URL query string.
status: active
maintainer: François Best
maintainerType: individual
firstRelease: 2020
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-11-10
githubStargazers: 10908
npmWeeklyDownloads: 7771550
contributors: 77
social:
  x: https://x.com/nuqs47ng
  bluesky: https://bsky.app/profile/nuqs.dev
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/47ng/nuqs
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/47ng/nuqs
    checkedAt: 2026-11-16
  - field: urls
    url: https://nuqs.dev/docs/installation
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/47ng/nuqs/releases
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/47ng/nuqs/blob/next/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/47ng/nuqs/blob/next/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/47ng/nuqs
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/47ng/nuqs/blob/next/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/47ng/nuqs/blob/next/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/47ng/nuqs/blob/next/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/47ng/nuqs/blob/next/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/47ng/nuqs/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/47ng/nuqs/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/47ng/nuqs
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/47ng/nuqs/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/nuqs
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

nuqs keeps React state in the URL query string. Its hooks read a query key and return the value with a setter, in the same shape as React's useState, and parsers convert the string to types such as integers, booleans, dates and arrays. An adapter wraps the app for the router in use, and the package offers adapters for Next.js, a React single-page app, Remix, React Router and TanStack Router. Server code can parse the same keys with a loader, and server components can read them from a cache built from the parsers.

## Worth knowing

Parsers do not validate their input, so values that must have a particular shape need a schema library on top. Browsers rate-limit updates to the URL, so changes are queued and throttled, while the state the hook returns updates at once.
