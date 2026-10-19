# Visitor questions

Swept 2026-10-18. What people ask and filter by when picking website software.

## Sources swept

| Source | Method | Volume |
|---|---|---|
| Hacker News | Algolia API, 52 queries, threads since 2018 with 9+ comments | 81 threads |
| Reddit, 20 subreddits | search RSS (3 queries per sub, 12 for r/webdev and r/PHP), comments via Arctic Shift | 4,815 posts swept, 1,122 decision threads kept |
| Kirby forum | Discourse search API, 15 queries | 121 threads |
| Craft | StackExchange API, GitHub Discussions | 125 threads |
| Statamic, Grav | GitHub Discussions, getgrav.org/forum search | 19 threads |
| HN titles "X vs Y" | Algolia title search per product name, 2019 onward | 1,809 stories |

Subreddits: webdev, PHP, laravel, Nuxt, astrojs, javascript, statamic, craftcms, selfhosted, Jamstack, Wordpress, ProWordPress, nextjs, django, rails, drupal, web_design, sveltejs, Frontend, gravcms. Reddit rate-limits RSS to about one request a minute, which capped queries per subreddit.

## Competitor facets

| Site | Filters | Sort | Fields per entry |
|---|---|---|---|
| selfh.st/apps (1,272 apps) | category (software, companion), SSO (built in, plugin, enterprise only), open source only, tags, alternatives (proprietary product replaced), license, language, stars band | default, popular, trending, new | name, website, repo, description, license, language, SSO, tags, created, alternatives, stars, forks, last commit, trending |
| jamstack.org/generators | language (47), template engine (150+), license | stars, name | name, stars, forks, issues, description, language, templates, license |
| jamstack.org/headless-cms | CMS type (API, Git, Git + API, local, visual), open or closed source | stars, name | name, stars, forks, issues, description, type, supported generators |
| bestofjs.org (1,536 projects) | tags | total stars | name, repo, homepage, stars, description, tags, last push, contributors, created |
| cms-comparison.io (26 headless CMSs) | none, side-by-side compare | none | version, license, inception, system requirements, databases; 70+ yes/no rows, among them open source, cloud, on premises, EU cloud, commercial support, GraphQL, REST, Docker, SDKs, webhooks, roles, i18n, versioning, workflows, GDPR |
| Cloudflare Pages framework guides (30) | none | A to Z | name only |
| Wikipedia, server-side web frameworks | tables per language | none | version, release date, license; features: MVC, ORM, i18n, testing, migrations, templating, caching, form validation |
| Wikipedia, list of CMSs | tables per deployment: open source, SaaS, proprietary, frameworks | none | platform, databases, latest release and date, license, first release, discontinued marker |

## Decision criteria

Keyword match over 1,468 threads and 31,606 posts. Share: threads where a post names the criterion. Broad keywords inflate the top rows, so read the order, not the percent.

