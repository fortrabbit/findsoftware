---
id: next-i18next
name: next-i18next
urls:
  home: https://next.i18next.com
  repository: https://github.com/i18next/next-i18next
category:
  - library
description: Translation layer for Next.js apps that connects i18next to the App Router and Pages Router, with server and client helpers.
status: active
maintainer: i18next
firstRelease: 2018
language: javascript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 20
basedOn:
  - i18next
  - nextjs
runsAs:
  - static
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "16"
latestReleaseDate: 2026-11-16
githubStargazers: 6164
npmWeeklyDownloads: 713632
contributors: 101
dependentRepos: 3238
dependentPackages: 133
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://next.i18next.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/i18next/next-i18next
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/i18next/next-i18next/commits/7f4790cdf7cec0692df718812778b55d8065193d
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/i18next/next-i18next/master/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/i18next/next-i18next/master/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://raw.githubusercontent.com/i18next/next-i18next/master/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://raw.githubusercontent.com/i18next/next-i18next/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/i18next/next-i18next
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/i18next/next-i18next/master/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/i18next/next-i18next/v16.4.10/package.json
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://raw.githubusercontent.com/i18next/next-i18next/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/i18next/next-i18next/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/i18next/next-i18next
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/i18next/next-i18next/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/i18next/next-i18next/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/i18next/next-i18next/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/i18next/next-i18next
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/i18next/next-i18next/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/next-i18next
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/next-i18next
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/next-i18next
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
---

next-i18next adds translations to Next.js apps. It is a thin layer on top of i18next and react-i18next that handles the Next.js-specific wiring, and it supports the App Router, the Pages Router and apps that mix both. Server Components read translations through getT, Client Components through useT, and createProxy handles language detection and routing.

Translation files can sit in the public folder, be bundled with the app through a resource loader, or be loaded by i18next backends such as HTTP or a hosted service. The [project site](https://next.i18next.com/) is the documentation.

## Worth knowing

On serverless platforms such as Vercel or AWS Lambda, files in the public folder are not available on the filesystem at runtime, so the README tells users to load them with a resource loader. In a static export the proxy cannot run, and the options that depend on it do not work.
