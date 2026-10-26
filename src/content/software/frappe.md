---
id: frappe
name: Frappe Framework
urls:
  home: https://frappe.io/framework
  repository: https://github.com/frappe/frappe
  docs: https://docs.frappe.io/framework
  plugins: https://frappecloud.com/marketplace
category:
  - framework
  - admin-panel
description: Python and JavaScript low-code web framework for building data-driven web applications, with a built-in admin interface, roles and permissions.
status: active
maintainer: Frappe Technologies Pvt. Ltd.
maintainerType: company
firstRelease: 2013
hqCountry: IN
language: python
runtime:
  - python
  - node
hosting:
  - python
  - node
runtimeMin: python 3.14
databases:
  - mariadb
  - postgres
adminUi: true
headlessApi:
  - rest
templating: jinja2
i18n: yes
runsAs:
  - always-on
installMethod: uv tool install frappe-bench, then bench init
licenseModel: open-source
license: MIT
currentMajor: "16"
latestReleaseDate: 2026-10-22
githubStargazers: 10999
contributors: 293
social:
  x: https://twitter.com/frappetech
  forum: https://discuss.frappe.io/
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://frappe.io/framework
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/frappe/frappe
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/frappe/frappe/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/frappe/frappe/blob/develop/LICENSE
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://docs.frappe.io/legal/policies/privacy-policy
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/frappe/frappe
    checkedAt: 2026-10-26
  - field: runtime
    url: https://docs.frappe.io/framework/user/en/installation
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/frappe/frappe/blob/v16.53.0/pyproject.toml
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.frappe.io/framework/user/en/installation
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/frappe/frappe/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.frappe.io/framework/user/en/bench/guides/setup-production
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/frappe/frappe/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://docs.frappe.io/framework/user/en/api/jinja
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://github.com/frappe/frappe/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/frappe/frappe/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/frappe/frappe/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://docs.frappe.io/framework/user/en/installation
    checkedAt: 2026-10-26
  - field: i18n
    url: https://docs.frappe.io/framework/user/en/guides/basics/translations
    checkedAt: 2026-10-26
  - field: urls
    url: https://frappe.io/framework
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/frappe/frappe
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/frappe/frappe/blob/develop/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/frappe/frappe/blob/develop/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/frappe/frappe/releases?per_page=100
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/frappe/frappe/releases?per_page=100
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/frappe/frappe/releases/tags/v16.53.0
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/frappe/frappe
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/frappe/frappe/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Frappe Framework is a full-stack web framework for Python and JavaScript. It includes an admin interface, roles and permissions, an automatically generated REST API for its models, and Jinja templates. The install docs add the bench command-line tool with uv. The README names ERPNext, a finished application, as the first application built on the framework.

## Worth knowing

A production setup runs the framework's processes under Supervisor, which restarts them when they stop, with nginx in front. Frappe Cloud is a hosted service from the same company, offered next to the self-hosted framework.
