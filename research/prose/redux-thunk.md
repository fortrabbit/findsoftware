Redux Thunk is middleware for Redux that lets an action creator return a function instead of a plain action object. The middleware calls that function with the store's `dispatch` and `getState` methods, so the function can read the current state and dispatch actions at a later time or only when a condition is met. The [Redux documentation on thunks](https://redux.js.org/usage/writing-logic-thunks) describes the pattern in more detail.

With Redux's `createStore`, the middleware is installed through `applyMiddleware`. Redux Toolkit's `configureStore` adds it by default.

## Worth knowing

The thunk middleware is not part of the Redux core library, so a store set up by hand needs the package added.
