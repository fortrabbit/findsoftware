Hey API is an OpenAPI code generator for TypeScript, published on npm as @hey-api/openapi-ts. It runs from the command line, from a package.json script or from a script that calls its createClient function, reads an OpenAPI specification and writes the generated client code into an output directory of the project. The generated clients target HTTP clients such as the Fetch API, Angular, Axios, Next.js and Nuxt, and the package accepts any OpenAPI specification.

The package is installed as a development dependency, and the build pipeline can run it through the Vite plugin the project publishes alongside it. The repository is a monorepo that holds other packages of the Hey API ecosystem.

The project is maintained by Hey API, and the license file names it as the copyright holder under the MIT license.

## Worth knowing

The package states that it is in initial development and asks users to pin an exact version, and the project publishes migration notes for each breaking release. The project also operates a hosted Hey API Registry, at app.heyapi.dev, that stores specifications; the generator can read a specification from it by a registry name.
