---
id: casbin
name: Apache Casbin
urls:
  home: https://casbin.apache.org/
  repository: https://github.com/apache/casbin
  docs: https://casbin.apache.org/docs/overview
category:
  - auth
description: Go library for access control that enforces ACL, RBAC and ABAC models defined in a configuration file.
status: active
maintainer: The Apache Software Foundation
maintainerType: foundation
firstRelease: 2017
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - postgres
  - oracle
  - mongodb
installMethod: go get
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-08-20
githubStargazers: 20477
contributors: 156
dependentRepos: 2
dependentPackages: 3
social:
  x: https://twitter.com/casbinHQ
  discord: https://discord.gg/S5UjpzGZjN
  forum: https://groups.google.com/g/casbin
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://casbin.apache.org/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/apache/casbin
    checkedAt: 2026-11-04
  - field: urls
    url: https://casbin.apache.org/docs/overview
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://raw.githubusercontent.com/apache/casbin/master/NOTICE
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/apache/casbin
    checkedAt: 2026-11-04
  - field: category
    url: https://raw.githubusercontent.com/apache/casbin/master/README.md
    checkedAt: 2026-11-04
  - field: runtime
    url: https://raw.githubusercontent.com/apache/casbin/master/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://casbin.apache.org/docs/get-started
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/apache/casbin
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://raw.githubusercontent.com/apache/casbin/master/LICENSE
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/apache/casbin/releases
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/apache/casbin/releases
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/apache/casbin/releases
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/apache/casbin
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/apache/casbin/contributors?per_page=1
    checkedAt: 2026-11-04
  - field: databases
    url: https://casbin.apache.org/
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/proxy.golang.org/packages/github.com%2Fcasbin%2Fcasbin%2Fv3
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/proxy.golang.org/packages/github.com%2Fcasbin%2Fcasbin%2Fv3
    checkedAt: 2026-11-04
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Apache Casbin is an access control library for Go. An application loads an access model and a policy, then asks the library whether a request is allowed. The model and policy cover the ACL, RBAC and ABAC models, and the library is installed as a Go module.

The homepage names MySQL, Postgres, Oracle and MongoDB among the storage backends. Ports in other languages, such as node-casbin and PyCasbin, are separate projects under the same name. The project is an incubating project of the Apache Software Foundation.
