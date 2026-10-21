Meteor is a JavaScript platform for web and mobile applications. The meteor command line tool creates a project, asking for a frontend framework, and runs it during development; the README links tutorials for React, Blaze, Vue, Svelte and Solid. Packages for Meteor are published on [Atmosphere](https://atmospherejs.com/).

For production, `meteor build` produces a bundle that is a plain Node.js application. The [deployment guide](https://docs.meteor.com/tutorials/deployment/deployment.html) describes it as a websocket-based Node.js app, started with a MongoDB connection string, so the host needs a running Node.js process and access to a MongoDB server.

## Worth knowing

Galaxy, a hosted platform from the creators of Meteor, deploys Meteor apps from a git push. The npm package named meteor is only the installer for the command line tool, and the [install guide](https://docs.meteor.com/about/install.html) says not to add it to a project's package.json.
