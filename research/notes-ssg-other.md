# SSG and docs generators, other languages: research notes

Swept 2026-10-18. 297 rows: 111 accepted, 39 boundary, 2 hosted-service, 145 rejected.

## Discovery sources

| Source | Names | Relevant to this area |
|---|---|---|
| jamstack.org generators (repo `src/site/generators`, 378 files) | 378 | 192 not JS or PHP |
| awesome-static-generators (archived 2026-10, last README version) | 165 | 107 not JS or PHP |
| Wikipedia: Static site generator, Free static website generators, Free documentation generators | ~30 | 4 new (Nanoc, Doxygen, pdoc, Blosxom not checked) |
| GitHub topic search (static-site-generator, ssg, documentation-generator, static-site, blog-engine × 28 languages, 300+ stars) | 124 | 28 new |
| Known names (seed list in task, docs tooling) | 40 | 40 |

Seeds exhausted. The 300-star bound limits discovery only, not adoption.

## Facts seen across projects

- Templating language: Go templates, Liquid, Jinja2, Tera, Razor, Mustache, Scheme/Lisp code
- Content formats: Markdown, reStructuredText, AsciiDoc, Org, MyST, Jupyter notebooks, R Markdown
- Install channel: single binary, brew, apt, cargo, pip, gem, go install, NuGet, Docker, Nix
- Build output folder: `public/`, `_site/`, `site/`, `output/`, `book/`
- Themes, plugins, live-reload dev server, search (Pagefind, Lunr), i18n, asset pipeline
- Company or foundation behind it: Microsoft (DocFX), JetBrains (Dokka), Posit (Quarto, R packages)

## Surprises

- MkDocs (22.5k stars) has had no release since 2024-08-30 and fails criterion 4. Its successors are ProperDocs (fork) and Zensical (new, from the Material for MkDocs team). The directory could show such projects as unmaintained instead of hiding them.
- Statiq (no release since 2024-01), Publish (Swift, 2022) and Slate (archived) are also out.
- Registries and GitHub disagree: Middleman, Hakyll, pdoc3 publish to RubyGems, Hackage, PyPI with no GitHub release. lastRelease has to be the latest date across all sources.
- Active projects with no tags at all (bashblog, frog, coleslaw) need a decision on what counts as a release.
- Boundary groups to decide: API reference generators (Doxygen, YARD, ex_doc, Dokka), converters (Pandoc, Asciidoctor), Hugo themes with thousands of stars (Docsy, Hextra).
- Non-GitHub forges (sr.ht, Fossil) block bots or lack star counts.
- The topic search also found blog platforms and CMSs (Halo 40k stars, Plume, BlogEngine.NET). They are not logged here; they belong to a non-PHP CMS or blog area.
- JS or PHP tools listed under other languages (HonKit, Rspress, WP2Static) were dropped to the JS and PHP areas.
