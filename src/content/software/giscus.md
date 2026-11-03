---
id: giscus
name: giscus
urls:
  home: https://giscus.app
  repository: https://github.com/giscus/giscus
  docs: https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md
category:
  - community
description: Comments system that stores a site's comments as GitHub Discussions and shows them on the page through a script tag.
status: active
maintainer: Sage M. Abdullah
language: javascript
i18n: multiple languages
installMethod: script-tag
licenseModel: open-source
license: MIT
githubStargazers: 12205
contributors: 80
social:
  forum: https://github.com/giscus/giscus/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://giscus.app
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/giscus/giscus
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/giscus/giscus/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://giscus.app
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/giscus/giscus
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://giscus.app
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/giscus/giscus/blob/main/SELF-HOSTING.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/giscus/giscus
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/giscus/giscus/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: i18n
    url: https://giscus.app
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/giscus/giscus
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/giscus/giscus/contributors
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

giscus is a comments system that keeps a site's comments as GitHub Discussions. The creator names a public repository, and the discussion for each page is found through a mapping the configuration sets, such as the page pathname or title. When no discussion matches, the giscus bot creates one the first time someone comments or reacts.

The creator adds a script tag to the site's template, and the comments load into the page inside an iframe. Visitors post by authorizing the giscus GitHub App, or they comment on the discussion on GitHub directly. Self-hosting is the other route: the creator registers a GitHub App and deploys the giscus web app.

## Worth knowing

The comments live on GitHub. Visitors need a GitHub account to post, the repository has to be public, and Discussions has to be enabled on it.
