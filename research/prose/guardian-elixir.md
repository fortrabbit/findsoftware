Guardian is a token-based authentication library for Elixir applications. Its core functions encode and sign a token for a resource, decode and verify it, revoke it and refresh it, with JSON Web Tokens as the default token type. It integrates with Plug and can be used outside it.

## Worth knowing

Revoking a JWT token does nothing by default, because the application does not track the tokens it issues. The README points to [GuardianDb](https://github.com/ueberauth/guardian_db) for recording issued tokens so that revocation takes effect.
