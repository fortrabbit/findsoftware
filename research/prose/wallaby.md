Wallaby is an Elixir library for feature tests that drive a real browser against a web application. A test visits a page, fills in fields, clicks buttons and asserts on what the page shows. By default each test case runs concurrently and the library manages the browsers for it. Chrome is the default driver, and Selenium can be used instead; the matching driver tools have to be installed separately.

For Phoenix applications, the setup has the endpoint serve requests during tests. With a database that supports Ecto's sandbox mode, a plug lets the browser and the test share one database connection. The [official documentation](https://hexdocs.pm/wallaby) covers the DSL.

## Worth knowing

Wallaby also requires `bash`, which does not come pre-installed on Alpine Linux. Assets are not recompiled when `mix test` runs, so tests can fail against stale JavaScript or CSS until the assets are rebuilt. The README describes an esbuild alias and a webpack alias for this.
