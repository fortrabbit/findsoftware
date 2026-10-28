---
id: theme-ui
name: Theme UI
urls:
  home: https://theme-ui.com
  repository: https://github.com/system-ui/theme-ui
  docs: https://theme-ui.com/getting-started
category:
  - ui-library
  - css-framework
description: Library for building themeable user interfaces from a theme object, with an sx prop for theme-aware styles.
status: active
maintainer: Brent Jackson
firstRelease: 2019
language: javascript
basedOn:
  - emotion
  - react
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-01-02
githubStargazers: 5409
npmWeeklyDownloads: 40027
contributors: 133
dependentRepos: 17191
dependentPackages: 1013
social:
  discord: https://discord.gg/theme-ui
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://theme-ui.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/system-ui/theme-ui
    checkedAt: 2026-10-28
  - field: urls
    url: https://theme-ui.com/getting-started
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/theme-ui
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/system-ui/theme-ui/blob/stable/LICENSE.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/system-ui/theme-ui
    checkedAt: 2026-10-28
  - field: category
    url: https://theme-ui.com/components
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/system-ui/theme-ui/blob/develop/packages/theme-ui/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/system-ui/theme-ui/blob/develop/packages/theme-ui/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://api.github.com/repos/system-ui/theme-ui
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://theme-ui.com/getting-started
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/system-ui/theme-ui
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://api.github.com/repos/system-ui/theme-ui
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/system-ui/theme-ui/releases/tag/v0.17.4
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/system-ui/theme-ui/releases/tag/v0.17.4
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/system-ui/theme-ui
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/system-ui/theme-ui/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-19:2026-10-25/theme-ui
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/theme-ui
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/theme-ui
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
---

Theme UI is a library for building themeable React interfaces whose colors, typography and layout come from one theme object. A project installs it with npm together with @emotion/react, wraps the application in a ThemeUIProvider that receives the theme, and styles elements with the sx prop, which takes its values from the theme. The library also ships built-in layout, grid, form and button components, and it is built with Emotion for scoped styles. The documentation is at theme-ui.com.

## Worth knowing

The README calls Theme UI the next evolution of Styled System. The sx prop is enabled in a file by a JSX import source comment, or for a project by a setting in the Babel config.
