Loki is a visual regression tester for Storybook stories. It captures a screenshot of each story and compares it with reference images that are checked into the project's git repository. It runs on Node and is added to a project with a package manager.

Loki does not start any servers, so the Storybook it tests has to be available when the tests run. The [continuous integration guide](https://loki.js.org/continuous-integration.html) describes it as built to run on a CI server. It renders stories with Chrome, either in Docker or as a local application, and the README also lists Chrome in AWS Lambda.

## Worth knowing

The Docker target needs Docker, the local Chrome target needs a Chrome installation, and the gm diffing engine needs GraphicsMagick.
