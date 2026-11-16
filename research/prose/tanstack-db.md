TanStack DB is a client-side store that holds API data in typed collections. Components read it through live queries, which update affected results as the underlying records change. Writes apply to the collection at once and are rolled back if the handler you define fails to persist them to the server. The project describes itself as an extension of TanStack Query that adds collections, live queries and optimistic mutations. Collections can be filled from TanStack Query, from a sync engine such as ElectricSQL or PowerSync, or from browser storage.

Each framework has its own npm package that re-exports the core package, so the core API is available from React, Vue, Svelte, Solid, Preact and Angular alike. The [installation guide](https://tanstack.com/db/latest/docs/installation) lists those packages next to the collection and persistence packages.

## Worth knowing

The README says the project is in beta, and the [overview](https://tanstack.com/db/latest/docs/overview) includes a migration guide for the release candidate.
