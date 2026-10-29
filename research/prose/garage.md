Garage is an S3-compatible object storage server for self-hosted deployments spread across several sites, written in Rust. It runs as a long-lived server process and can be started at boot through systemd. It ships as a single dependency-free binary for Linux and is also installed from a Docker image or a distribution package, or built from source with cargo. Buckets can be exposed as static websites. The maintainer is Deuxfleurs, an association under the French 1901 law.

## Worth knowing

Website hosting from a bucket serves only static files, with no redirects and no PHP or other languages. Only an index document and an error document can be set for a bucket.
