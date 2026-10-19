# Build and development tools: research notes

181 candidates checked 2026-10-19: 105 accepted, 30 boundary, 3 hosted-service, 43 rejected (all on criterion 4). Sources: GitHub API, npm registry and downloads, Packagist, RubyGems, PyPI, crates.io, Hex, NuGet, Homebrew formulae API, VS Code Marketplace API; proprietary apps from their download pages, appcasts and SourceForge RSS.

## Discovery sources swept

| Source | Names | Note |
|---|---|---|
| bestofjs API, tags build, css-tool, image, compiler, svg, styleguide, font, performance, monorepo | ~70 relevant of 159 | Snapshot dated 2024-08 |
| State of JS 2024 build tools | 15 | All already found via bestofjs |
| GitHub topics bundler, local-development, deployer, image-optimization, css-preprocessor | ~45 relevant of 73 | `local-development-environment`, `deployment-tool` and `component-explorer` topics are noise or empty |
| awesome-javascript, Bundlers | 9 | 0 new |
| Gap-filling per ecosystem | ~60 | Rails, Django, Phoenix, Rust, .NET, Java asset pipelines; local dev envs and deploy tools from PHP and WordPress |

## Already in other areas

- `js-framework`: vite, parcel, gulp, grunt, brunch, storybook, modernjs, assemble, create-react-app, wmr
- `headless-selfhosted`: front-matter
- Not listed here, left to `css-ui`: Tailwind CSS, UnoCSS and other CSS frameworks

## Recurring facts

- Tool kind: bundler, task runner, CSS processor, asset or image optimizer, component workshop, visual testing, editor extension, local dev env, deploy tool
- Stack it integrates with: Laravel, Symfony, Rails, Django, Phoenix, WordPress, Drupal, Magento, React, Vue
- Built on or wraps: Rsbuild on Rspack, Laravel Mix and Encore on webpack, Beasties fork of Critters, Shakapacker successor to Webpacker
- Config compatibility: webpack-compatible (Rspack), Rollup-compatible (Rolldown), PostCSS plugin
- Implementation language differs from target: JS tooling written in Rust (Rspack, Rolldown, Lightning CSS, SWC, Oxc) or Go (esbuild)
- Distribution channel: npm, Packagist, RubyGems, PyPI, crates, Hex, NuGet, Homebrew, VS Code Marketplace, desktop installer, Docker image
- Operating systems: macOS only (Valet, ImageOptim), Windows only (Laragon, Open Server Panel), Linux (Lerd)
- Local env runtime: Docker, Vagrant, native binaries, Nix
- Deploy method: SSH with symlinked releases, FTP, Docker image, S3 sync, GitHub Action
- Image formats in and out: JPEG, PNG, WebP, AVIF, SVG
- License model: proprietary freemium (Herd, MAMP PRO, ServBay), open core (imgproxy Pro), hosted companion (Chromatic, Percy, Lost Pixel, Bit)
- New adoption metrics: Homebrew installs per year, VS Code Marketplace installs

## Surprises

- Criterion 4 drops heavily used tools: uglify-js 26.3M npm/wk, csso 19.1M/wk, clean-css 11.8M/wk, html-minifier-terser 10.5M/wk, svgr 10.0M/wk, Laravel Mix 136k/wk. Browserify misses the window by 16 days.
- Commits without releases: git-ftp, pngquant, ImageOptim, BackstopJS, jsbundling-rails. Criterion 4 counts releases only.
- mkcert: 446k Homebrew installs per year, no release since 2022.
- Downloads dwarf stars for transitive dependencies: PostCSS 188M npm/wk on 29k stars, Lightning CSS 115M/wk on 7.7k stars.
- Monorepo packages: wp-env and @wordpress/scripts ship from Gutenberg, Turbopack from Next.js, the Astro extension from the Astro repo. GitHub stars belong to the monorepo; adoption has to come from the registry.
- Id clash: `sharp` is the Laravel admin panel in `php-framework`; the image library takes `sharp-image`.
- Repos move: Mako now `utooland/utoo`, wasm-pack moved from `rustwasm` to `wasm-bindgen`, Eleventy Image is `11ty/image`.
- Proprietary desktop apps (Herd, Local, MAMP, ServBay, DevKinsta, WampServer) have no API. Release dates come from download file Last-Modified headers or version lists; three stay boundary without one.
- XAMPP is still offered for download but its latest installer dates from 2023-11.
- 30 boundary rows fall into six groups: generic dev tools (TypeScript, ESLint, Prettier, Biome, Stylelint, Playwright, Lighthouse, Turborepo, Nx, devenv, Docker Desktop, Fabric), hosting-platform CLIs (Netlify, Vercel, Surge), self-hosted PaaS (Coolify, Dokku, CapRover), library bundlers (tsup, tsdown), framework-bound pieces (Turbopack, Bun, Metro, Vue extension, Markdown All in One, Bit), and no release date found (ServBay, DevKinsta, WampServer, archived Lost Pixel). One scope call per group.
