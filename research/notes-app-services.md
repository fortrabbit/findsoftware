# App services: research notes

289 candidates checked 2026-10-19: 163 accepted, 48 boundary, 67 hosted-service, 11 rejected (all on criterion 4). Sources: GitHub GraphQL (stars, archive flag, latest release, latest tag by commit date, README), GitLab API (GlitchTip), Forgejo API (Garage), Docker Hub (FusionAuth, GlitchTip pulls), npm and RubyGems. Criterion 3 read from README install, Docker or quick-start sections. 15 thin READMEs point to docs on the homepage; the note says so. Hosted rows: homepage reachable, adoption and date from the vendor's SDK on npm.

Accepted by category: 34 auth, 16 baas, 14 observability, 13 jobs, 12 documents, 10 email, 9 realtime, 9 payments, 8 error-tracking, 7 automation (webhooks), 7 feature-flags, 6 translation, 6 object-storage, 5 low-code, 3 secrets, 2 notifications, 1 ai-gateway, 1 session-replay. By language: Go 54, TS/JS 51, Java 15, Rust 14, Python 11, C# 5, Ruby 4, other 9.

Test applied: an accepted service is wired into an app through an SDK, an API or a protocol (OIDC, S3, WebSocket, SMTP, OTLP). A web app that people log into to do a task is `boundary`, capped at about 1k stars and up.

## Discovery sources swept

| Source | Names | Note |
|---|---|---|
| awesome-selfhosted, 17 sections | ~290 lines, ~70 in area | Automation, Custom Communication, MTAs, Object Storage, API Management, Feature Toggle, Localization, Low Code, Testing, Document Management, Money, Misc. Identity, Monitoring and FaaS only point to awesome-sysadmin |
| awesome-sysadmin, Identity (LDAP, SSO), Log Management, Metrics, Queuing | ~30, ~12 in area | Rest is infra |
| selfh.st directory (`r2.selfh.st/directory/software.json`) | 236 entries on 25 tags, ~80 in area | Tags Authentication, Identity Management, Backend, Webhooks, Notifications, Object Storage, Logs, Observability, Email, PDF, Task Scheduling, Language |
| GitHub topics, 45 topics, stars ≥400 | 801 repos, ~60 kept | Most hits are SDKs, libraries, awesome lists, AI agent tools, Android apps |
| Gap-filling | ~110 | Hosted vendors per category, sync engines, durable execution, email-testing tools, document editors |

Left out: libraries without a server (Better Auth, Casbin, Sa-Token, BullMQ, Sidekiq, RQ, Paraglide/inlang, i18next), per-vendor SDKs, Kafka-class data streaming, MQTT brokers, personal-finance apps, AI agent builders (Flowise, Dify), cloud storage providers (overlap with FindHost).

## Already in other areas

Not repeated here. server-infra: Supabase, MinIO, Garage, SeaweedFS, RustFS, OAuth2 Proxy, Kong, Tyk, APISIX, KrakenD, Fusio, Upstash (the Redis product; QStash has its own row here). headless-selfhosted: Directus, NocoDB, Graphweaver, Manifest. other-languages: PocketBase. search: OpenObserve, Quickwit. site-services: PostHog, Plunk, listmonk, Keila, BillionMail, Dittofeed, Healthchecks, Countly, imgproxy. build-dev: `loki` is the Storybook tool, so Grafana Loki is `grafana-loki`.

## Recurring facts

| Fact kind | Where it recurs | Count or example |
|---|---|---|
| `protocols`: OIDC, OAuth 2, SAML, LDAP, SCIM, WebAuthn | auth | nearly every identity server; LDAP only in LLDAP, GLAuth, Kanidm |
| `compatibleWith`: an API another product defined | error tracking, realtime, storage, flags, telemetry | Sentry SDKs (GlitchTip, Bugsink, Spotlight, Buggregator), Pusher protocol (Sockudo, Soketi), S3 API (8 stores), OpenFeature (flagd, GO Feature Flag, Flipt), OTLP (SigNoz, HyperDX, Uptrace, Jaeger, Tempo), Yjs (Hocuspocus, Y-Sweet), Stripe underneath (Autumn) |
| `deployShape`: single binary, Docker Compose, Helm or Kubernetes, library | all | Docker named in 124 of 162 accepted READMEs; single binary common in Go and Rust (TrailBase, Mailpit, Centrifugo) |
| `dependencies`: Postgres, Redis, ClickHouse, Kafka, Elasticsearch | all servers | ClickHouse behind most observability stacks (SigNoz, HyperDX, OpenReplay, Langfuse); Postgres behind most BaaS |
| `sdkLanguages` | baas, auth, flags, error tracking, jobs, payments | SDK count is the main integration fact a builder looks for |
| `licenseClass`: OSI, source-available, proprietary freeware | all | 35 of 162 accepted have no SPDX id from GitHub: FSL (Sentry, Convex), BSL (Vault), open core with an `ee/` folder (Langfuse, LiteLLM, Infisical, Novu); FusionAuth is free but closed |
| `cloudEdition`: vendor cloud of the same code | most | 64 of 162 accepted READMEs name self-hosting beside a cloud plan |
| `dataResidency` and compliance claims: SOC 2, GDPR, PCI | auth, payments, observability | Hyperswitch claims PCI; hosted vendors list SOC 2 |
| `pricingModel` for hosted: per MAU, per event, per seat, percent of revenue | hosted-service | auth per MAU, flags per seat or evaluation, payments percent plus fee |
| `devOnly`: meant for local development, not production | email testing, Spotlight, webhook testers | 9 email catchers |
| `releaseStream`: which tag in a monorepo is the server release | baas, jobs, realtime | Nhost, Hatchet, Trigger.dev, Electric, Uppy, Hookdeck Outpost: newest release is an SDK, Helm chart or dashboard |

