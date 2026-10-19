# CSS frameworks and UI libraries: research notes

401 candidates checked 2026-10-19: 263 accepted, 63 boundary, 75 rejected (69 on criterion 4, 6 on 1). Sources: GitHub GraphQL API (stars, archived flag, releases, tags, README), npm registry and downloads API, RubyGems, Packagist, Hex, PyPI, NuGet and crates.io APIs. Criterion 1 read as "used to build a website or web app". lastRelease takes the registry date first, then the GitHub release, then the newest git tag.

## Discovery sources swept

| Source | Names | Note |
|---|---|---|
| bestofjs API, 15 tags | 290 projects, 168 kept | Snapshot dated 2024-08. Tags: css-lib, atomic-css, css-in-js, component, design-system, headless, framework, material, bootstrap, tailwind, icon, webcomponent, vdom, rwd, layout |
| GitHub topics, 12 topics, 300+ stars | 543 repos, 189 kept | css-framework, ui-library, component-library, design-system, ui-components, ui-kit, web-components and others; most of the rest are Android, iOS, Flutter, WPF, prompt or awesome repos |
| npm keyword search, 7 keywords | 1,750 hits, 19 new | Mostly per-component packages of Vaadin, Spectrum, Syncfusion and AG Grid |
| awesome-css-frameworks | 63 | Includes resets and stalled section |
| awesome-vue, awesome-svelte, awesome-react-components | ~140 UI kits | Sections "Frameworks", "UI Libraries", "UI Frameworks" only |
| awesome-web-components | ~90 | Component libraries, design systems, base libraries |
| awesome-design-systems, awesome-tailwindcss | ~40 | Names only |
| State of CSS / State of JS 2025 | 8 | Result pages render client-side; static HTML names Tailwind, UnoCSS, StyleX, Linaria, vanilla-extract, styled-components, shadcn/ui, Lightning CSS |
| Gap-filling | 52 | Server-driven UI (Turbo, Unpoly, Datastar, fixi), server components (ViewComponent, Phlex, django-cotton), Blazor, Livewire and Phoenix kits, Elm, Reagent, Laminar, Kotlin and Rust UI |

Left out on purpose: single widgets (data grids, date pickers, carousels, charts, emoji pickers), layout helpers (masonry, gridstack), boilerplates and starter templates, prompt and skill collections.

## Recurring facts

- Kind: CSS framework, utility engine, classless stylesheet, CSS reset, component kit, headless primitives, copy-paste collection, runtime UI library, server-side component library, icon set
- Target UI library or framework: React, Vue, Svelte, Solid, Angular, Qwik, Astro, Blazor, Livewire, Phoenix, Rails, Django, templ; or none (CSS only, web components)
- Framework adapters: one design system shipped for several targets (Ark UI, Carbon, Fluent, Flowbite, Ant Design, PrimeX, TDesign, Headless UI)
- Delivery: npm package, CDN `<link>`, CLI that copies source into the project (shadcn registry model), or both
- Styling approach: utility classes, Tailwind plugin, plain CSS or Sass, CSS-in-JS runtime, zero-runtime CSS-in-JS, design tokens or CSS custom properties
- Design language followed: Material, Fluent, Carbon, Ant, Bootstrap look, retro (98.css, NES.css), government (USWDS, GOV.UK, NHS)
- Theming: dark mode, theme generator, token export, RTL
- Accessibility claims: WAI-ARIA patterns, WCAG level, keyboard support (41 repo descriptions claim it)
- Unstyled or headless vs styled
- License: MIT in 294 of 401 repos; proprietary or commercial tier for Kendo UI, Syncfusion, DevExtreme, Ignite UI, Flux Pro, Tailwind Plus, Aceternity Pro
- Company or design team behind it (Adobe, Microsoft, IBM, SAP, Google, Shopify, GitHub, Atlassian, Alaska Airlines, government agencies)
- Registry state: deprecated flag on latest npm version, archived flag on GitHub
- Monorepo membership: several records share one repo, so adoption is per package

## Already in other areas

To be moved here or cross-referenced, not duplicated:

| Area file | Ids |
|---|---|
| js-framework | react, vue, svelte, solid, preact, lit, alpine, htmx, stimulus, polymer, ionic, marko, stencil, quasar, angular, ember, qwik, aurelia, nue, enhance, dojo |
| other-languages | primefaces, vaadin, lustre, leptos, yew, dioxus, django-unicorn, scalajs-react, jakarta-faces, tapestry, wicket, eclipse-rap, templ, aspnet-core (Blazor ships inside it) |
| php-framework | livewire, inertia, filament |
| build-dev | storybook, style-dictionary |

## Boundary groups

| Group | Rows | Decision needed |
|---|---|---|
| Styling tooling: CSS-in-JS, class utilities (cva, tailwind-merge) | 15 | In scope as a web creator tool? |
| Icon sets | 14 | In scope? Several also ship framework packages |
| Copy-paste collections without versioned release | 14 | Does a commit count for criterion 4? |
| Archived with a release inside the window | 5 | Treat as discontinued? (Pico CSS, Shoelace, Polaris React, Clarity, fritz2) |
| Release signal split | 5 | Prerelease only, or GitHub release vs older registry release (Tachyons, React95, Master CSS) |
| Paid with no public source | 2 | Tailwind Plus, Aceternity UI |
| Admin templates, theme packs, resets | 3 | Own record or note under the parent? |

## Surprises

- Copy-paste is the fastest-growing delivery model: 30 rows, the shadcn registry pattern now exists for React, Vue, Svelte, Angular, Solid, Astro, Go/templ, Elixir and Blazor. Half of these never cut a release.
- Classics fail criterion 4 despite high stars: Semantic UI 51k, Element 54k, normalize.css 53.5k (755k npm/wk), NES.css 21.8k, Skeleton 19.3k, Hyperapp 19.2k, BootstrapVue 14.4k.
- Stars and downloads disagree again: Base UI 11.2k stars on 10.7M npm/wk, React Bits 49.7k stars with no package at all.
- Foundation moved to `foundation/yeti` (foundationcss.com) and its last release is 2024-09-27, three weeks outside the window.
- Pico CSS and Shoelace are archived on GitHub. Shoelace continues as Web Awesome, Polaris React as Polaris web components.
- Renames: templUI is now shadcn-templ, Park UI moved to `chakra-ui`, STDF to `any-tdf`, ArrowJS to `standardagents`, Inkline to `uxfront-com`, NextUI is HeroUI.
- React Native-only kits (Paper, UI Kitten, RN Elements, RNUILib, NativeWind, HeroUI Native) fail criterion 1, while universal kits (Tamagui, gluestack-ui, React Native for Web) pass. The line between them needs one scope call.
- Design systems ship one repo per component (Auro) or hundreds of npm packages (Vaadin, Spectrum, Syncfusion): adoption must be read from one representative package, named in the note.
- AI framing reaches UI kits: assistant-ui and Lobe UI are chat-UI kits, ArrowJS calls itself "the first UI framework for the agentic era".
