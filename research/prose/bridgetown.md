Bridgetown is a Ruby site generator and fullstack framework that builds static sites and can also serve server-rendered routes, both from one project. It began in 2020 as a fork of Jekyll and uses Roda for the server side and esbuild for frontend bundling. Content comes from local files or from external data loaded from APIs, and the server side can work with databases such as PostgreSQL. Whitefusion, a Portland-based web studio, leads development, and Whitefusion and Radioactive Toy offer commercial support. The [deployment guide](https://www.bridgetownrb.com/docs/deployment) covers static targets and Docker setups for dynamic sites.

## Worth knowing

Static output needs only file hosting, while server-rendered routes need a long-running Rack server such as Puma or Falcon. Node.js runs asset bundling and Ruby runs the generator, so a build needs both runtimes.
