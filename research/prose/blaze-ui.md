Blaze UI is a set of CSS classes and web components for building websites without a JavaScript framework. The stylesheet is linked from a CDN, and the components are published as the @blaze/atoms npm package for use in plain HTML or inside a framework. The components are compiled with Stencil into standard web components. Gregory Pratt, an individual, maintains the npm packages, and the code is in a GitHub organization called BlazeSoftware.

## Worth knowing

Linking the stylesheet changes nothing on a page by itself: the install guide says each element needs its Blaze class, such as c-button, before any style applies. For heavy theming, the custom build guide says to clone the CSS and components repositories, change the variables and mixins, and build the toolkit.
