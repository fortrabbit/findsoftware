# Server infrastructure: research notes

221 candidates checked 2026-10-19: 162 accepted, 38 boundary, 14 hosted-service, 7 rejected (all on criterion 4). Sources: GitHub GraphQL (stars, releases, tags, README, archived flag, license), Docker Hub official image pull counts, PyPI via pypistats, npm, RubyGems, Packagist, and the projects' own release pages where GitHub is a mirror or absent: haproxy.org, httpd.apache.org, postgresql.org `versions.json`, sqlite.org chronology, varnish.org, vinyl-cache.org and its Forgejo, hiawatha.leisink.net, Codeberg (Redict), git.deuxfleurs.fr (Garage), git.ispconfig.org, and vendor changelogs for cPanel, Plesk, DirectAdmin, CloudPanel, CWP, Enhance, Easypanel, FASTPANEL, LiteSpeed, SQL Server and Couchbase. Hosted rows: homepage reachable, date from the vendor SDK on GitHub where one exists.

Accepted by category (rows carry several): 36 database, 24 app-server, 22 reverse-proxy, 20 control-panel, 17 db-admin, 16 web-server, 11 cache, 10 tls, 9 api-gateway, 7 db-proxy, 6 load-balancer, 4 waf. By language: C 30, C++ 22, Go 22, Python 15, Java 12, Rust 11, PHP 9, TS/JS 11, Shell 5, Ruby 4, other 9; 12 proprietary rows have no language.

## Already in other areas

Skipped: `frankenphp`, `roadrunner`, `workerman`, `openresty`, `hyperf` (php-framework, other-languages), `cowboy`, `pocketbase` (other-languages), `imgproxy`, `thumbor`, `anubis`, `goaccess` (site-services), `elasticsearch`, `meilisearch`, `typesense`, `redisearch`, `paradedb` (search), `terminuscms`, `atomic-server`, `nocodb` (headless-selfhosted), `mkcert`, `coolify`, `dokku`, `caprover`, `ddev`, `lando`, `laragon`, `xampp`, `laravel-herd`, `laravel-valet`, `docker-desktop`, `bun` (build-dev).

Id collisions resolved: `falcon-rb` (Python Falcon owns `falcon`), `lego-acme` (JS lego), `enhance-cp` (JS Enhance), `cockpit-project` (Cockpit CMS).

## Discovery sources swept

| Source | Names | Note |
|---|---|---|
| Own knowledge, checked against the primary source | ~215 | The space is small and well known; no directory or topic sweep was run for this area |
| Forks and successors found while checking a source | 6 | Vinyl Cache (from varnish.org), simple-acme (win-acme README), AdminNeo, Redict, freenginx, Angie |
| Docker Hub official images, PyPI, npm, RubyGems, Packagist | 0 new | Used for adoption only |

A sweep of awesome-selfhosted and GitHub topics (`reverse-proxy`, `acme-client`, `api-gateway`, `control-panel`) is still open.

Left out: Kubernetes ingress controllers and service meshes beyond three samples, message queues (RabbitMQ, NATS), mail servers, DNS servers, monitoring, container runtimes, CDN SaaS (Cloudflare, Fastly: FindHost territory), database drivers and ORMs, Postgres extensions other than TimescaleDB.

## Recurring facts

