localForage is an asynchronous storage library with an API that resembles localStorage. It keeps data in IndexedDB or WebSQL, and it falls back to localStorage in browsers that support neither. Reads and writes return promises or take callbacks. The README says the library is designed to run in the browser, and it can be included in a page as one JavaScript file or installed with npm.

## Worth knowing

Because the API is asynchronous, code written against localStorage's synchronous calls has to await the results. The README also says that when localStorage is the backend, its size limits make storing many large Blobs impossible.
