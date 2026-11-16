Mobility is a Ruby gem that stores translations as attributes on a class, so a model can keep its title or body in several languages. Its backends decide where the translations live: shared tables by default, translated columns, a translation table per model, or PostgreSQL json, jsonb and hstore columns. The gem works with ActiveRecord and Sequel models. In a Rails project a generator creates the initializer and the shared translation tables; with Sequel, the migrations are written by hand.

## Worth knowing

Each ORM integration has its own minimum version, listed in the install sections of the README. The PostgreSQL-only backends need PostgreSQL. The README says the json backend may also work with MySQL, but that combination is not tested.
