Restate is a runtime for services written with its SDKs, shipped as one self-contained binary with no external dependencies. It keeps its state in an embedded RocksDB store, and applications invoke its services over HTTP through its ingress. In cluster deployments, snapshots go to an object store such as AWS S3 or MinIO. Restate GmbH in Berlin maintains it. Restate Cloud is a fully managed serverless version, and Restate BYOC is managed in the customer's own cloud.

## Worth knowing

The license is the Business Source License 1.1. It does not allow a Public Restate Platform Service, a managed service that lets third parties register their own service deployments and invoke them. Each release moves to the Apache License 2.0 four years after its release date.
