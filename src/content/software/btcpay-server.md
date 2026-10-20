---
id: btcpay-server
name: BTCPay Server
urls:
  home: https://btcpayserver.org
  repository: https://github.com/btcpayserver/btcpayserver
  docs: https://docs.btcpayserver.org
category:
  - e-commerce
description: Self-hosted, open-source cryptocurrency payment processor that sends payments directly to the merchant's own wallet.
status: active
maintainer: btcpayserver
language: csharp
databases:
  - postgres
runsAs:
  - always-on
installMethod: docker, manual
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-06
githubStargazers: 7805
contributors: 242
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://btcpayserver.org
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/btcpayserver/btcpayserver
    checkedAt: 2026-10-19
  - field: urls
    url: https://docs.btcpayserver.org
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/btcpayserver/btcpayserver
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://docs.btcpayserver.org/Deployment/
    checkedAt: 2026-10-19
  - field: category
    url: https://btcpayserver.org
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/btcpayserver/btcpayserver
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://docs.btcpayserver.org/Deployment/
    checkedAt: 2026-10-19
  - field: databases
    url: https://docs.btcpayserver.org/Docker/architecture/
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://docs.btcpayserver.org/Docker/installation/
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://github.com/btcpayserver/btcpayserver
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://github.com/btcpayserver/btcpayserver/releases
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://github.com/btcpayserver/btcpayserver/releases
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://github.com/btcpayserver/btcpayserver
    checkedAt: 2026-10-19
  - field: contributors
    url: https://github.com/btcpayserver/btcpayserver
    checkedAt: 2026-10-19
figure:
  emoji: 🛒
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: C# · Shop
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

BTCPay Server is a self-hosted cryptocurrency payment processor that pays into the merchant's own wallet. The official Docker deployment generates a Compose stack on a dedicated Linux host: BTCPay Server, PostgreSQL for BTCPay Server and plugin data, NBXplorer, Bitcoin Core and Nginx. The deployment page states that BTCPay can also run on a third-party host.

## Worth knowing

The deployment page says manual deployments and hardware builds are not recommended for production environments.
