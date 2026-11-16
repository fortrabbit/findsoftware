Redux-Saga is Redux middleware that manages application side effects such as data fetching. A saga acts like a separate thread responsible for side effects, started, paused and cancelled from the application with normal Redux actions, and sagas are written with an ES6 feature called Generators.

The README compares it with redux-thunk and says sagas avoid callback hell. The repository is a monorepo that publishes the core package beside related packages.

## Worth knowing

The UMD build needs a browser that supports ES2015 generators. Otherwise they have to be transpiled and given a runtime.
