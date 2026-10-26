---
id: wagtail-crx
name: Wagtail CRX
urls:
  home: https://www.coderedcorp.com/cms
  repository: https://github.com/coderedcorp/coderedcms
  docs: https://docs.coderedcorp.com/wagtail-crx/
category:
  - cms
description: Extension package for the Wagtail CMS with pre-built page types, content blocks and SEO tagging for marketing websites.
status: active
maintainer: CodeRed LLC
maintainerType: company
firstRelease: 2018
hqCountry: US
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
basedOn:
  - wagtail
contentStore:
  - database
adminUi: true
templating: django-templates
i18n: yes
runsAs:
  - local
  - always-on
installMethod: pip install coderedcms, then coderedcms start
licenseModel: open-source
license: Redistribution and use in source and binary forms, with or without modification, are permitted (CodeRed LLC and individual contributors), icon files licensed under the Creative Commons Attribution 3.0 Unported license
currentMajor: "6"
latestReleaseDate: 2025-09-12
githubStargazers: 761
contributors: 33
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.coderedcorp.com/cms
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/coderedcorp/coderedcms
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/coderedcorp/coderedcms/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/coderedcorp/coderedcms/blob/main/LICENSE.txt
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://www.coderedcorp.com/firm/contact/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/coderedcorp/coderedcms/releases
    checkedAt: 2026-10-26
  - field: category
    url: https://api.github.com/repos/coderedcorp/coderedcms
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://github.com/coderedcorp/coderedcms/blob/main/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/coderedcorp/coderedcms
    checkedAt: 2026-10-26
  - field: runtime
    url: https://pypi.org/pypi/coderedcms/json
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://pypi.org/pypi/coderedcms/json
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/coderedcorp/coderedcms/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.coderedcorp.com/wagtail-crx/getting_started/install.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.coderedcorp.com/wagtail-crx/how_to/docker.html
    checkedAt: 2026-10-26
  - field: templating
    url: https://docs.coderedcorp.com/wagtail-crx/advanced/advanced01.html
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/coderedcorp/coderedcms/blob/main/README.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://docs.coderedcorp.com/wagtail-crx/how_to/translation.html
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://docs.coderedcorp.com/wagtail-crx/advanced/advanced02.html
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/coderedcorp/coderedcms/blob/main/LICENSE.txt
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/coderedcorp/coderedcms/blob/main/LICENSE.txt
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://www.coderedcorp.com/cms
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/coderedcorp/coderedcms/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/coderedcorp/coderedcms/releases/latest
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/coderedcorp/coderedcms
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/coderedcorp/coderedcms/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Wagtail CRX is an extension package for Wagtail, the Django-based CMS, with pre-built page types, content blocks, navigation and footer settings, and SEO tagging for marketing websites. The project was formerly known as CodeRed CMS. It installs from PyPI with pip, and a project generator creates a site around it. Administration uses Wagtail's admin interface under /admin/, templates use the standard Django template engine, and page content is stored in the site's database.

## Worth knowing

The installation guide describes a local development server, and the Docker how-to installs a WSGI server into the container image for running the site. The [hosting page](https://docs.coderedcorp.com/wagtail-crx/hosting/index.html) says the site can be deployed like any other Wagtail or Django website, and also points to CodeRed Cloud, a hosting service the project's maintainer offers with free and professional plans.