## Fields and sorting for the directory

- Primary facet: service kind (the first category above). One record, one kind; a second category only where the product sells both (Sentry: error tracking and session replay).
- Filters that matter to a builder: `compatibleWith`, `protocols`, `deployShape`, `dependencies`, `sdkLanguages`, `licenseClass`, `cloudEdition`, `devOnly`.
- Hosted rows need `pricingModel` and a free-tier flag; self-hosted rows need neither.
- A "self-hosted alternative to" relation (GlitchTip to Sentry, Soketi to Pusher, Tolgee to Lokalise) is a fact both sides publish; record it as a relation, never as a ranking.
- Order stays alphabetical. Stars differ by three orders of magnitude within one kind (n8n 208k, Hook0 1.5k): showing them as a sort key would rank.

## Boundary groups

- End-user apps, 46: workflow automation (n8n, Activepieces, Automatisch, Huginn, Node-RED, Windmill, Kestra), data orchestration and schedulers (Airflow, Prefect, Dagster, Dagu, Cronicle), mail servers (mailcow, Mailu, Stalwart, Mail-in-a-Box, docker-mailserver, Mox, Maddy, Haraka), chat (Rocket.Chat, Mattermost, Zulip, Synapse), push apps (ntfy, Gotify, Apprise), infra monitoring and logs (Netdata, Prometheus, Grafana, Loki, Zabbix, Graylog, VictoriaMetrics, Keep), PDF and file tools (Stirling PDF, BentoPDF, ConvertX), spreadsheet databases (Baserow, Teable, Grist), invoicing and billing apps (InvoicePlane, InvoiceShelf, Akaunting, FOSSBilling), changedetection.io.
- Polar: source public, README has no self-host install, sold as a merchant of record. Probably `hosted-service`.
- SSOReady: no release or tag, last push 2025-08-28.

## Surprises

- The default local mail catcher is dead: MailHog has 16k stars and no release since 2020. Mailpit (10.7k stars, weekly releases) took its place. MailCatcher's GitHub releases stop in 2024 while RubyGems has 0.11.0 from 2026-09.
- Soketi, the self-hosted Pusher server, has had no release since 2024-03 and fails criterion 4. Sockudo now speaks the same protocol.
- MinIO archived its GitHub repo after the 2025-10-16 release; it sits in server-infra as boundary. Garage, SeaweedFS, RustFS and Versity are the S3 alternatives that ship releases.
- New categories with no equivalent in older directories: durable execution (Temporal, Inngest, Restate, Trigger.dev, Hatchet, Conductor, Cadence), sync engines (Electric, Zero, PowerSync, Instant, Triplit) and fine-grained authorization (OpenFGA, SpiceDB, Permify, Cerbos, Ory Keto).
- Stale or abandoned: FeatureProbe (2023), Lotus billing (2023), Notifo (2022), Asynqmon (2022), Athena PDF (archived), TOPIAM (2024-05), Webhook.site's open source (2023, the service runs on).
- Hosted SDK downloads dwarf self-hosted adoption: `@sentry/browser` 22M/wk, `stripe` 14.5M/wk, `resend` 8.2M/wk, `firebase` 6.3M/wk. Sentry is both: the same code self-hosted and as SaaS, so it has one row.
- Email testing tools (Mailpit, MailDev, smtp4dev, Inbucket, Papercut, MailCrab, MailCatcher) are dev tools. They could move to build-dev.
- Low-code internal-tool builders (Appsmith, Budibase, ToolJet, Lowdefy, Saltcorn) are accepted here as builder tools; the spreadsheet databases next to them are boundary. That split is a call Frank may want to revisit.
