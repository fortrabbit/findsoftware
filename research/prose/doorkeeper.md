Doorkeeper adds OAuth 2 provider functionality to a Ruby on Rails application. It is a gem packaged as a Rails engine, added to the Gemfile and installed with Bundler, and it also supports Grape applications through a separate integration guide. Active Record is the default ORM; MongoDB, Sequel, Couchbase and RethinkDB are supported through separate extension gems that the project lists in its README.

The project was created at Applicake in 2011 and is maintained by the community.

## Worth knowing

The OpenID Connect layer is a separate extension gem and is not part of Doorkeeper itself, so an application that needs OpenID Connect installs that extension next to it.

Doorkeeper keeps expired and revoked tokens and grants in the database. The README says the token and grant tables grow indefinitely unless a bundled rake task prunes them periodically.
