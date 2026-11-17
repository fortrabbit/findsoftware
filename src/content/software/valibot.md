---
id: valibot
name: Valibot
urls:
  home: https://valibot.dev
  repository: https://github.com/open-circle/valibot
  docs: https://valibot.dev/guides/introduction/
category:
  - library
description: Modular TypeScript schema library for validating structured data, with a pipeline API and tree-shakable functions.
status: active
maintainer: Fabian Hiller
firstRelease: 2023
language: javascript
runtime:
  - node
  - bun
  - deno
hosting:
  - node
  - bun
  - deno
i18n: error messages in the language of your users, official translations package
installMethod: npm, jsr, deno.land/x
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-09-09
githubStargazers: 9073
npmWeeklyDownloads: 32174543
contributors: 207
social:
  discord: https://discord.gg/w5mRTETqzv
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://api.github.com/repos/open-circle/valibot
    checkedAt: 2026-11-17
  - field: urls
    url: https://api.github.com/repos/open-circle/valibot
    checkedAt: 2026-11-17
  - field: urls
    url: https://valibot.dev/guides/introduction.md
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://registry.npmjs.org/valibot
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://github.com/open-circle/valibot/blob/main/LICENSE.md
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/open-circle/valibot
    checkedAt: 2026-11-17
  - field: category
    url: https://valibot.dev/guides/introduction.md
    checkedAt: 2026-11-17
  - field: runtime
    url: https://valibot.dev/guides/installation.md
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://valibot.dev/guides/installation.md
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://valibot.dev/guides/installation.md
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://valibot.dev/guides/installation.md
    checkedAt: 2026-11-17
  - field: i18n
    url: https://valibot.dev/guides/internationalization.md
    checkedAt: 2026-11-17
  - field: license
    url: https://github.com/open-circle/valibot/blob/main/LICENSE.md
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://github.com/open-circle/valibot/releases/tag/v1.5.0
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://github.com/open-circle/valibot/releases/tag/v1.5.0
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/open-circle/valibot
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/open-circle/valibot/contributors?per_page=1
    checkedAt: 2026-11-17
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/valibot
    checkedAt: 2026-11-17
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

Valibot is a TypeScript schema library. A schema describes the shape of a data set, and Valibot checks unknown data against it at runtime while the same schema gives the static type. Each validation and transformation is a separate function, so a bundler keeps only the functions a project imports. The [installation guide](https://valibot.dev/guides/installation/) lists the install routes for Node, Bun and Deno.

The project ships a codemod that converts Zod schemas, and the [Zod migration guide](https://valibot.dev/guides/migrate-from-zod/) describes the move. Further migration guides cover other schema libraries, and error messages can be translated through a separate i18n package.
