idb wraps the browser's IndexedDB API and mirrors its methods, but every request returns a promise. A database object gets shortcuts such as `get`, `put` and `getAll` that open a transaction for a single call, transactions expose a `done` promise, and cursors and stores can be iterated with `for await`. `openDB` takes upgrade, blocked, blocking and terminated callbacks, and the package ships TypeScript types that can describe a database's stores.

## Worth knowing

A transaction closes once nothing is left to do after the microtask queue, so awaiting a fetch between the start and the end of a transaction makes the next write fail. The README also says the library targets modern browsers and does not support Internet Explorer. For key-value storage alone, the README points to idb-keyval.
