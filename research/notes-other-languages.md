# Other languages (tier 2) and tier 3 glance: candidate sweep

Swept 2026-10-18. 414 candidates: 239 accepted, 85 boundary, 3 hosted service, 87 rejected (all on criterion 4).

## Discovery sources

| Source | Names in scope |
|---|---|
| Wikipedia, Comparison of server-side web frameworks (non-PHP, non-JS) | ~55 |
| Wikipedia, List of content management systems (non-PHP rows) | ~60 |
| awesome-python + awesome-django (web frameworks, APIs, CMS, e-commerce) | ~40 |
| awesome-ruby (CMS, e-commerce, frameworks) | ~30 |
| awesome-dotnet (CMS, e-commerce, frameworks) | ~30 |
| awesome-java (web frameworks) | 19 |
| awesome-go (web frameworks) | 45 |
| awesome-rust (web programming) | ~30 |
| awesome-elixir, -scala, -clojure, -haskell, -lua, -dart, -swift, -gleam | ~80 |
| awesome-selfhosted (CMS, e-commerce, wikis; non-PHP, non-JS) | ~15 |
| Own knowledge, names only (proprietary DXPs, Crystal, Nim, Zig, D, CFML, C++) | ~60 |

Not logged: HTTP clients, plain servers (Puma, Gunicorn), GraphQL libraries. Facts come from the GitHub API, language registries, endoflife.date and vendor release notes.

## Recurring facts beyond the CSV

- Kind: full-stack, micro, router or API-only framework; CMS as a framework add-on (Wagtail, Spina)
- Rendering: server templates, server-driven UI (LiveView, Blazor, Vaadin), SSR plus WASM (Leptos)
- Templating: Jinja, ERB, Razor, Thymeleaf, HEEx, templ
- Runtime need: long-running process, JVM, .NET runtime, compiled binary
- Licence model: open source, open core (Magnolia, Liferay, dotCMS), closed source (Sitecore, Kentico, AEM)
- Headless API (REST, GraphQL) and admin UI, built in or a separate product (Avo)

## Surprises

- Release data is messy: monorepos tag sub-packages, JVM projects tag without GitHub releases, Clojure ships only to Clojars. 31 dates come from git tags.
- Enterprise DXPs have no repo or adoption figure: criterion 5 rests on the company. Bloomreach opens source two years after release.
- Download figures don't compare: PyPI per week, RubyGems/NuGet/Hex totals, crates per 90 days, Maven none. Stars are the only shared measure.
- Go and Rust "frameworks" are mostly API routers (Gin 89k stars). Boundary until a rule exists.
- Data-app frameworks (Streamlit 46k, Gradio, Shiny) serve HTTP but not websites.
- Chinese projects (Halo 40k stars, GoFrame, go-zero, PublicCMS) are big and missing from English lists.
- Dead projects keep large star counts (Perfect 13.7k, Revel 13k, Rocket 25.8k with no release since 2024-05).
- Tier 3: all 10 listed apps pass the criteria.
