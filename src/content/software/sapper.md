---
id: sapper
name: Sapper
urls:
  home: https://sapper.svelte.dev
  repository: https://github.com/sveltejs/sapper
  docs: https://sapper.svelte.dev/docs
category:
  - framework
description: Framework for building server-rendered Svelte web applications, deprecated in favor of SvelteKit.
status: discontinued
maintainer: Svelte
firstRelease: 2017
language: javascript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 10
basedOn:
  - svelte
templating: svelte
runsAs:
  - always-on
  - static
renderingModes:
  - server
  - static
installMethod: npx degit sveltejs/sapper-template
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2021-09-30
githubStargazers: 6907
npmWeeklyDownloads: 19181
contributors: 114
httpArchiveSites: 114
dependentRepos: 3251
dependentPackages: 49
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://api.github.com/repos/sveltejs/sapper
    checkedAt: 2026-10-23
  - field: status
    url: https://sapper.svelte.dev/docs
    checkedAt: 2026-10-23
  - field: status
    url: https://registry.npmjs.org/sapper/latest
    checkedAt: 2026-10-23
  - field: urls
    url: https://sapper.svelte.dev/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/sveltejs/sapper
    checkedAt: 2026-10-23
  - field: urls
    url: https://sapper.svelte.dev/docs
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://api.github.com/users/sveltejs
    checkedAt: 2026-10-23
  - field: category
    url: https://sapper.svelte.dev/docs
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://api.github.com/repos/sveltejs/sapper
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/sveltejs/sapper
    checkedAt: 2026-10-23
  - field: runtime
    url: https://sapper.svelte.dev/docs
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://sapper.svelte.dev/docs
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://sapper.svelte.dev/docs
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://sapper.svelte.dev/docs
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://sapper.svelte.dev/docs
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://sapper.svelte.dev/docs
    checkedAt: 2026-10-23
  - field: templating
    url: https://sapper.svelte.dev/docs
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/sveltejs/sapper
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/sveltejs/sapper/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/sapper
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/sapper/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/sapper
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/sveltejs/sapper
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/sveltejs/sapper/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/sapper
    checkedAt: 2026-10-23
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/sapper
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/sapper
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Sapper is a framework for building web applications with Svelte. Pages are Svelte components in .svelte files, and Sapper renders each one on the server first, then lets the browser take over. The production build writes a Node app that runs from the project root, and a static export can be served as plain files. The docs start a project by cloning the sapper-template repository with degit.

## Worth knowing

Sapper is deprecated in favor of SvelteKit, and the npm package carries the same deprecation message. The repository is archived on GitHub.
