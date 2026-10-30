---
id: nginx-proxy-manager
name: Nginx Proxy Manager
urls:
  home: https://nginxproxymanager.com/
  repository: https://github.com/NginxProxyManager/nginx-proxy-manager
  docs: https://nginxproxymanager.com/guide/
category:
  - web-server
description: Web admin interface for managing Nginx reverse proxy hosts, distributed as a Docker image with free Let's Encrypt certificates.
status: active
maintainer: Jamie Curnow
maintainerType: individual
firstRelease: 2018
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - sqlite
  - mysql
  - mariadb
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker compose (image jc21/nginx-proxy-manager)
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-09-24
githubStargazers: 34587
contributors: 300
social:
  forum: https://github.com/NginxProxyManager/nginx-proxy-manager/discussions
  subreddit: https://reddit.com/r/nginxproxymanager
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://nginxproxymanager.com/
    checkedAt: 2026-10-30
  - field: urls
    url: https://nginxproxymanager.com/
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/NginxProxyManager/nginx-proxy-manager
    checkedAt: 2026-10-30
  - field: urls
    url: https://nginxproxymanager.com/guide/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/NginxProxyManager/nginx-proxy-manager/blob/v2.16.0/backend/package.json
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://github.com/NginxProxyManager/nginx-proxy-manager/blob/v2.16.0/backend/package.json
    checkedAt: 2026-10-30
  - field: category
    url: https://nginxproxymanager.com/guide/
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/NginxProxyManager/nginx-proxy-manager
    checkedAt: 2026-10-30
  - field: runtime
    url: https://nginxproxymanager.com/setup/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://nginxproxymanager.com/setup/
    checkedAt: 2026-10-30
  - field: databases
    url: https://nginxproxymanager.com/setup/
    checkedAt: 2026-10-30
  - field: databases
    url: https://nginxproxymanager.com/setup/
    checkedAt: 2026-10-30
  - field: databases
    url: https://nginxproxymanager.com/setup/
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://nginxproxymanager.com/guide/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/NginxProxyManager/nginx-proxy-manager/releases/tag/v2.16.0
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/NginxProxyManager/nginx-proxy-manager/releases/tag/v2.16.0
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/NginxProxyManager/nginx-proxy-manager/releases/tag/1.0.1
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/NginxProxyManager/nginx-proxy-manager
    checkedAt: 2026-10-30
  - field: license
    url: https://nginxproxymanager.com/
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://nginxproxymanager.com/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://nginxproxymanager.com/guide/
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/NginxProxyManager/nginx-proxy-manager
    checkedAt: 2026-10-30
  - field: contributors
    url: https://github.com/NginxProxyManager/nginx-proxy-manager/graphs/contributors
    checkedAt: 2026-10-30
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Nginx Proxy Manager is a web admin interface for Nginx reverse proxy hosts. The [setup guide](https://nginxproxymanager.com/setup/) runs it as a Docker image started with Docker Compose, and the running container serves the admin interface on its own port. The interface is based on Tabler, and users get permissions and an audit log. The application stores its data in SQLite or, when the environment variables name one, in MySQL, MariaDB or Postgres. It runs on Node.js.
