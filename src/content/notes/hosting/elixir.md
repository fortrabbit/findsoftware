---
description: The deployed software runs as an Elixir application on the Erlang VM on the server.
lead: Needs a server that runs Elixir.
---

Elixir here means the production server runs the application on the Erlang virtual machine, usually as a release that bundles the runtime with the compiled code. Releases make the host requirement small, but the host has to allow a long-running process and, for clustering, connections between nodes. A record carries this value when its documentation names an Elixir deployment for the production server. The matching install requirement is [Erlang VM](/runtimes/beam/) under runtime. Phoenix is an example.
