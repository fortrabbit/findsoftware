---
id: github-pages-deploy-action
name: GitHub Pages Deploy Action
urls:
  repository: https://github.com/JamesIves/github-pages-deploy-action
  docs: https://github.com/JamesIves/github-pages-deploy-action/blob/dev/README.md
category:
  - dev-tool
description: GitHub Action that pushes a project's built folder to a branch that GitHub Pages serves.
status: active
maintainer: James Ives
maintainerType: individual
firstRelease: 2019
language: javascript
runsAs:
  - local
installMethod: GitHub Actions workflow step
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-08-08
githubStargazers: 4618
contributors: 39
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/JamesIves/github-pages-deploy-action
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/JamesIves/github-pages-deploy-action/blob/dev/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/JamesIves/github-pages-deploy-action
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/JamesIves/github-pages-deploy-action/blob/dev/LICENSE
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/JamesIves/github-pages-deploy-action/blob/dev/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/JamesIves/github-pages-deploy-action
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/JamesIves/github-pages-deploy-action/blob/dev/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/JamesIves/github-pages-deploy-action/blob/dev/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/JamesIves/github-pages-deploy-action/blob/dev/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/JamesIves/github-pages-deploy-action/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/JamesIves/github-pages-deploy-action/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/JamesIves/github-pages-deploy-action/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/JamesIves/github-pages-deploy-action
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/JamesIves/github-pages-deploy-action/contributors
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

GitHub Pages Deploy Action is a GitHub Action that a workflow runs after its build step. It pushes the folder named in its `folder` input to a branch, `gh-pages` by default, which GitHub Pages serves as the site. The action deploys with the repository's own token by default, and a personal access token or an SSH deploy key can be set in its inputs instead. Unless `single-commit` is set, the deployment branch keeps its history, and with `clean` on, the default, files that left the source are removed from it.

## Worth knowing

Without a token or SSH key, the workflow needs read and write permission on the repository token, or `contents: write` in the workflow file. With `single-commit` enabled, existing history on the deployment branch is wiped. The README says the action is developed on Ubuntu, and for a Windows build it suggests moving the built folder to an Ubuntu job through artifacts.
