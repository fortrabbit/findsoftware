---
id: supertokens
name: SuperTokens
urls:
  home: https://supertokens.com
  repository: https://github.com/supertokens/supertokens-core
  docs: https://supertokens.com/docs/guides
  pricing: https://supertokens.com/pricing
category:
  - auth
description: Open source user authentication server, Core, with frontend and backend SDKs, self-hosted or as a managed cloud service.
status: active
maintainer: SuperTokens, Inc
maintainerType: company
firstRelease: 2020
language: java
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: Apache-2.0, SuperTokens Enterprise license for the ee/ directory
currentMajor: "12"
latestReleaseDate: 2026-10-23
githubStargazers: 15340
contributors: 38
social:
  x: https://twitter.com/supertokensio
  discord: https://discord.gg/ywaJefBEaE
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://supertokens.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/supertokens/supertokens-core
    checkedAt: 2026-11-03
  - field: urls
    url: https://supertokens.com/docs/guides
    checkedAt: 2026-11-03
  - field: urls
    url: https://supertokens.com/pricing
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://supertokens.com/legal/terms-and-conditions
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/supertokens/supertokens-core/tree/v0.0.1
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/supertokens/supertokens-core
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/supertokens/supertokens-core/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/supertokens/supertokens-core/blob/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/supertokens/supertokens-core/blob/master/ee/LICENSE.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/supertokens/supertokens-core/releases/tag/v12.4.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/supertokens/supertokens-core/releases/tag/v12.4.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/supertokens/supertokens-core
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/supertokens/supertokens-core
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://supertokens.com/docs/deployment/self-host-supertokens
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://supertokens.com/docs/deployment/self-host-supertokens
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://supertokens.com/docs/deployment/self-host-supertokens
    checkedAt: 2026-11-03
  - field: databases
    url: https://supertokens.com/docs/deployment/self-host-supertokens
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://supertokens.com/docs/post-authentication/dashboard/introduction
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

SuperTokens Core is an open source user authentication server written in Java. It runs as a service that an app's backend SDK connects to. The Docker image and the downloaded archive both ship with the JDK, so no separate Java install is needed, and the supertokens start command starts the service on top of PostgreSQL.

The project's README describes it as an open-core alternative to proprietary login providers such as Auth0 and AWS Cognito. The [self-hosting guide](https://supertokens.com/docs/deployment/self-host-supertokens) describes the Docker and archive routes. A managed cloud service billed per monthly active user runs next to the self-hosted core.

## Worth knowing

The code in the ee/ directory is under the SuperTokens Enterprise license, which allows production use only with a valid license. The rest of the code is Apache 2.0. Multi-factor authentication, account linking and multi-tenancy are paid features on the pricing page for self-hosted use. The core no longer supports MySQL or MongoDB.
