---
id: mintlify
name: Mintlify
urls:
  home: https://mintlify.com
  docs: https://mintlify.com/docs
  pricing: https://mintlify.com/pricing
category:
  - ssg
description: Hosted documentation platform that builds sites from MDX files in a Git repository, with the mint CLI for local preview.
status: hosted-service
maintainer: Mintlify, Inc.
maintainerType: company
firstRelease: 2022
hqCountry: US
runtime:
  - node
runtimeMin: node 20
i18n: yes
runsAs:
  - local
installMethod: npm i -g mint
licenseModel: saas
license: Elastic-2.0
currentMajor: "4"
latestReleaseDate: 2026-10-22
npmWeeklyDownloads: 129661
social:
  x: https://x.com/mintlify
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://mintlify.com
    checkedAt: 2026-10-22
  - field: urls
    url: https://mintlify.com/docs
    checkedAt: 2026-10-22
  - field: urls
    url: https://mintlify.com/pricing
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://mintlify.com/legal/terms
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/mintlify
    checkedAt: 2026-10-22
  - field: category
    url: https://mintlify.com
    checkedAt: 2026-10-22
  - field: runtime
    url: https://mintlify.com/docs/cli/install
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://mintlify.com/docs/cli/install
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://mintlify.com/docs/cli/install
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://mintlify.com/docs/cli/preview
    checkedAt: 2026-10-22
  - field: license
    url: https://registry.npmjs.org/mint/latest
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://registry.npmjs.org/mint/latest
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://registry.npmjs.org/mint/latest
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/mint
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/mint
    checkedAt: 2026-10-22
  - field: hqCountry
    url: https://mintlify.com/legal/terms
    checkedAt: 2026-10-22
  - field: i18n
    url: https://mintlify.com/docs/guides/internationalization
    checkedAt: 2026-10-22
ai: authored
---

Mintlify is a hosted documentation platform that builds sites from MDX files kept in a Git repository. Changes reach the site by committing and pushing to that repository. The `mint` command-line tool, installed from npm, starts a local preview of a site on the developer's machine.

## Worth knowing

The public `mintlify/docs` repository holds the company's own documentation content, not the software. The npm package `mintlify` is an older name for the CLI, and the install docs say not to install it in scripts or CI.
