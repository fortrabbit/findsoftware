Hermes is a Go package that generates responsive HTML e-mails and their plain text versions for transactional mail. It is added to a Go project with go get.

The README calls Hermes the Go port of mailgen, the Node.js engine it names. The bundled themes, default and flat, are adapted from Postmark's transactional templates, and their templates are embedded in the application binary. A project that needs its own templates implements the Theme interface and loads its own files.

## Worth knowing

The version 2 tags use a separate module path, and the README says the project moved back to the version 1 path and asks users of the version 2 path to switch. The module path a project imports therefore depends on which release line it picks.
