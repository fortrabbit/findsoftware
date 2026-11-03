---
id: typebot
name: Typebot
urls:
  home: https://typebot.com
  repository: https://github.com/baptisteArno/typebot.io
  docs: https://docs.typebot.com/
  pricing: https://typebot.com/pricing
category:
  - forms
description: Fair Source chatbot builder for creating chatbots visually, embedding them in websites and apps, and collecting their results.
status: active
maintainer: Typebot SASU
maintainerType: individual
firstRelease: 2022
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - postgres
runsAs:
  - always-on
installMethod: docker compose with the baptistearno/typebot-builder and typebot-viewer images
licenseModel: source-available
license: FSL-1.1-Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-10-20
githubStargazers: 10601
contributors: 89
social:
  bluesky: https://bsky.app/profile/typebot.io
  discord: https://typebot.com/discord
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://typebot.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.typebot.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://typebot.com/pricing
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/baptisteArno/typebot.io
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://typebot.com/privacy-policy
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/baptisteArno/typebot.io/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/baptisteArno/typebot.io/languages
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.typebot.com/self-hosting/get-started
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/baptisteArno/typebot.io/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/baptisteArno/typebot.io/releases/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/baptisteArno/typebot.io/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/baptisteArno/typebot.io
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/baptisteArno/typebot.io/contributors
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.typebot.com/self-hosting/deploy/manual
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.typebot.com/self-hosting/deploy/docker
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.typebot.com/self-hosting/get-started
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.typebot.com/self-hosting/deploy/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.typebot.com/self-hosting/deploy/vercel
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.typebot.com/self-hosting/deploy/manual
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Typebot is a chatbot builder in which bots are designed visually and then embedded in a website or app through its JavaScript library. Visitor answers are collected in the builder and can be exported as CSV. The self-hosted version has two Next.js applications, the builder where bots are designed and the viewer where visitors answer them, and it needs a Postgres database.

The self-hosting guides cover three routes: Docker, where a compose file starts the builder and viewer images on one server; Vercel, where each application is a separate project built from a fork of the repository; and a manual route on a Node.js server with bun, Nginx and PM2. The Docker route starts the server with docker-compose and serves the builder and the viewer on separate ports. The project is maintained by Typebot SASU, which also runs the Typebot Cloud service.

## Worth knowing

The code is under the Functional Source License. The license bars making the software available as a product that competes with Typebot's own service, and it becomes Apache 2.0 two years after the software is made available.
