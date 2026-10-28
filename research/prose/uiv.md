uiv provides the components of Bootstrap as Vue components. A site or web app installs it with npm and imports the whole package or single components to keep the bundle small. A page in the browser can load the package from a CDN instead.

The package replaces Bootstrap's JavaScript but does not bring its stylesheet: the [getting-started guide](https://wxsms.github.io/uiv/usage/getting-started) says to load Bootstrap's CSS separately. Component and directive names carry no prefix by default and can take one. Server-side rendering is supported.

Component text is translatable through locale packs. All components default to en-US, the language can be changed on setup, and the locale packs work with vue-i18n.

## Worth knowing

A project that uses uiv also loads Bootstrap's CSS.
