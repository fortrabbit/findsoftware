---
id: pmkin
name: PMKIN
urls:
  home: https://pmkin.io
  docs: https://pmkin.io/developers
  pricing: https://pmkin.io/pricing
category:
  - headless-cms
description: Hosted content planner and headless CMS where teams and AI agents plan, write and review content that a website reads over an API.
status: hosted-service
maintainer: PMKIN
adminUi: true
headlessApi:
  - graphql
  - rest
licenseModel: saas
social:
  x: https://x.com/pmkincms
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: name
    url: https://pmkin.io
    checkedAt: 2026-10-24
  - field: urls
    url: https://pmkin.io
    checkedAt: 2026-10-24
  - field: urls
    url: https://pmkin.io/developers
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://pmkin.io/about
    checkedAt: 2026-10-24
  - field: category
    url: https://pmkin.io/docs/what-is-pmkin
    checkedAt: 2026-10-24
  - field: adminUi
    url: https://pmkin.io/docs/what-is-pmkin
    checkedAt: 2026-10-24
  - field: headlessApi
    url: https://pmkin.io/developers/delivery-api/overview
    checkedAt: 2026-10-24
  - field: headlessApi
    url: https://pmkin.io/developers/management-api/overview
    checkedAt: 2026-10-24
  - field: urls
    url: https://pmkin.io/pricing
    checkedAt: 2026-10-24
figure:
  emoji: 🔌
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: Headless CMS
ai: authored
---

PMKIN is a hosted content planner and headless CMS. Teams plan content on a shared board and calendar, write briefs, and send drafts to a review queue before anything is published. A website reads only published documents, which it fetches from the GraphQL delivery API; drafts, briefs and reviews stay inside PMKIN. Documents are written in a web editor, and each keeps a draft and a published version. AI agents connect through the MCP server, where they can claim briefs, write drafts and send them to review, the same steps a teammate follows. The developer docs describe a REST management API for scripts and pipelines. PMKIN, the company, maintains the service.

## Worth knowing

A site that reads from PMKIN depends on the delivery API being reachable. Agents never see API keys, members or billing, and their changes show both the agent's name and the person it works for. Single sign-on is listed on the Enterprise plan only.
