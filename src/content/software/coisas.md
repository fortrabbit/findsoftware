---
id: coisas
name: Coisas
urls:
  home: https://coisas.fiatjaf.com/
  repository: https://github.com/fiatjaf/coisas
  docs: https://github.com/fiatjaf/coisas/blob/master/README.md
category:
  - cms
  - headless-cms
description: Client-side CMS that edits the Markdown and other files of a GitHub repository in the browser.
status: active
maintainer: fiatjaf
maintainerType: individual
language: javascript
hosting:
  - static
adminUi: true
runsAs:
  - static
installMethod: git clone, npm install, npm run build
licenseModel: open-source
license: MIT
githubStargazers: 333
contributors: 5
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://github.com/fiatjaf/coisas/blob/master/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/fiatjaf/coisas
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/fiatjaf/coisas/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/fiatjaf/coisas/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/fiatjaf/coisas
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/fiatjaf/coisas/blob/master/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/fiatjaf/coisas/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/fiatjaf/coisas/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/fiatjaf/coisas/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/fiatjaf/coisas/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/fiatjaf/coisas
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/fiatjaf/coisas/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/fiatjaf/coisas
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/fiatjaf/coisas/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Coisas is a headless CMS for editing the files of a GitHub repository. The README names Netlify CMS and Prose as similar tools, and says Coisas does not use a custom schema and is not tailored to Jekyll or any other site structure. It offers a file tree view, a metadata editor with automatic saving of Markdown and HTML files that have YAML front matter, an image gallery, and behavior and style customization from a file kept in the repository. Users go to the hosted address the README gives, or embed the app in their own site, for example in an `/admin/` section. The README describes a local build with npm and says a static server is needed.

## Worth knowing

The repository has no GitHub release and no tag. The project's own address returns an empty application page to a plain request, so no text was read from it. The README recommends HTTPS, because the service worker needs it.
