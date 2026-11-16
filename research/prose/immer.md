Immer lets code change a draft of plain JavaScript objects, arrays, Sets and Maps, and then produces the next immutable state from those changes, with structural sharing and object freezing. The documentation says it can be used wherever immutable data structures are needed, such as React state, Redux reducers or configuration management, and it supports JSON patches for communicating changes.

## Worth knowing

Support for Map and Set, JSON patches and an array-method optimization is opt-in: each is enabled once by a function call at application start. Immer relies on Proxy and cannot be used in engines without it.
