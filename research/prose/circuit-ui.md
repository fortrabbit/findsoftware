Circuit UI is the web implementation of SumUp's Circuit Design System, shipped as a React component library. The install docs name the core package, which sits in a repository that also publishes design tokens, icons, illustrations, and ESLint and Stylelint plugins. Components are grouped into stable, internal, experimental, under review, legacy and deprecated stages, and the experimental and legacy groups are imported from their own paths. Most translatable strings are passed in through component props, and the components include default translations for a handful of essential strings.

## Worth knowing

The core package needs several peer dependencies installed beside it, including React, the design tokens, icons and intl packages, and temporal-polyfill. The getting-started page says to import the fonts and design tokens before the component styles.
