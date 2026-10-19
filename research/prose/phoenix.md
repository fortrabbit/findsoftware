Phoenix is a web framework written in Elixir that runs on the BEAM virtual machine. Pages are rendered on the server with HEEx templates, and LiveView, which ships as a separate package, adds interactive pages. The phx.new generator creates a project, and mix phx.gen.release --docker writes a Dockerfile for a release build. A running application is a long-running BEAM process, started with mix phx.server or as a release. The Phoenix documentation recommends PostgreSQL, though other databases work and a project can run without one.

## Worth knowing

A production release needs SECRET_KEY_BASE and DATABASE_URL set in the environment. Phoenix applies bug fixes only to the latest minor branch, and security patches cover the last four minor branches.
