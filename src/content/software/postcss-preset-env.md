---
id: postcss-preset-env
name: PostCSS Preset Env
urls:
  home: https://preset-env.cssdb.org/
  repository: https://github.com/csstools/postcss-plugins
  docs: https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/README.md
category:
  - build-tool
description: PostCSS plugin pack that converts modern CSS into syntax most browsers understand, adding the fallbacks and polyfills the browser targets need.
status: active
maintainer: CSSTools Contributors
maintainerType: community
firstRelease: 2017
runtime:
  - node
runtimeMin: node 20
basedOn:
  - postcss
runsAs:
  - local
installMethod: npm install postcss-preset-env --save-dev
licenseModel: open-source
license: MIT-0, MIT No Attribution (MIT-0)
currentMajor: "11"
latestReleaseDate: 2026-10-05
githubStargazers: 1059
npmWeeklyDownloads: 8698633
contributors: 125
dependentRepos: 1638469
dependentPackages: 9438
social:
  discord: https://discord.gg/bUadyRwkJS
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://preset-env.cssdb.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/csstools/postcss-plugins
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/csstools/postcss-plugins/main/plugin-packs/postcss-preset-env/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/csstools/postcss-plugins/main/plugin-packs/postcss-preset-env/LICENSE.md
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/csstools/postcss-plugins/main/plugin-packs/postcss-preset-env/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/csstools/postcss-plugins/main/plugin-packs/postcss-preset-env/README.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/csstools/postcss-plugins/main/plugin-packs/postcss-preset-env/package.json
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/csstools/postcss-plugins/main/plugin-packs/postcss-preset-env/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/csstools/postcss-plugins/main/plugin-packs/postcss-preset-env/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://registry.npmjs.org/postcss-preset-env/latest
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/csstools/postcss-plugins/main/plugin-packs/postcss-preset-env/LICENSE.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/postcss-preset-env
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://registry.npmjs.org/postcss-preset-env/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://registry.npmjs.org/postcss-preset-env
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/csstools/postcss-plugins
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/csstools/postcss-plugins/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/postcss-preset-env
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/postcss-preset-env
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/postcss-preset-env
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://raw.githubusercontent.com/csstools/postcss-plugins/main/plugin-packs/postcss-preset-env/README.md
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
---

PostCSS Preset Env is a plugin pack for PostCSS that converts CSS written with newer features into syntax most browsers can read. It takes browser support data from CSSDB, which draws on Can I Use and MDN, and applies only the transformations that a project's browser targets need. It also includes Autoprefixer and shares the same browser list with it.

It is installed from npm and added to the plugin list of a PostCSS build. It runs in all Node environments, and its [README](https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/README.md) is the documentation.

## Worth knowing

Some features need a companion library in the browser. The README says this is because not every behavior can be polyfilled with CSS alone.
