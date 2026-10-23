JungleJS is a Jamstack static site framework for Svelte. Routes are Svelte files under src/routes, and a file named with a parameter, such as [param].svelte, generates dynamic routes from the data layer. A GraphQL data layer lets any part of the app query data from any configured source.

The framework compiles to completely static code that does not have to be hydrated into a single page application. A new project is created from the junglejs template with npx degit and its dependencies are installed with npm. The build output in jungle/build is the folder to deploy to static hosting.

## Worth knowing

The package installed by the docs is junglejs, not the unrelated npm package named jungle.
