Keen UI is a component library for Vue.js. A project installs the keen-ui npm package and either registers every component at once as a Vue plugin or imports single components by name. The stylesheet, keen-ui.css, is a separate file the project imports alongside the components. The README also describes loading the library with script tags, which makes it available globally.

Keen UI does not include a CSS framework. Its README says it has no styles for a grid system or typography, and that it can be used with any page layout, structure or CSS framework. The [documentation and demo](https://josephuspaye.github.io/Keen-UI/) show the components in use.

## Worth knowing

The README asks projects to apply a box-sizing reset and set the root font size before the components, because component sizes depend on the root font size. Importing components one at a time needs a single bootstrap import per project, and the README warns that the standalone files repeat shared code, which can enlarge the bundle.
