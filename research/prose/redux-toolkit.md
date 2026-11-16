Redux Toolkit is the Redux project's toolset for writing Redux logic. It covers store setup with `configureStore`, reducers and their action creators with `createSlice`, asynchronous work with `createAsyncThunk`, and normalized state with `createEntityAdapter`. The [getting started guide](https://redux.js.org/toolkit/introduction/getting-started) covers setup in an existing app and in a browser.

The package builds on Redux. Its `configureStore` includes the thunk middleware by default. RTK Query, the data fetching and caching layer, ships in the same package under its own entry points and is optional.

## Worth knowing

The browser build needs an import map when it is used without a bundler, because it imports its dependencies by package name. The package is deliberately limited in scope: it does not provide reusable Redux modules, folder structures or entity relationship management.
