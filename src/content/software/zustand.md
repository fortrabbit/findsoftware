---
id: zustand
name: Zustand
urls:
  home: https://zustand.docs.pmnd.rs/
  repository: https://github.com/pmndrs/zustand
  docs: https://zustand.docs.pmnd.rs/
  plugins: https://zustand.docs.pmnd.rs/reference/integrations/third-party-libraries
category:
  - library
description: Small state-management library whose store is a hook, used in React and usable without React.
status: active
maintainer: Paul Henschel
firstRelease: 2019
language: javascript
basedOn:
  - react
installMethod: npm, yarn, pnpm, bun, deno
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-11-06
githubStargazers: 58935
npmWeeklyDownloads: 92074815
contributors: 336
dependentRepos: 62080
dependentPackages: 1976
social:
  discord: https://discord.gg/poimandres
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://zustand.docs.pmnd.rs/
    checkedAt: 2026-11-17
  - field: urls
    url: https://api.github.com/repos/pmndrs/zustand
    checkedAt: 2026-11-17
  - field: urls
    url: https://github.com/pmndrs/zustand/blob/main/README.md
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://github.com/pmndrs/zustand/blob/main/LICENSE
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://registry.npmjs.org/zustand
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/pmndrs/zustand
    checkedAt: 2026-11-17
  - field: category
    url: https://github.com/pmndrs/zustand/blob/main/README.md
    checkedAt: 2026-11-17
  - field: basedOn
    url: https://zustand.docs.pmnd.rs/
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://zustand.docs.pmnd.rs/
    checkedAt: 2026-11-17
  - field: license
    url: https://api.github.com/repos/pmndrs/zustand
    checkedAt: 2026-11-17
  - field: licenseModel
    url: https://github.com/pmndrs/zustand/blob/main/LICENSE
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://github.com/pmndrs/zustand/releases/tag/v5.1.0
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://github.com/pmndrs/zustand/releases/tag/v5.1.0
    checkedAt: 2026-11-17
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/zustand
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/pmndrs/zustand
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/pmndrs/zustand/contributors?per_page=1
    checkedAt: 2026-11-17
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/zustand
    checkedAt: 2026-11-17
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/zustand
    checkedAt: 2026-11-17
  - field: urls
    url: https://github.com/pmndrs/zustand/blob/main/README.md
    checkedAt: 2026-11-17
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

Zustand is a state-management library in which the store is a hook. Components select the part of the state they read and re-render only when that part changes, and no provider has to wrap the app. A store is created with a single `create` call, and code outside components can read and write it through `getState` and `setState`. Middleware adds persistence, Immer-based updates, Redux devtools logging and a Redux-style reducer pattern. The core imports and runs without React, and the documentation describes sharing a store with React Native and other non-React code.

## Worth knowing

Middleware that changes `set` or `get` does not apply to `getState` and `setState`. The README advises against that outside-component technique in React Server Components. Setting state merges by default; the replace flag swaps in a new state model instead, which can wipe parts such as actions. A component that reads the whole store with no selector re-renders on every change.
