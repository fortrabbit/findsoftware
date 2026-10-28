Sonic is a search backend server written in Rust that indexes words against identifiers.

Applications connect to Sonic over the Sonic Channel protocol. The server speaks that protocol alone and offers no HTTP endpoint. It installs from a binary release, a Debian package, the Rust crate sonic-server or a Docker image.

## Worth knowing

Clients need a library that speaks the Sonic Channel protocol, and the project lists official and community libraries in its README. The server is a long-running process that keeps its index in files on disk, so it cannot run from static files.
