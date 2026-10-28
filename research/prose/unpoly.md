Unpoly updates parts of a page without a full reload. A link or form carrying an Unpoly attribute asks the server for HTML, and Unpoly swaps in only the targeted fragment, leaving the rest of the screen in place, including scroll positions and unsaved input. The application stays on the server, in any language and any framework.

Example attributes are `up-target`, `up-layer`, `up-validate` and `up-poll`. When attributes are not enough, a JavaScript API and compilers let a project add its own behavior. Every URL keeps working on its own, so fragments need no separate endpoints.

A site loads the package from a CDN, or installs it with npm. The install guide says the package has no dependencies and needs no build step.

## Worth knowing

The homepage names htmx and Hotwire as tools to choose instead in some cases. Paid professional support, consulting and chat support are offered separately from the package; makandra is the support provider and the company behind most of the development.
