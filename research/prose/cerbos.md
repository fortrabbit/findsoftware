Cerbos is an authorization engine: an application sends it a principal, an action and a resource, and it answers whether the action is allowed under the policies it holds. The [deployment guide](https://docs.cerbos.dev/cerbos/latest/deployment/) describes two ways to run it, as a shared service that a group of applications calls or as a sidecar beside each application. The Cerbos PDP listens for HTTP and gRPC requests and keeps no state of its own; the decisions come from the information the calling application passes in.

Policies are stored as files or in a store, and the [storage page](https://docs.cerbos.dev/cerbos/latest/configuration/storage) lists a git repository, a directory on disk, object storage and database-backed stores as places to keep them. The PDP is distributed as a binary, as a container image on the GitHub Container Registry and as a Helm chart. The company behind it, Zenauth Ltd, publishes the site under the Cerbos.dev name.

## Worth knowing

Cerbos Hub is the policy control plane and has a hosted sign-up. The storage page names MySQL as a dynamic store that accepts policy changes at runtime through the Admin API.
