Rustless is a REST-like API micro-framework for Rust, built on top of the Iron web framework. An application mounts its API on an Iron server bound to an address, and the crate is installed as a Cargo dependency. The project describes itself as a port of the Grape library from the Ruby world.

## Worth knowing

The README says the library is in the early stages of development and that its APIs may change. It also says Iron's underlying Hyper is synchronous and recommends an asynchronous reverse proxy such as Nginx in front of it. The API documentation site the README links does not answer.
