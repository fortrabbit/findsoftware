---
id: troglio
name: Troglio
urls:
  home: https://troglio.com
  repository: https://github.com/Troglio/troglio
  docs: https://troglio.com/guide
category:
  - cms
description: Trello Power-Up that turns the cards of a Trello board into content for a website or app, published as JSON to git or a server.
status: hosted-service
maintainer: Troglio
adminUi: false
licenseModel: saas
githubStargazers: 10
contributors: 1
social:
  x: https://twitter.com/try_troglio
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://troglio.com/
    checkedAt: 2026-10-24
  - field: urls
    url: https://troglio.com/guide
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/Troglio/troglio
    checkedAt: 2026-10-24
  - field: category
    url: https://github.com/Troglio/troglio/blob/master/README.md
    checkedAt: 2026-10-24
  - field: adminUi
    url: https://troglio.com/
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://troglio.com/terms
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/Troglio/troglio
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/Troglio/troglio/contributors
    checkedAt: 2026-10-24
figure:
  emoji: 📝
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: CMS
ai: authored
---

Troglio is a Trello Power-Up that turns the cards of a Trello board into content for a website or app. Writers put Markdown or HTML into a card, add structured properties in a TOML-like syntax, and publish the card. Publishing pushes the data to a git repository, which can trigger a build, or to a custom server that stores it and serves it as a JSON API.

Previews open the site in an iframe, so the site's front end must take the new data as it arrives. The README links a starter blog built with Preact and React Static, and a small Express server that stores the data in Nedb.

## Worth knowing

Troglio runs as a service, and it is installed by adding it as a custom Power-Up in the Trello admin interface. The terms describe its use without cost as a trial for a limited time, and the plans page says plans are coming soon. The Power-Up's source code is not in the public repository.
