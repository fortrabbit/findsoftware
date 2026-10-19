# Self-hosted site services and website applications: research notes

306 candidates checked 2026-10-19: 174 accepted, 51 boundary, 29 hosted-service, 52 rejected (51 on criterion 4, 1 on 2). Sources: GitHub GraphQL (stars, archive flag, latest release, latest tag by commit date, README), GitLab, Framagit and Codeberg/Forgejo APIs, PyPI, npm, wordpress.org plugin API. Criterion 3 read from README install, Docker or docs sections; seven thin READMEs checked by hand. Site search left to the search area.

## Discovery sources swept

| Source | Names | Note |
|---|---|---|
| awesome-selfhosted, 9 sections | 243 lines, ~130 in area | Analytics, Newsletters, Forums and Social, Learning, Wikis, Polls and Events, Media, Misc |
| awesome-sysadmin, Monitoring & Status Pages | 41, 8 in area | Rest is infra monitoring (Nagios, Zabbix, Prometheus): out |
| selfh.st directory (`r2.selfh.st/directory/software.json`) | 1272 entries, 123 on 18 tags | Tags Web Analytics, Comments, Forums, Wiki, Surveys and Forms, Uptime, CAPTCHA, Newsletters |
| GitHub topics, 32 topics, stars ≥150 | ~560 repos, ~120 kept | Most hits are libraries, awesome lists, paper lists, framework packages |
| alternativeto.net | 0 | HTTP 403 to automated fetch |
| Gap-filling | ~45 | SaaS per category, proprietary forums, WordPress LMS plugins, Thumbor, picfit, IPX, webmention services |

## Already in other areas

Not repeated here: Matomo, Plausible, Umami, listmonk, Mautic, Ghost, Discourse, Flarum, Elgg, Decidim, Open Social, pretix, Moodle, ATutor (rejected), BookStack, DokuWiki, MediaWiki, XWiki, Foswiki, TWiki, MoinMoin, PmWiki, Tiki, AmuseWiki, ikiwiki, Gollum, xlog, WriteFreely, Markdown Ninja, Typemill, Docusaurus, MkDocs, Zensical, OpenACS, XOOPS, PHPFusion, Ilch, Composr.

## Recurring facts

| Fact kind | Where it recurs | README hits |
|---|---|---|
| `embedMethod`: script tag, iframe, web component, JS library, API only | analytics, comments, consent, forms, captcha, feedback, newsletter signup | consent 6 of 7 show `<script`; widget or embed in 5 of 9 newsletter tools |
| `cookieless` claim | analytics | 16 of 33 |
| `privacyClaims`: GDPR, CCPA, PECR, "no personal data" | analytics, consent, captcha | GDPR 13 of 33 analytics, 5 of 7 consent |
| `processModel`: client-side only, long-running server, CI job, edge worker | all | consent libs are client-only; Upptime runs on GitHub Actions; Sink, Uptimer, cf-workers on Cloudflare Workers |
| `databases`, plus analytics stores | all servers | Postgres 11, Redis 10, ClickHouse 7 of 33 analytics; SQLite common in comments and status pages |
| `docker` official image | all servers | 23 of 33 analytics, 9 of 11 media-processing |
| `imageLibrary`: libvips, ImageMagick, own | media-processing | libvips 6 of 11 |
| `outputFormats`: WebP, AVIF | media-processing | 5 of 11 |
| `urlSigning` for transform URLs | media-processing | imgproxy, Thumbor, imagor, go-camo |
| `notificationChannels`: email, Slack, Telegram, webhook | status-page, uptime-monitor, forms | 11 of 17 status pages |
| `importsFrom`: Disqus, Google Analytics, WordPress, Discourse | comments, analytics, forums | 6 of 9 comment engines import from Disqus or others |
| `emailDelivery`: own SMTP, SES, provider API | newsletter | 5 of 9 |
| `captchaMethod`: proof of work, image, behavioral | captcha | 3 of 4 proof of work |
| `standards`: LTI, SCORM, xAPI, ActivityPub, Webmention, IIIF | LMS, social, webmentions, image servers | ActivityPub in 4 of 5 social servers |
| `sso`: OIDC, SAML, LDAP | wikis, LMS, forms | 4 of 18 LMS |
| Cloud or paid edition of the same code | analytics, forms, status pages | 15 of 33 analytics name a cloud plan |
| `hostDependency`: data lives on GitHub, needs Nextcloud, runs in WordPress | giscus, utterances, Upptime, Nextcloud Forms, WP plugins | Records need a "runs inside / stores on" field |

## Surprises

- Criterion 4 again does the work: 51 rejects. Big names among them: Cachet (no release since 2023 while 3.x is built), imaginary (2020), Fathom Lite (2023), Commento (2020), utterances, Statping, Papercups, Mailtrain, OhMyForm, TellForm, Forem (no tags since 2021 on an active repo).
- Archived but recent: Medama and Astuto have 2025–2026 releases and archived repos. A `discontinued` status needs a rule that does not depend on the release date alone.
- Consent banners split in two: client-only JS libraries (CookieConsent, Klaro, tarteaucitron, c15t) and SaaS CMPs (Cookiebot, Usercentrics, iubenda). Klaro and Osano's library fail criterion 4; Orejime (Klaro fork) passes.
- Repos move off GitHub or change hands: Mobilizon to `framagit.org/kaihuri`, BookStack to Codeberg, Open edX renamed `openedx-platform`, Getform redirects to Forminit, Vanilla Forums removed its open source repo (now SaaS), go-jamming is gone.
- Registry dates disagree with the repo: Gancio's npm stops at 2023 while framagit has v1.28.2 (2025-12); Klaro npm matches its 2024 tag. Prefer the forge release, record the source.
- Plugins of other software carry real weight: bbPress and Tutor LMS 100k installs each on wordpress.org, BuddyPress 90k, Koko Analytics 60k. One scope call for "extension of another product" (WordPress, Joomla, Django, Nextcloud).
- Fediverse servers (11 rows) are the largest boundary group. Mastodon, PeerTube, Lemmy have 14k–50k stars. One scope call.
- Proprietary forums (XenForo, Invision, vBulletin) block automated fetch with HTTP 403, as does Totara's release page. Release dates need a manual read or a changelog feed.
- Thin threshold for criterion 5: HitKeep 97 stars and Event Schedule 90 stars pass, same as other areas.
- AI framing reaches site services too: 14 of 33 analytics READMEs mention AI or MCP.
