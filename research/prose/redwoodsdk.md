RedwoodSDK is a server-first React framework that starts as a Vite plugin and adds React Server Components and Server Functions to a project. A route returns JSX, which renders on the server and reaches the browser as HTML.

The README says the framework is for Cloudflare (workerd) only, and the quick start deploys to Cloudflare with a single command. The built-in database uses SQLite Durable Objects and is marked experimental.

## Worth knowing

RedwoodSDK has its own repository and is not part of the RedwoodJS framework, which the same organization maintains. The [hosting page](https://docs.rwsdk.com/core/hosting/) says Cloudflare's platform is not required and any bare-metal hosting provider can be used, which differs from the README's workerd-only statement.
