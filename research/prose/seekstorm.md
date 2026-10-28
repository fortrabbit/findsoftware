SeekStorm is a search library and multi-tenancy server written in Rust, for lexical and vector search. An application can embed the library as a Rust crate, and the server runs on your own infrastructure from a Docker image. The company behind the project, SeekStorm spółka z o.o., is based in Warsaw.

The vendor also runs the software as SeekStorm Cloud, next to the self-hosted option. The homepage puts the choice as "Self-host for free, or let us run it."

## Worth knowing

The server is a long-running process, so it cannot run from static files on a web space. The embedded library needs no separate process. An index kept on SeekStorm Cloud depends on the vendor's service.
