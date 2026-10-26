REST is an Erlang framework for JSON REST services, published by Synrc Research Center. A service is an Erlang module that implements the `rest` behaviour and uses a parse transform, a compile-time code generation step for the record transformations. The endpoints plug into a Cowboy router, and the module keeps its data either in ETS tables in memory or through KVS, which the [homepage](https://rest.n2o.dev/) describes as persistent storage.

## Worth knowing

The framework includes no routing of its own: the README says routing was left out on purpose, so a service relies on the Cowboy router it is plugged into.
