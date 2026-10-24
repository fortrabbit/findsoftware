---
id: sveltia-cms
name: Sveltia CMS
urls:
  home: https://sveltiacms.app/en/
  repository: https://github.com/sveltia/sveltia-cms
  docs: https://sveltiacms.app/en/docs/start
category:
  - headless-cms
  - cms
description: Git-based headless CMS, a single-page admin interface for editing content stored in a Git repository of a static site.
status: active
maintainer: Kohei Yoshino
firstRelease: 2023
language: javascript
hosting:
  - static
basedOn:
  - svelte
adminUi: true
i18n: yes
runsAs:
  - browser
  - static
installMethod: script tag loaded from the unpkg CDN
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-22
githubStargazers: 2987
npmWeeklyDownloads: 19748
contributors: 36
social:
  bluesky: https://bsky.app/profile/sveltiacms.app
  discord: https://discord.com/invite/5hwCGqup5b
  forum: https://github.com/sveltia/sveltia-cms/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://sveltiacms.app/en/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/sveltia/sveltia-cms
    checkedAt: 2026-10-23
  - field: urls
    url: https://sveltiacms.app/en/docs/start
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/sveltia/sveltia-cms/main/LICENSE.txt
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/sveltia/sveltia-cms/releases
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/sveltia/sveltia-cms
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://sveltiacms.app/en/docs/architecture
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/sveltia/sveltia-cms/main/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://sveltiacms.app/en/docs/start
    checkedAt: 2026-10-23
  - field: i18n
    url: https://raw.githubusercontent.com/sveltia/sveltia-cms/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://sveltiacms.app/en/docs/privacy
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://sveltiacms.app/en/docs/start
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/sveltia/sveltia-cms
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/sveltia/sveltia-cms/main/README.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/sveltia/sveltia-cms/releases/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/sveltia/sveltia-cms/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/sveltia/sveltia-cms
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/sveltia/sveltia-cms/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@sveltia/cms
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://sveltiacms.app/en/docs/start
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://sveltiacms.app/en/docs/start
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Sveltia CMS is a Git-based headless CMS: an admin interface that edits the content, configuration and media of a static site in the site's own Git repository. The admin is a single-page application that runs in the browser and is loaded from a CDN script or installed from npm. The [start guide](https://sveltiacms.app/en/docs/start) places it in a static files folder of the site, next to an index.html and a config.yml, and the admin signs in with the Git hosting provider. The project is built with Svelte and describes itself as the successor to Netlify CMS and Decap CMS.

## Worth knowing

The project describes itself as in beta before a stable 1.0 release, and its docs warn that breaking changes may still come before that release. The architecture page says the admin runs without a backend server, with GitHub authentication as the only exception.
