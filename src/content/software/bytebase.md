---
id: bytebase
name: Bytebase
urls:
  home: https://www.bytebase.com
  repository: https://github.com/bytebase/bytebase
  docs: https://docs.bytebase.com
  pricing: https://www.bytebase.com/pricing/
category:
  - admin-panel
description: Database governance platform with a web console for schema change management, SQL review and database access control.
status: active
maintainer: Bytebase, LLC
maintainerType: company
firstRelease: 2021
language: go
databases:
  - postgres
  - mysql
  - sqlserver
  - oracle
  - mongodb
  - mariadb
adminUi: true
runsAs:
  - always-on
installMethod: docker image
licenseModel: open-core
license: MIT, Bytebase Enterprise License (LICENSE.enterprise)
currentMajor: "3"
latestReleaseDate: 2026-10-22
githubStargazers: 14652
contributors: 105
social:
  x: https://x.com/Bytebase
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://www.bytebase.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/bytebase/bytebase
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/bytebase/bytebase/blob/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.bytebase.com/legal/terms/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.bytebase.com/legal/terms/
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/bytebase/bytebase/blob/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/bytebase/bytebase
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/bytebase/bytebase/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/bytebase/bytebase/blob/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/bytebase/bytebase/main/LICENSE
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/bytebase/bytebase/main/LICENSE.enterprise
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/bytebase/bytebase/main/LICENSE.enterprise
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.bytebase.com/pricing/
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://github.com/bytebase/bytebase/blob/main/README.md
    checkedAt: 2026-10-28
  - field: databases
    url: https://github.com/bytebase/bytebase/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/bytebase/bytebase/blob/main/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/bytebase/bytebase/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/bytebase/bytebase/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/bytebase/bytebase/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/bytebase/bytebase
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/bytebase/bytebase/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Bytebase is a database governance platform with a web console for database change management, access control and audit across the database engines it lists. It is written in Go and runs as a server. It is installed from a Docker image or a Helm chart on Kubernetes, and the README's quick start opens the setup wizard on port 8080 of the host.

Built-in users, roles and permissions are part of every plan, and single sign-on with OIDC and LDAP is part of the Enterprise plan.

## Worth knowing

The source is under two licenses: files outside the directories the license file names are MIT, and those directories fall under the Enterprise license, which allows production use only with a subscription. The Community plan is free of charge, the Pro plan is cloud-only, and a self-hosted instance runs on Community or Enterprise.
