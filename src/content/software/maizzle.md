---
id: maizzle
name: Maizzle
urls:
  home: https://maizzle.com
  repository: https://github.com/maizzle/framework
  docs: https://maizzle.com/docs/introduction
category:
  - email
description: Framework for building HTML emails with Vue components and Tailwind CSS.
status: active
maintainer: Maizzle OÜ
maintainerType: company
firstRelease: 2019
hqCountry: EE
language: javascript
basedOn:
  - vue
  - tailwindcss
templating: vue
i18n: yes, through the vue-i18n library
runsAs:
  - local
installMethod: npx maizzle new
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-11-03
githubStargazers: 1622
npmWeeklyDownloads: 71992
contributors: 19
dependentRepos: 76
dependentPackages: 12
social:
  x: https://x.com/cossssmin
  discord: https://discord.gg/maizzle
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://maizzle.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://maizzle.com/docs/introduction
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/maizzle/framework
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://maizzle.com/privacy
    checkedAt: 2026-11-16
  - field: hqCountry
    url: https://maizzle.com/privacy
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/maizzle/framework/blob/master/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/maizzle/framework/blob/master/README.md
    checkedAt: 2026-11-16
  - field: templating
    url: https://maizzle.com/docs/introduction
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/maizzle/framework
    checkedAt: 2026-11-16
  - field: i18n
    url: https://maizzle.com/docs/development/i18n
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://maizzle.com/docs/development/local
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://maizzle.com/docs/installation
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://maizzle.com/docs/vite-plugin
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/maizzle/framework/blob/master/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/maizzle/framework/blob/master/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/maizzle/framework/releases/tag/v6.3.2
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/maizzle/framework/releases/tag/v6.3.2
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/@maizzle%2fframework
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/maizzle/framework
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/maizzle/framework/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@maizzle/framework
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@maizzle%2Fframework
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@maizzle%2Fframework
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
renderingModes: null
packagistDownloads: null
---

Maizzle is a framework for building HTML emails with Vue and Tailwind CSS. Each email is a Vue single-file component that uses the built-in components, such as Container, Button and Heading, or plain HTML. The build renders the components to HTML, runs transformers that inline the CSS and produce email-safe output, and writes HTML files to an output directory. The deployment pages name Nodemailer, SendGrid, Mailgun, Postmark, Resend, AWS SES and Cloudflare as ways to send them.

A dev server with live preview runs on the developer's machine. It shows each email at several device sizes, runs compatibility checks and can send a test email. The documentation has migration guides from [React Email](https://maizzle.com/docs/migrate/react-email) and [MJML](https://maizzle.com/docs/migrate/mjml), and a page on internationalization through vue-i18n.

## Worth knowing

Mailviews, a paid subscription of components and templates from the same makers, is a separate product.