| Criterion | Share | HN / Reddit / forums | Example threads |
|---|---|---|---|
| Learning curve, simplicity, bloat | 62% | 93 / 70 / 19 | [HN simplest SSG](https://news.ycombinator.com/item?id=39861593) |
| Community, support, docs | 62% | 88 / 66 / 35 | [best CMS to build a…](https://www.reddit.com/r/Wordpress/comments/1bn6cf6/what_is_the_best_cms_or_plugin_to_build_a/) |
| Plugins, themes, ecosystem | 58% | 74 / 62 / 37 | [Kirby plugin marketplace](https://forum.getkirby.com/t/plugin-licensing-marketplace/14996) |
| Maintenance, updates, security | 57% | 81 / 61 / 31 | [6 reasons to choose Kirby](https://forum.getkirby.com/t/i-need-to-give-client-6-reasons-to-choose-kirby/26060) |
| Editor UX for clients and non-technical staff | 56% | 65 / 58 / 44 | [CMS and hosting for client sites](https://www.reddit.com/r/nextjs/comments/1t9cmcb/what_cms_and_hosting_setup_do_you_use_for_client/) |
| Headless, API, GraphQL | 51% | 60 / 57 / 27 | [HN headless CMS](https://news.ycombinator.com/item?id=16636517) |
| Install and setup effort, Docker | 49% | 73 / 52 / 32 | [flat-file CMS in Docker](https://news.ycombinator.com/item?id=18977136) |
| Price, free, license cost | 48% | 88 / 52 / 19 | [free alternative to WordPress](https://www.reddit.com/r/webdev/comments/wz1ikm/some_completely_free_alternative_to/) |
| Migration, import, portability | 47% | 74 / 51 / 25 | [CMS that imports WordPress](https://news.ycombinator.com/item?id=34442280) |
| Language and stack the team knows | 46% | 79 / 50 / 22 | [Rails for new projects](https://news.ycombinator.com/item?id=45469407) |
| Frontend framework fit | 46% | 72 / 52 / 11 | [frontend framework to choose](https://news.ycombinator.com/item?id=27268922) |
| Hosting needs, where it runs | 42% | 88 / 47 / 8 | [easiest to deploy framework](https://news.ycombinator.com/item?id=33600715) |
| Storage: database, flat file, Markdown | 41% | 79 / 45 / 11 | [flat-file git-based CMS](https://www.reddit.com/r/webdev/comments/1k2xsxg/any_flat_file_giy_based_cms_recommendations/) |
| Performance, speed | 41% | 65 / 47 / 9 | [Kirby compared to WordPress](https://forum.getkirby.com/t/kirby-compared-to-wordpress/15492) |
| Git workflow, version control | 39% | 81 / 40 / 20 | [deploy WordPress with git](https://www.reddit.com/r/webdev/comments/7qg4op/what_are_some_alternative_methods_for_deploying/) |
| Forms, comments, search | 31% | 59 / 33 / 18 | [self-host comments on static blog](https://news.ycombinator.com/item?id=23095273) |
| Open source, license type | 30% | 56 / 29 / 29 | [charging for sites built on Kirby](https://forum.getkirby.com/t/license-question-regarding-charging-for-websites-build-on-top-of-kirby/24498) |
| Users, roles, permissions | 27% | 30 / 31 / 10 | [Craft 5 auth](https://github.com/craftcms/cms/discussions/14129) |
| Images and media | 27% | 41 / 28 / 17 | [images for static sites](https://news.ycombinator.com/item?id=41022525) |
| Self-hosted vs SaaS, lock-in | 26% | 64 / 29 / 4 | [is self-hosting a headless CMS worth it](https://www.reddit.com/r/webdev/comments/1t1fglb/is_selfhosting_the_headless_cms_worth_in_the/) |
| Content modeling, custom fields | 23% | 27 / 25 / 15 | [CMS with custom content types](https://www.reddit.com/r/web_design/comments/13qolam/looking_for_a_cms_with_easy_custom_content_types/) |
| Build time, scale | 22% | 40 / 26 / 2 | [Hotwire, LiveView or Django](https://news.ycombinator.com/item?id=31414200) |
| Build your own vs off the shelf | 18% | 30 / 21 / 3 | [headless CMS or recode](https://www.reddit.com/r/webdev/comments/1egy88o/should_i_integrate_a_headless_cms_or_recode_from/) |
| Live preview, visual editing | 18% | 25 / 20 / 8 | [Kirby live preview](https://forum.getkirby.com/t/new-to-kirby-any-live-preview-or-wysiwyg-option/14457) |
| E-commerce | 18% | 20 / 21 / 5 | [WordPress vs Shopify](https://www.reddit.com/r/Wordpress/comments/1nl2mwk/wordpress_vs_shopify_which_one_is_really_best_for/) |
| SEO | 16% | 20 / 19 / 2 | [framework vs CMS for SEO](https://www.reddit.com/r/Frontend/comments/1ppa1h2/fe_framework_vs_cms_like_wordpress_in_seo/) |
| AI tools, MCP | 15% | 15 / 19 / 0 | [WordPress vs Lovable](https://www.reddit.com/r/Wordpress/comments/1tczryj/wordpress_vs_lovable_and_other_ai_tools_for/) |
| Multilingual | 10% | 17 / 11 / 4 | [multilingual CMS for non-techies](https://www.reddit.com/r/webdev/comments/186wkh5/is_there_a_simple_multilingual_cms_for_nontechies/) |
| Project longevity, funding | 9% | 26 / 9 / 2 | [why Drupal did not gain from WordPress](https://news.ycombinator.com/item?id=41853615) |
| Accessibility | 6% | 10 / 6 / 2 | |
| Multi-site, multi-domain | 5% | 4 / 6 / 3 | [WordPress Multisite alternative](https://www.reddit.com/r/webdev/comments/jwv4b4/alternative_to_a_wordpress_multisite/) |
| Backups | 5% | 9 / 6 / 2 | [Backup and Migrate in Drupal CMS](https://www.reddit.com/r/drupal/comments/1k0fqtn/why_isnt_backup_and_migrate_included_in_drupal/) |
| Staging, content sync | 4% | 1 / 4 / 5 | [Kirby license on staging](https://forum.getkirby.com/t/how-to-licence-kirby-in-headless-projects-to-inherit-to-staging-subdomains/33699) |
| GDPR, EU hosting | 3% | 14 / 3 / 1 | |

Title shapes (1,203 titles): vs 502, which or recommend 500, headless 118, alternative to 100, migrate from 70, cost 32.

## Top 30 pairs

Distinct threads naming the pair with "vs" or "compared to". HN since 2019.

| # | Pair | Threads | # | Pair | Threads |
|---|---|---|---|---|---|
| 1 | React vs Vue | 34 | 16 | Laravel vs WordPress | 5 |
| 2 | Drupal vs WordPress | 21 | 17 | Craft CMS vs WordPress | 5 |
| 3 | Angular vs React | 19 | 18 | Shopify vs WooCommerce | 5 |
| 4 | React vs Svelte | 18 | 19 | Hugo vs Jekyll | 5 |
| 5 | Angular vs Vue | 12 | 20 | Next.js vs Rails | 5 |
| 6 | Django vs Flask | 11 | 21 | Svelte vs SvelteKit | 5 |
| 7 | Gatsby vs Next.js | 10 | 22 | Django vs Node.js | 4 |
| 8 | Drupal vs Joomla | 10 | 23 | Shopify vs WordPress | 4 |
| 9 | Next.js vs Remix | 7 | 24 | Squarespace vs WordPress | 4 |
| 10 | Python vs Ruby | 7 | 25 | Next.js vs React | 4 |
| 11 | Astro vs SvelteKit | 7 | 26 | Next.js vs WordPress | 4 |
| 12 | Astro vs Next.js | 6 | 27 | Next.js vs Svelte | 4 |
| 13 | Django vs Rails | 6 | 28 | Wix vs WordPress | 3 |
| 14 | Svelte vs Vue | 6 | 29 | Jamstack vs WordPress | 3 |
| 15 | Kirby vs WordPress | 6 | 30 | Laravel vs Rails | 3 |

Headless pairs are rare: Payload vs Strapi 2, Sanity vs Contentful 2.

## Findings for the directory

- No competitor shows editor experience or hosting requirements, ranked 5th and 12th here.
- jamstack.org and bestofjs order by GitHub stars; FindSoftware keeps stars as a dated fact.
- 5 of the top 6 pairs are UI libraries (React, Vue, Angular, Svelte), which the scope puts out as libraries.
- 12 of 30 pairs cross categories: framework vs CMS (Laravel vs WordPress), CMS vs builder (Wix vs WordPress), layer vs layer (Next.js vs React). Records need a kind field and "built on" relations.
- WordPress anchors most CMS pairs and "alternative to" titles; Grav's forum is mostly WordPress imports. An "imports from" field answers this.
- Kirby and Craft threads ask about license terms per domain, staging and headless use. One license field is too coarse.
- Facets worth copying: SSO and "alternative to" (selfh.st), EU cloud hosting (cms-comparison).
- AI builders (Lovable) are the comparison in recent WordPress threads; vendor forums barely mention AI.
