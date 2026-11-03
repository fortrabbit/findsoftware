---
id: feedbase
name: Feedbase
urls:
  home: https://feedbase.app
  repository: https://github.com/chroxify/feedbase
  docs: https://docs.feedbase.app
category:
  - forms
description: Open-source feedback portal and changelog for product teams, built with Next.js and Supabase.
status: active
maintainer: Christo Todorov
maintainerType: individual
firstRelease: 2024
language: javascript
databases:
  - postgres
installMethod: docker-image
licenseModel: open-source
license: AGPL-3.0
currentMajor: "0"
latestReleaseDate: 2024-03-08
githubStargazers: 675
contributors: 4
social:
  x: https://x.com/0xChroxify
  discord: https://discord.gg/UmWgwcxbpy
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://feedbase.app/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/chroxify/feedbase
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.feedbase.app/introduction
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://api.github.com/users/chroxify
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/chroxify/feedbase
    checkedAt: 2026-11-03
  - field: category
    url: https://feedbase.app/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/chroxify/feedbase/blob/main/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/chroxify/feedbase/releases/tag/v0.1.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/chroxify/feedbase/releases/tag/v0.1.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/chroxify/feedbase/releases/tag/v0.1.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/chroxify/feedbase
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/chroxify/feedbase/contributors
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.feedbase.app/self-hosting/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.feedbase.app/self-hosting/vercel
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.feedbase.app/introduction
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.feedbase.app/development/installation
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

Feedbase is an open-source feedback portal and changelog for product teams, written in TypeScript on Next.js, with Supabase for the database and sign-in. The project hosts a cloud version, and its self-hosting guides deploy the app on Vercel or run a Docker image, each with a Supabase project behind it. The [API reference](https://docs.feedbase.app/api-reference/introduction) documents a Public API for public project data and a Project API that needs an API key, where a public-scope key is meant for the project's TypeScript SDK.

## Worth knowing

The Docker guide says Docker support is not yet fully stable, and the README describes the project as being in very early stages of development. The repository has a single tagged release.
