---
id: read-the-docs
name: Read the Docs
urls:
  home: https://about.readthedocs.com/
  repository: https://github.com/readthedocs/readthedocs.org
  docs: https://docs.readthedocs.com/platform/stable/
  pricing: https://about.readthedocs.com/pricing/
description: Hosted platform that builds, versions and publishes documentation from Git repositories, including Sphinx and MkDocs projects.
status: hosted-service
maintainer: Read the Docs, Inc.
maintainerType: company
firstRelease: 2010
language: python
runtime:
  - python
headlessApi:
  - rest
i18n: multiple languages per project
installMethod: git clone and Docker Compose, through invoke commands (development setup)
licenseModel: saas
license: MIT
latestReleaseDate: 2026-10-21
githubStargazers: 8398
contributors: 414
social:
  x: https://twitter.com/readthedocs
  mastodon: https://fosstodon.org/@readthedocs
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://about.readthedocs.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/readthedocs/readthedocs.org
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.readthedocs.com/platform/stable/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://about.readthedocs.com/terms-of-service/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/readthedocs/readthedocs.org
    checkedAt: 2026-10-23
  - field: runtime
    url: https://api.github.com/repos/readthedocs/readthedocs.org
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/readthedocs/readthedocs.org
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://about.readthedocs.com/company/
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/readthedocs/readthedocs.org/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/readthedocs/readthedocs.org
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/readthedocs/readthedocs.org/contributors
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/readthedocs/readthedocs.org/blob/main/docs/dev/install.rst
    checkedAt: 2026-10-23
  - field: urls
    url: https://about.readthedocs.com/pricing/
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://docs.readthedocs.com/platform/stable/api/v3.html
    checkedAt: 2026-10-23
  - field: i18n
    url: https://docs.readthedocs.com/platform/stable/localization.html
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Read the Docs is a hosted platform that builds documentation from a Git repository and publishes it. Its source code is public under the MIT license, but the install guide in that repository describes a Docker Compose development setup and says it is not meant for deploying a production instance. The REST API is documented at [the platform docs](https://docs.readthedocs.com/platform/stable/), and a project can publish its documentation in more than one language.

## Worth knowing

The free Community site is for open-source projects, and the paid plans are listed on the [pricing page](https://about.readthedocs.com/pricing/). Single sign-on comes with GitHub and GitLab on the Basic and Advanced plans, with Google on Pro, and with SAML on Enterprise plans. The privacy policy says data is stored and processed in the United States.
