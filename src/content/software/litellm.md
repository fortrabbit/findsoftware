---
id: litellm
name: LiteLLM
urls:
  home: https://www.litellm.ai
  repository: https://github.com/BerriAI/litellm
  docs: https://docs.litellm.ai/docs/
  pricing: https://www.litellm.ai/pricing
category:
  - backend
description: Open source AI gateway and LLM proxy that puts many model providers behind one OpenAI-compatible API.
status: active
maintainer: Berri AI
maintainerType: company
firstRelease: 2023
hqCountry: US
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: Docker Compose quickstart with a Postgres container (docker-compose.quickstart.yml)
licenseModel: open-core
license: MIT, BerriAI Enterprise license, for the enterprise/ directory
currentMajor: "1"
latestReleaseDate: 2026-10-28
githubStargazers: 62612
contributors: 370
dependentRepos: 1
dependentPackages: 116
social:
  x: https://x.com/litellm
  discord: https://discord.com/invite/wuPM9dRgDw
  youtube: https://www.youtube.com/@LiteLLMAIGateway
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.litellm.ai/
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.litellm.ai/pricing
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/BerriAI/litellm
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.litellm.ai/docs/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/BerriAI/litellm/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://www.litellm.ai/about
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.litellm.ai/about
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://www.litellm.ai/about
    checkedAt: 2026-11-03
  - field: category
    url: https://www.litellm.ai/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/BerriAI/litellm
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/BerriAI/litellm/blob/v1.106.6/pyproject.toml
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/BerriAI/litellm/blob/v1.106.6/pyproject.toml
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.litellm.ai/docs/proxy/docker_quick_start
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.litellm.ai/docs/proxy/docker_quick_start
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.litellm.ai/docs/proxy/docker_quick_start
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.litellm.ai/docs/proxy/quick_start
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.litellm.ai/docs/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.litellm.ai/docs/proxy/deploy
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.litellm.ai/docs/proxy/deploy
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.litellm.ai/docs/proxy/docker_quick_start
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.litellm.ai/docs/proxy/docker_quick_start
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/BerriAI/litellm/blob/v1.106.6/pyproject.toml
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/BerriAI/litellm/blob/main/enterprise/LICENSE.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://www.litellm.ai/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/BerriAI/litellm/releases/tag/v1.106.6
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/BerriAI/litellm/releases/tag/v1.106.6
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/BerriAI/litellm
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/BerriAI/litellm/contributors
    checkedAt: 2026-11-03
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/litellm
    checkedAt: 2026-11-03
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/litellm
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

LiteLLM is an AI gateway and LLM proxy written in Python. It puts many model providers behind one OpenAI-compatible API, and its homepage lists spend tracking, auth and guardrails among what the gateway adds. Self-hosting starts with a Docker Compose file that brings up the gateway and a Postgres container, and the [Docker quickstart](https://docs.litellm.ai/docs/proxy/docker_quick_start) also starts the single image with docker run. The gateway has a built-in Admin UI. The same project ships a Python SDK, installed with uv, for applications that call model providers directly, and the [production deployment guide](https://docs.litellm.ai/docs/proxy/deploy) covers a Helm chart on EKS, GKE and AKS.

Container images are published to GitHub Container Registry.

## Worth knowing

The core is MIT-licensed. The enterprise/ directory of the repository carries its own license, and the company sells an Enterprise tier that adds SSO, RBAC, audit logs and SCIM on top of the same open-source core. A Rust AI gateway is in beta beside the Python proxy.
