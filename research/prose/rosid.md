Rosid is a Node.js server and static site generator. Its development server transforms each requested file with a handler when the request arrives and reloads the browser when files change. The compile command runs the same transforms and writes the results to a folder of static files that can be hosted anywhere.

Rosid selects handlers for files with a rosidfile.json or rosidfile.js in the working directory. Handlers are separate npm packages, such as the Sass handler, and the project's own documentation names EJS, Nunjucks and Twig handlers among them.

## Worth knowing

The README says that installing Rosid with npm's --no-optional flag skips a lot of dependencies and makes the serve function unavailable.
