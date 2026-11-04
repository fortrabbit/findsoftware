---
id: dompurify
name: DOMPurify
urls:
  home: https://cure53.de/purify
  repository: https://github.com/cure53/DOMPurify
category:
  - library
description: DOM-based XSS sanitizer that cleans HTML, MathML and SVG markup in the browser or on Node.js.
status: active
maintainer: Dr.-Ing. Mario Heiderich, Cure53
maintainerType: individual
firstRelease: 2014
hqCountry: DE
language: javascript
runtime:
  - node
hosting:
  - node
licenseModel: open-source
license: MPL-2.0, Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-10-12
githubStargazers: 17503
npmWeeklyDownloads: 95817333
contributors: 125
dependentRepos: 56633
dependentPackages: 1705
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://cure53.de/purify
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/cure53/DOMPurify
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/cure53/DOMPurify/blob/main/package.json
    checkedAt: 2026-11-04
  - field: hqCountry
    url: https://cure53.de/impressum.php
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/cure53/DOMPurify/git/ref/tags/v0.3
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/cure53/DOMPurify/blob/main/README.md
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/cure53/DOMPurify
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/cure53/DOMPurify/blob/main/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/cure53/DOMPurify/blob/main/package.json
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/cure53/DOMPurify/blob/main/package.json
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/cure53/DOMPurify/releases/latest
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/cure53/DOMPurify/releases/latest
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/cure53/DOMPurify
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/cure53/DOMPurify/contributors?per_page=1
    checkedAt: 2026-11-04
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/dompurify
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/dompurify
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/dompurify
    checkedAt: 2026-11-04
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

DOMPurify is a DOM-based sanitizer that removes unsafe content from HTML, MathML and SVG strings to prevent cross-site scripting. The [README](https://github.com/cure53/DOMPurify/blob/main/README.md) says DOMPurify is included on a website and runs in the browser, and that it also works server-side with Node.js, where a DOM such as jsdom has to be supplied.

## Worth knowing

The README says that server-side use depends on the DOM supplied, that happy-dom is not considered safe for it, and that legacy browsers such as MSIE get no sanitizing; security updates for MSIE come from an older branch.
