DerbyJS is built on a data synchronization engine, Racer, and renders the same templates in the browser and on the server. A project can hold one or more single-page apps, each with models, templates and routes, and the server side plugs into Express as router middleware. The [documentation](https://derbyjs.github.io/derby/) covers the framework, and the [getting-started page](https://derbyjs.com/started) lists Node.js and MongoDB as what a first app needs.

## Worth knowing

The getting-started page calls the MongoDB adapter the most complete of the database adapters, and Redis is optional for scaling pub/sub beyond one server process. The install page gives an npm command only for the derby-examples repository, not for the framework package itself.
