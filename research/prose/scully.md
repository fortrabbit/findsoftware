Scully is a static site generator for Angular applications. After the Angular build, the npx scully command renders each route to an HTML file in the dist/static folder, and the Angular app then loads and bootstraps over those pre-rendered pages. Scully is added to a project with ng add @scullyio/init, which creates a config file that lists the routes to render.

## Worth knowing

Older Angular versions use an earlier Scully version that receives only security updates. Scully uses Chromium, so the machine that runs the build must be able to install and run it. Routes with parameters are not rendered until the config lists them.
