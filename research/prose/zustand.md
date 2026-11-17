Zustand is a state-management library in which the store is a hook. Components select the part of the state they read and re-render only when that part changes, and no provider has to wrap the app. A store is created with a single `create` call, and code outside components can read and write it through `getState` and `setState`. Middleware adds persistence, Immer-based updates, Redux devtools logging and a Redux-style reducer pattern. The core imports and runs without React, and the documentation describes sharing a store with React Native and other non-React code.

## Worth knowing

Middleware that changes `set` or `get` does not apply to `getState` and `setState`. The README advises against that outside-component technique in React Server Components. Setting state merges by default; the replace flag swaps in a new state model instead, which can wipe parts such as actions. A component that reads the whole store with no selector re-renders on every change.
