Compiled is a compile-time CSS-in-JS library for React, maintained by Atlassian. It parses styles written in JavaScript transforms them, and outputs them as atomic CSS, with the style sheets produced at compile time. Using it means adding a plugin for the bundler in use or configuring Babel directly, as the [installation guide](https://github.com/atlassian-labs/compiled/blob/master/website/packages/docs/src/pages/installation.mdx) describes.

## Worth knowing

Atlassian does not officially support Compiled outside its own products and the Atlassian ecosystem, as the [contributing guide](https://github.com/atlassian-labs/compiled/blob/master/CONTRIBUTING.md) says. The docs' limitations page lists dynamic selectors and indirect selectors among the things the compile-time design cannot handle, and it says the older Styled API will eventually be retired.
