Pinia is a store library for Vue. A store holds state and business logic outside the component tree, built from state, getters and actions, so components and pages can share it. The docs cover server-side rendering and a Nuxt module published from the same repository, and the project names itself the successor of Vuex.

## Worth knowing

The current line works with Vue 3, and the README points to a separate branch for Vue 2. Pinia targets modern browsers and uses Object.hasOwn(), so older browsers need a polyfill.
