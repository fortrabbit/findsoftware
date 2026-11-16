Überauth runs the start and the return of a third-party sign-in inside a Plug application. Each provider is a strategy plug with a request phase, which redirects the visitor to the provider or shows a form, and a callback phase, which turns the provider's answer into an `Ueberauth.Auth` struct or an `Ueberauth.Failure` struct. The application's controller handles both structs and creates or signs in the user itself. The README says the library provides only the initial authentication challenge and does not authenticate each request.

Providers are listed in the application configuration, and their routes default to paths such as `/auth/github` and `/auth/github/callback`. Each strategy is a separate Hex package that the application adds to its dependencies. The [documentation on Hex](https://hexdocs.pm/ueberauth) covers the full API.

## Worth knowing

The core library and the strategy packages for Apple, Facebook, GitHub, Google and Twitter share one GitHub repository, and each strategy is published to Hex on its own.
