---
id: amplify-ui
name: Amplify UI
urls:
  home: https://ui.docs.amplify.aws
  repository: https://github.com/aws-amplify/amplify-ui
  docs: https://ui.docs.amplify.aws/react/getting-started/installation
category:
  - ui-library
description: Open-source UI component library from AWS Amplify, with components that connect directly to the cloud.
status: active
maintainer: Amazon Web Services, Inc.
maintainerType: company
parent: Amazon Web Services, Inc.
firstRelease: 2021
language: javascript
basedOn:
  - react
installMethod: npm, yarn
licenseModel: open-source
license: Apache-2.0
currentMajor: "6"
latestReleaseDate: 2026-10-02
githubStargazers: 1144
npmWeeklyDownloads: 447861
contributors: 159
dependentRepos: 2646
dependentPackages: 77
social:
  discord: https://discord.com/invite/amplify
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://ui.docs.amplify.aws/
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/aws-amplify/amplify-ui
    checkedAt: 2026-10-26
  - field: urls
    url: https://ui.docs.amplify.aws/react/getting-started/installation
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/aws-amplify/amplify-ui/releases
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://ui.docs.amplify.aws/
    checkedAt: 2026-10-26
  - field: parent
    url: https://ui.docs.amplify.aws/
    checkedAt: 2026-10-26
  - field: language
    url: https://github.com/aws-amplify/amplify-ui
    checkedAt: 2026-10-26
  - field: category
    url: https://ui.docs.amplify.aws/react/getting-started/introduction
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://ui.docs.amplify.aws/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://ui.docs.amplify.aws/react/getting-started/installation
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/aws-amplify/amplify-ui
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/aws-amplify/amplify-ui
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://registry.npmjs.org/@aws-amplify/ui-react
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/aws-amplify/amplify-ui/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://github.com/aws-amplify/amplify-ui
    checkedAt: 2026-10-26
  - field: contributors
    url: https://github.com/aws-amplify/amplify-ui
    checkedAt: 2026-10-26
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@aws-amplify/ui-react
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@aws-amplify%2Fui-react
    checkedAt: 2026-10-26
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@aws-amplify%2Fui-react
    checkedAt: 2026-10-26
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
runsAs: null
---

Amplify UI is the open-source component library of AWS Amplify. It has primitive components, connected components such as the Authenticator that connect to the cloud, and themes built on CSS variables. The packages install from npm next to aws-amplify, and the application imports a stylesheet for the default theme. The project says its components follow WCAG and WAI-ARIA practice.

## Worth knowing

The introduction says primitive components are React-only for now, with other frameworks in planning, while the Authenticator is available for several frameworks. The default theme names the Inter font, which the library does not bundle, so the application must load it. The [installation guide](https://ui.docs.amplify.aws/react/getting-started/installation) covers both steps.
