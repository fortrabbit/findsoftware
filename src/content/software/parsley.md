---
id: parsley
name: Parsley
urls:
  home: https://parsleyjs.org/
  repository: https://github.com/guillaumepotier/Parsley.js
  docs: https://parsleyjs.org/doc/index.html
category:
  - library
description: JavaScript form validation library that reads its rules from HTML data attributes on form fields.
status: stub
maintainer: Guillaume Potier and Marc-André Lafortune
maintainerType: individual
firstRelease: 2012
language: javascript
i18n: built-in error messages shipped in English, with translations loaded as locale files after Parsley
installMethod: npm, bower, download
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2021-11-21
githubStargazers: 8964
npmWeeklyDownloads: 32692
contributors: 207
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://parsleyjs.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/guillaumepotier/Parsley.js
    checkedAt: 2026-11-16
  - field: urls
    url: https://parsleyjs.org/doc/index.html
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/guillaumepotier/Parsley.js/commits/575c227f7a835212d1c9525c27dade3df745f279
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/guillaumepotier/Parsley.js/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://parsleyjs.org/doc/index.html
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/guillaumepotier/Parsley.js
    checkedAt: 2026-11-16
  - field: i18n
    url: https://parsleyjs.org/doc/index.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://parsleyjs.org/doc/download.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://parsleyjs.org/doc/download.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://parsleyjs.org/doc/index.html
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/guillaumepotier/Parsley.js/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/guillaumepotier/Parsley.js/releases/tag/2.9.2
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/guillaumepotier/Parsley.js/releases/tag/2.9.2
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/guillaumepotier/Parsley.js
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/guillaumepotier/Parsley.js/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/parsleyjs
    checkedAt: 2026-11-16
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

Parsley validates form fields on the frontend, before the form is sent to a server. Rules are written as data attributes on the fields, and a page can also bind a form from JavaScript with a call on the form element. Error messages ship in English, and locale files loaded after Parsley translate them.

## Worth knowing

Parsley needs jQuery 1.8 or later, which the docs say must be included before Parsley. The README says the project is considered stable and no new features are planned, with minimal maintenance; good quality pull requests that fix bugs will be merged.
