---
id: happy-dom
name: Happy DOM
urls:
  repository: https://github.com/capricorn86/happy-dom
  docs: https://github.com/capricorn86/happy-dom/wiki
category:
  - library
  - testing
description: JavaScript implementation of a web browser's DOM without a graphical interface, used for testing and server-side rendering.
status: active
maintainer: David Ortner
maintainerType: individual
firstRelease: 2019
language: javascript
runtime:
  - node
  - bun
hosting:
  - node
  - bun
runtimeMin: node 20
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "21"
latestReleaseDate: 2026-10-20
githubStargazers: 4740
npmWeeklyDownloads: 33284809
contributors: 169
dependentRepos: 3800
dependentPackages: 1713
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://github.com/capricorn86/happy-dom
    checkedAt: 2026-11-09
  - field: urls
    url: https://github.com/capricorn86/happy-dom/wiki/Home
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://github.com/capricorn86/happy-dom/blob/master/LICENSE
    checkedAt: 2026-11-09
  - field: maintainerType
    url: https://github.com/capricorn86/happy-dom/blob/master/LICENSE
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://registry.npmjs.org/happy-dom
    checkedAt: 2026-11-09
  - field: category
    url: https://github.com/capricorn86/happy-dom
    checkedAt: 2026-11-09
  - field: category
    url: https://github.com/capricorn86/happy-dom/wiki/Home
    checkedAt: 2026-11-09
  - field: language
    url: https://github.com/capricorn86/happy-dom
    checkedAt: 2026-11-09
  - field: runtime
    url: https://github.com/capricorn86/happy-dom/blob/v21.0.4/packages/happy-dom/package.json
    checkedAt: 2026-11-09
  - field: runtime
    url: https://github.com/capricorn86/happy-dom/wiki/Setup-as-Test-Environment
    checkedAt: 2026-11-09
  - field: runtimeMin
    url: https://github.com/capricorn86/happy-dom/blob/v21.0.4/packages/happy-dom/package.json
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://github.com/capricorn86/happy-dom/wiki/Getting-started
    checkedAt: 2026-11-09
  - field: license
    url: https://github.com/capricorn86/happy-dom
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://github.com/capricorn86/happy-dom/blob/master/LICENSE
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://github.com/capricorn86/happy-dom/releases/tag/v21.0.4
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://github.com/capricorn86/happy-dom/releases/tag/v21.0.4
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/capricorn86/happy-dom
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/capricorn86/happy-dom/contributors?per_page=1
    checkedAt: 2026-11-09
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/happy-dom
    checkedAt: 2026-11-09
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/happy-dom
    checkedAt: 2026-11-09
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/happy-dom
    checkedAt: 2026-11-09
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

Happy DOM is a JavaScript implementation of a web browser without its graphical user interface. It is written in TypeScript and provides DOM features such as custom elements, declarative shadow DOM, mutation observers, tree walkers and the Fetch API. The project describes its purpose as emulating enough of a browser for testing, scraping web sites and server-side rendering, and the wiki names JSDOM as an alternative to it.

Test runners use it as their DOM environment. The [setup guide](https://github.com/capricorn86/happy-dom/wiki/Setup-as-Test-Environment) covers Vitest, Bun and the Node.js test runner.

## Worth knowing

With Vitest, the wiki says that the timer methods of the window do not work fully by default, because Vitest does not use the timer methods of Happy DOM. The guide gives a setup-file workaround that copies those functions into the global scope.
