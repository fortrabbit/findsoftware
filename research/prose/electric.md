Electric Clojure is a Clojure dialect for building full-stack web interfaces. Client and server expressions sit in the same function, and the Electric compiler infers where the frontend and backend split, then generates separate client and server programs from the one source. The README calls the approach full-stack differential dataflow for UI.

A project can take the library as a Clojure dependency, or start from the starter app, which runs in development with `clj -A:dev -X dev/-main`. The starter app's README gives production builds as an uberjar, a Docker image and a Fly deployment.

## Worth knowing

The project's own documents say it assumes a persistent server connection and is not built for server-side rendering.

The README says the software is free for bootstrappers and non-commercial use. Commercial use is licensed separately under a source-available business license, as the maintainer's license announcement describes.