- Role: web server, reverse proxy, load balancer, app server, process manager, cache, database, connection pooler, DB admin UI, ACME client, API gateway, WAF, control panel. Many rows hold three roles (Caddy, nginx, Traefik, HAProxy, Envoy)
- Protocols: HTTP/2, HTTP/3/QUIC, WebSocket, gRPC, FastCGI, uwsgi, PROXY protocol, TCP/UDP stream proxying
- Automatic HTTPS built in (Caddy, Traefik, FrankenPHP; CertMagic as the library behind Caddy) versus an external ACME client
- Config format: nginx-style blocks, Apache directives, Caddyfile, YAML/TOML, VCL (Varnish), labels or CRDs (Traefik, Kubernetes), web UI (Nginx Proxy Manager, Zoraxy), API-only (Envoy xDS, Kong Admin API)
- Language runtimes served: PHP via FPM/FastCGI or in-process (FrankenPHP, Swoole, RoadRunner), WSGI/ASGI for Python, Rack for Ruby, Servlet/Jakarta EE for Java, Plug for Elixir, multi-language (Passenger, NGINX Unit)
- Wire compatibility: Redis protocol (Valkey, KeyDB, Dragonfly, Garnet, Kvrocks, Redict), MySQL protocol (MariaDB, Percona, TiDB, Vitess), Postgres protocol (CockroachDB, YugabyteDB, Neon), MongoDB protocol (FerretDB), SQLite file format (libSQL, Turso)
- Databases supported, for DB admin UIs, poolers and panels: one engine (phpMyAdmin, pgAdmin, pgweb) or many (Adminer, DbGate, CloudBeaver, WhoDB)
- Deployment shape: single binary, single PHP file (Adminer, phpLiteAdmin), distro package, Docker image, embedded library (SQLite, DuckDB, PGlite, CertMagic, Pingora, Coraza)
- Release lines: LTS and stable branches with their own EOL dates (HAProxy, PostgreSQL, Tomcat, Varnish, Puma 7 and 8 in parallel). One `lastRelease` hides this; a field for supported branches may be needed
- License changes and forks as a fact kind: Redis (BSD to RSAL/SSPL to tri-license with AGPL, per LICENSE.txt) gave Valkey and Redict; nginx gave Angie and freenginx; Varnish split into Varnish Cache (Varnish Software) and Vinyl Cache; Adminer gave AdminerEvo and AdminNeo; win-acme gave simple-acme; VestaCP gave HestiaCP. MongoDB is SSPL, MaxScale BSL, Dragonfly and CockroachDB undetected by GitHub
- License not detected by GitHub on 46 rows
- Open core and paid editions: Kong, KrakenD, Tyk, Passenger Enterprise, DBeaver PRO, DbGate Premium, Beekeeper paid tiers, SafeLine Pro, Virtualmin Pro, Mongoose commercial
- Vendor cloud beside the open source server: MongoDB Atlas, Neon, Turso, Timescale/Tiger, Supabase, Pangolin
- Adoption from Docker Hub pulls: nginx 13.5B, PostgreSQL 11.9B, Redis 11.5B, Memcached 13.4B, MySQL 5.2B. No other area has this registry; for server software it is the main adoption figure beside stars
- Release source: GitHub releases missing or stale on 30+ rows where tags or the own site carry the date (PostgreSQL, httpd, HAProxy, Tomcat, Cassandra, Neo4j releases stop 2017, API Umbrella releases stop 2019)

## Boundary groups

38 boundary rows in ten groups:

| Group | Rows | Question |
|---|---|---|
| Runtime version managers | 6: mise, asdf, nvm, pyenv, rbenv, phpenv | Dev tool or server software? None found in build-dev |
| Desktop DB clients | 5: DBeaver, Beekeeper Studio, HeidiSQL, Antares, MySQL Workbench | Criterion 1 fails strictly; web creators use them |
| Object storage | 4: MinIO (archived), Garage, SeaweedFS, RustFS | S3 for assets: in scope? |
| Release by branch or none | 5: CyberPanel, Centmin Mod, SlickStack, Oracle Database, h2o | Criterion 4 not checkable mechanically; h2o tagged `no-more-releases` and ships from master |
| Prerelease-only | 2: Tengine, mongo-express | Only RCs since 2023; does an RC count as a release? |
| Kubernetes-only | 3: cert-manager, Gloo Gateway, Emissary-ingress | In scope or left out with service meshes? |
| General server admin UIs | 3: Webmin, Cockpit, Ajenti | Control panel for websites or OS admin? |
| Discontinued | 3: NGINX Unit (archived Oct 2025), SQLPad (archived), Fauna (homepage down) | Releases inside 24 months, project gone |
| Host security and tunnels | 4: CrowdSec, Fail2Ban, frp, cloudflared | Beside WAFs and reverse proxies? |
| Certificate authorities and embedded analytics | 3: step-ca, Boulder, DuckDB | Used by a website directly? |

## Surprises

- Varnish split in two. varnish-cache.org now redirects to varnish.org, where Varnish Software ships "Varnish Cache" 9.1 from `github.com/varnish/varnish`. The original project renamed itself Vinyl Cache (association founded 2025-10-29) and ships 9.1 from its own Forgejo. The old `varnishcache/varnish-cache` repo is archived with a tag named `last`. Both rows are in.
- NGINX Unit is archived and unmaintained since October 2025, per its own homepage. MinIO's repo is archived too, with 61k stars.
- h2o, 11.5k stars, stopped releasing: the newest tag is `tag-no-more-releases` (2026-01-19), the last real release 2019. Criterion 4 as written rejects it.
- Proprietary panels dominate the control-panel market (cPanel, Plesk, DirectAdmin, Enhance, CloudPanel, CWP, FASTPANEL, KeyHelp). Their release dates come only from vendor changelogs, some only as a month (SQL Server, Couchbase).
- Server-management SaaS (Forge, Ploi, RunCloud, ServerPilot, SpinupWP, GridPane, Cleavr) provisions the user's own servers. They overlap FindHost directly; all 7 sit as hosted-service.
- Supabase was in no other area. It is listed here as a database; it may belong with the data-backend rows in headless-selfhosted.
- Adoption split: Varnish Software's new repo has 73 stars while the Varnish Docker image has 22.6M pulls; Pound has 70 stars; Hiawatha has 3 GitLab stars. Stars undercount older server software.
- RubyGems totals show Unicorn at 119.9M downloads with no release since 2021-12-25, rejected on criterion 4, and KeyDB (12.5k stars) stopped in 2023.
