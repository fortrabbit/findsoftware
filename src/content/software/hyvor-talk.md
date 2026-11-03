---
id: hyvor-talk
name: Hyvor Talk
urls:
  home: https://hyvor.com/talk
  docs: https://hyvor.com/talk/docs
  pricing: https://hyvor.com/talk/pricing
category:
  - community
description: Hosted comment, reaction and rating service that websites embed with a script, with moderation tools.
status: hosted-service
maintainer: HYVOR
hqCountry: FR
headlessApi:
  - rest
i18n: embeds in more than 30 languages
licenseModel: saas
social:
  x: https://x.com/HyvorHQ
  bluesky: https://bsky.app/profile/hyvor.com
  discord: https://discord.com/invite/2WRJxQB
  youtube: https://www.youtube.com/@HYVOR
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://hyvor.com/talk
    checkedAt: 2026-11-03
  - field: urls
    url: https://hyvor.com/talk/docs
    checkedAt: 2026-11-03
  - field: urls
    url: https://hyvor.com/talk/pricing
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://hyvor.com/terms
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://hyvor.com/terms
    checkedAt: 2026-11-03
  - field: category
    url: https://hyvor.com/talk
    checkedAt: 2026-11-03
  - field: i18n
    url: https://hyvor.com/talk
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://hyvor.com/talk/docs/api-console
    checkedAt: 2026-11-03
ai: authored
---

Hyvor Talk is a hosted comment service. A website adds a script snippet, and visitors can comment, react and rate. Moderation tools, badges and email notifications are run from the vendor's console, and comments can be imported from Disqus and WordPress.

Nothing is installed on the site's own server. The company's GitHub organization holds client libraries, a WordPress plugin and SSO examples for the service, and none of them is the service itself. A data API returns public comments and pages as JSON over HTTP GET, a console API covers the console's actions, and webhooks notify a receiving endpoint of events such as new comments.

## Worth knowing

The service starts with a 14-day trial and continues on paid plans. The product also offers team single sign-on with OpenID Connect on the higher plans, and a site can let its own accounts comment through a separate stateless SSO flow.
