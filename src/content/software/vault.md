---
id: vault
name: HashiCorp Vault
urls:
  home: https://developer.hashicorp.com/vault
  repository: https://github.com/hashicorp/vault
  docs: https://developer.hashicorp.com/vault/docs
  plugins: https://developer.hashicorp.com/vault/integrations
category:
  - auth
description: Server for storing, accessing and encrypting secrets, with an HTTP API, a CLI and a web interface, that applications can call for credentials and keys.
status: active
maintainer: IBM Corp.
maintainerType: company
firstRelease: 2015
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
adminUi: true
runsAs:
  - always-on
installMethod: package-manager
licenseModel: source-available
license: BUSL-1.1
currentMajor: "2"
latestReleaseDate: 2026-10-22
githubStargazers: 36462
contributors: 386
social:
  forum: https://discuss.hashicorp.com/c/vault
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://developer.hashicorp.com/vault
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/hashicorp/vault
    checkedAt: 2026-11-03
  - field: urls
    url: https://developer.hashicorp.com/vault/docs
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/hashicorp/vault/main/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/hashicorp/vault
    checkedAt: 2026-11-03
  - field: runtime
    url: https://developer.hashicorp.com/vault/docs/get-vault
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://developer.hashicorp.com/vault/docs/get-vault
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://developer.hashicorp.com/vault/docs/get-vault
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://developer.hashicorp.com/vault/docs/get-vault
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://developer.hashicorp.com/vault/docs/get-vault
    checkedAt: 2026-11-03
  - field: category
    url: https://developer.hashicorp.com/vault
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/hashicorp/vault/main/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://raw.githubusercontent.com/hashicorp/vault/main/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/hashicorp/vault/git/ref/tags/v0.1.0
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/hashicorp/vault/releases/tag/v2.2.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/hashicorp/vault/releases/tag/v2.2.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/hashicorp/vault
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/hashicorp/vault/contributors
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://developer.hashicorp.com/vault/docs/commands/server
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://developer.hashicorp.com/vault/docs/configuration/ui
    checkedAt: 2026-11-03
  - field: databases
    url: https://developer.hashicorp.com/vault/docs/configuration/storage/postgresql
    checkedAt: 2026-11-03
  - field: databases
    url: https://developer.hashicorp.com/vault/docs/configuration/storage/mysql
    checkedAt: 2026-11-03
  - field: urls
    url: https://developer.hashicorp.com/vault/docs/about-vault/what-is-vault
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

HashiCorp Vault is a server that stores secrets and encrypts data, controls access to them through authentication methods and policies, and audits all activity. People and applications reach it through an HTTP API, a CLI or a web interface, and the project's documentation shows applications calling the API from their own code. Clients can authenticate with OIDC, LDAP or SAML, among other methods.

The server is a Go binary that runs as a process answering API requests. It encrypts data at rest and persists it in integrated Raft storage, which the documentation recommends, or in other storage backends, including PostgreSQL and MySQL.

## Worth knowing

Current releases are under the Business Source License 1.1, which allows production use but bars offering Vault to third parties in competition with the vendor's paid versions. Earlier releases were under MPL-2.0. SAML authentication needs a Vault Enterprise license applied to the cluster.

HCP Vault Dedicated is a managed offering that runs Vault in the cloud using the same binary as self-managed Vault Enterprise.
