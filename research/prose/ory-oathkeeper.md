Ory Oathkeeper is an identity and access proxy written in Go. It sits in front of HTTP services, authenticates each request and checks it against access rules before the request reaches the upstream service. The README says it works as an API gateway plugin or standalone proxy, and names Ambassador, Envoy, AWS API Gateway and Nginx as integrations. It needs no database or other persistent storage. The [install guide](https://www.ory.com/docs/oathkeeper/install) covers Homebrew, a shell install script, Scoop, Docker, Helm charts and binary downloads, and a build from source.

## Worth knowing

The Ory Network offers Oathkeeper as a managed service. An Enterprise License build adds features the open source version does not have.
