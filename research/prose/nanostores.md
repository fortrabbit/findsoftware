Nano Stores keeps application state in small stores outside the UI components. An atom holds a value and a computed store derives one from other stores, so a component reads only the stores it uses. The [getting started guide](https://nanostores.net/docs/getting-started/) describes a store as a plain JavaScript module that components only read.

Official adapter packages connect the stores to React, Preact, Vue, Solid, Lit, Angular and Alpine.js, while Svelte and vanilla JavaScript use them without an adapter. Companion packages cover persistence, data fetching, routing and translations.

## Worth knowing

On the server a store is shared by all requests, so the homepage advises keeping per-request data out of it.
