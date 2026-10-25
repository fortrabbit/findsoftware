---
id: webiny
name: Webiny
urls:
  home: https://www.webiny.com
  repository: https://github.com/webiny/webiny-js
  docs: https://www.webiny.com/docs
  pricing: https://www.webiny.com/pricing
category:
  - headless-cms
description: TypeScript framework and headless CMS that a team deploys into its own AWS account as serverless infrastructure, with a GraphQL API and a website builder.
status: active
maintainer: Webiny Inc.
maintainerType: company
firstRelease: 2018
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
contentStore:
  - database
adminUi: true
headlessApi:
  - graphql
i18n: yes, localization
runsAs:
  - per-request
  - local
installMethod: npx create-webiny-project
licenseModel: open-core
license: MIT, Commercial license (Business Edition)
currentMajor: "6"
latestReleaseDate: 2026-10-20
githubStargazers: 8048
npmWeeklyDownloads: 384
contributors: 76
dependentRepos: 22
dependentPackages: 156
social:
  x: https://x.com/WebinyCMS
  youtube: https://youtube.com/webiny
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://www.webiny.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/webiny/webiny-js
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.webiny.com/docs
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/webiny/webiny-js/blob/next/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/webiny/webiny-js/releases
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/webiny/webiny-js/blob/next/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/webiny/webiny-js
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/webiny/webiny-js/blob/next/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/webiny/webiny-js/blob/next/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/webiny/webiny-js/blob/next/LICENSE
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/webiny/webiny-js/blob/next/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/webiny/webiny-js/blob/next/LICENSE
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/webiny/webiny-js/blob/next/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/webiny/webiny-js/blob/next/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/webiny/webiny-js/blob/next/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/webiny/webiny-js/blob/next/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.webiny.com/pricing
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/webiny/webiny-js/blob/next/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/webiny/webiny-js/blob/next/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/webiny/webiny-js/blob/next/README.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/webiny/webiny-js/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/webiny/webiny-js/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/webiny/webiny-js
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/webiny/webiny-js/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@webiny/cli
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40webiny%2Fcli
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40webiny%2Fcli
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Webiny is a TypeScript framework and headless CMS that a team deploys into its own AWS account. The README describes it as running on Lambda, DynamoDB, S3 and CloudFront inside the team's account, so the API runs as Lambda functions and content is stored in DynamoDB. The project offers a GraphQL API, an admin panel, and a website builder with a Next.js SDK for rendering pages in a separate frontend.

Behavior is extended in code. The README lists extension types for the API, the admin UI, the AWS infrastructure and the CLI, and content models can be defined in the admin UI or in code.

## Worth knowing

The README says Webiny only runs on AWS. The docs call AWS the only production-ready deployment target. They also describe a Standalone target that runs as a single long-running Node process with SQL storage, and mark it as alpha and local only.

The Community edition is free under the MIT license. The README lists role based access control, multi-tenancy and publishing workflows under a commercial Business edition, and single sign-on, audit logs and team management under an Enterprise edition.
