Faktory is a language-agnostic background job server with a web UI. Workers in any language fetch jobs from it, and the web UI shows and manages them. The server runs as a single process on a host and starts Redis as a child process to hold its data. The wiki documents installs from Linux RPM and DEB packages, Homebrew, a Docker image, AWS ECS, Render.com, Kubernetes and a source build.

## Worth knowing

The server is licensed under the AGPL-3.0. The Faktory client and worker libraries are not covered by that license, according to the license text. Faktory Enterprise is a commercial edition that the project describes as offering more features and official support, and it adds a remote Redis option.
