flagd is a feature flag evaluation engine that runs either as a separate process or inside the application that uses it. It follows the OpenFeature specification and answers evaluations over gRPC, HTTP and the OpenFeature Remote Evaluation Protocol. It has no user interface and no persistence layer of its own.

The project is written in Go. The [installation guide](https://flagd.dev/installation/) lists a container image, release binaries and Kubernetes as install routes.

## Worth knowing

flagd belongs to OpenFeature, which describes itself as a CNCF incubating project. The repository holds several components released under separate tags, and the daemon has its own release line.
