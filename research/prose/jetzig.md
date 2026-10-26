Jetzig is a web framework written in Zig. Its HTML templates use Zmpl, and endpoints render JSON by default. Its database layer, JetQuery, provides a PostgreSQL adapter only at present. The [quickstart](https://www.jetzig.dev/documentation/sections/quickstart) generates a new project with the Jetzig command line tool, which is available as a pre-compiled download or can be compiled from source.

## Worth knowing

The quickstart says Jetzig requires the Zig master build, a nightly compiler, so a project follows a moving toolchain rather than a release. The [database introduction](https://www.jetzig.dev/documentation/sections/database/introduction) states that SQLite is planned but not yet provided. The application runs as a server process, with an option to detach it and run it as a service.
