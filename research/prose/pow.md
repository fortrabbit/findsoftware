Pow is an authentication and user management library built in Elixir. It works out of the box for Phoenix and Plug based applications and can be customized. Its [user roles guide](https://github.com/pow-auth/pow/blob/main/guides/user_roles.md) says adding roles needs no extension, and templates can use a Gettext module for translation.

## Worth knowing

The README says the default cache store is meant for development and test, and recommends a distributed, persistent cache store, such as Mnesia, for production.
