Staticman is a Node.js web service that receives form submissions from a static site, runs the validation and transformation the site owner configures, and commits the result as data files to a GitHub or GitLab repository. The site gets user-generated content such as blog comments, and the content ends up in the site's repository. The service exposes a [REST API](https://best.staticman.net/docs/) that accepts the submissions, and it can be run with npm, with Docker or on Heroku. The documentation covers spam handling and notifications.

## Worth knowing

The data lives in a GitHub or GitLab repository the site owner chose, so the site depends on that service as well as on the Staticman instance. The homepage says the project is supported by the work of volunteers.
