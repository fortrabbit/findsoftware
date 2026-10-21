elm-pages is a framework for building sites and web apps in Elm. Each route is either server-rendered, for content that depends on the request, or pre-rendered to static HTML at build time, and one app can mix both. A project is created with `npx elm-pages init`, as the [getting-started guide](https://elm-pages.com/docs/getting-started) describes.

The package is maintained by Dillon Kearns and published under the BSD-3-Clause license.

## Worth knowing

elm-pages requires the Lamdera compiler, a superset of the Elm compiler that the starter installs as an npm dev dependency. A build with only pre-rendered routes writes a `dist/` folder that works with static hosting, while server-rendered routes run on a traditional server or a serverless provider.
