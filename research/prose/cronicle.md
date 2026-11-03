Cronicle is a task scheduler and runner for several servers, with a web UI for scheduling, running and watching jobs. A primary server keeps time and assigns jobs to worker servers, and a backup server takes over if the primary fails. Jobs run plugins, which are executable scripts in any language. External applications can register an API key and use the REST API to schedule and run events. Cronicle is written in JavaScript for Node.js. It installs with a script or from a release tarball, and the install guide starts it as a service with a control script.

## Worth knowing

The README says the project will continue to receive bug fixes and security patches, and it names xyOps, a separate product by the same author, as the path for new features. Storage defaults to local disk, with Couchbase or Amazon S3 as alternatives.
