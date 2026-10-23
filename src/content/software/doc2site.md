---
id: doc2site
name: doc2.site
urls:
  home: https://doc2.site
  docs: https://doc2.site/documentation
  pricing: https://doc2.site/pricing
category:
  - headless-cms
description: Hosted service that publishes Google Docs and Sheets content as HTML and JSON through a headless API and a browser extension.
status: hosted-service
maintainer: DOC2.SITE LTD
adminUi: true
licenseModel: saas
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://doc2.site/
    checkedAt: 2026-10-23
  - field: urls
    url: https://doc2.site/documentation/getting-started
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://doc2.site/legal/terms-and-conditions
    checkedAt: 2026-10-23
  - field: category
    url: https://doc2.site/documentation/developers
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://doc2.site/documentation/getting-started
    checkedAt: 2026-10-23
  - field: urls
    url: https://doc2.site/pricing
    checkedAt: 2026-10-23
figure:
  emoji: 🔌
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: Headless CMS
ai: authored
---

doc2.site publishes content written in Google Docs and Google Sheets. A project is a Google Drive folder shared with the service's bot account, and the documents and sheets in it are the source. The API serves the published result as JSON, and the service describes HTML output alongside it. A browser extension works with Google Docs and Sheets, and the doc2.live and doc2.email services serve published content on subdomains.

The developer documentation covers a Headless API with an API reference, and the GitHub organization doc2-site-bot holds starter sites for Astro, Next.js and Nuxt.

## Worth knowing

Content is stored in Google Drive and authoring runs through it, so the project folder and the bot's access to it are part of the setup. The Developer Plan has the Private and Preview workspaces, and the Business Plan adds the Live workspace. The pricing page describes the Developer Plan as for personal non-commercial projects.
