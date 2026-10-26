exelli is an Elixir wrapper around Elli, the server it is built on, adding a syntax for handlers and routes. A handler module declares `get` and `post` blocks against path segments, and a router module enables handlers and middleware under prefixes. The server is started with `Exelli.elli_start`, which also accepts a plain list of the same middleware and handler entries without the router.

The README says other Elli middleware can be enabled alongside the project's own after it is added to the Mix project.

## Worth knowing

The README gives no installation steps. The only dependency instruction is to add a middleware to `mix.exs`, and the last commit on the default branch is from June 2022.
