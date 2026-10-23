---
id: nuxt-studio
name: Nuxt Studio
urls:
  home: https://nuxt.studio
  repository: https://github.com/nuxt-content/nuxt-studio
  docs: https://nuxt.studio/introduction
category:
  - cms
description: Self-hosted visual editor module for Nuxt Content websites that commits content changes to GitHub or GitLab.
status: active
maintainer: Vercel, Inc.
maintainerType: company
firstRelease: 2026
language: javascript
basedOn:
  - nuxt
adminUi: true
i18n: the Studio interface is translated
renderingModes:
  - static
  - server
installMethod: npx nuxi module add nuxt-studio
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-16
githubStargazers: 741
npmWeeklyDownloads: 6174
contributors: 58
social:
  x: https://x.com/nuxtstudio
  bluesky: https://go.nuxt.com/bluesky
  discord: https://discord.gg/sBXDm6e8SP
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://nuxt.studio
    checkedAt: 2026-10-23
  - field: urls
    url: https://nuxt.studio/introduction
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/nuxt-content/nuxt-studio
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/nuxt-content/nuxt-studio/blob/main/license.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/nuxt-content/nuxt-studio
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://nuxt.studio/introduction
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/nuxt-content/nuxt-studio/main/license.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/nuxt-content/nuxt-studio
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/nuxt-content/nuxt-studio
    checkedAt: 2026-10-23
  - field: category
    url: https://nuxt.studio
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/nuxt-content/nuxt-studio
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://nuxt.studio
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://nuxt.studio/introduction
    checkedAt: 2026-10-23
  - field: i18n
    url: https://nuxt.studio
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/nuxt-content/nuxt-studio
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/nuxt-content/nuxt-studio/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/nuxt-studio
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/nuxt-content/nuxt-studio/releases/tag/v1.8.0
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/nuxt-content/nuxt-studio/releases/tag/v1.8.0
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/nuxt-content/nuxt-studio/releases/tag/v1.0.0
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · CMS
ai: authored
packagistDownloads: null
---

Nuxt Studio is a module for Nuxt that adds an editor to a Nuxt Content website in production. Editors sign in through OAuth with GitHub, GitLab or Google, through an SSO server, or through a custom flow, and edit Markdown in a visual editor or a code editor, fill in forms generated from the collection schema, and manage media. Publishing commits the changes to the Git repository, and the site's CI/CD pipeline rebuilds and deploys the site.

The module is installed into the Nuxt application with the Nuxt CLI. Its [introduction](https://nuxt.studio/introduction) says the module evolved from a hosted platform of the same name into an open-source module that runs inside the site's own application.

## Worth knowing

The introduction says the module requires a server-side route for authentication, so the site must be deployed on a platform that supports server-side rendering. Static generation remains supported for the site itself.

The AI features call the Vercel AI Gateway, which is a third-party service the module uses when those features are enabled.
