Brisa is a web framework for JSX pages and web components. By default it builds a Bun web service that renders pages as server-rendered JSX components, and an `output` setting in the build switches to static HTML files, a Node.js or Deno server, or desktop and mobile apps. A project starts with `bun create brisa`, and the [quick start](https://brisa.build/getting-started/quick-start) lists Bun as the system requirement.

## Worth knowing

The README says the 0.x versions are experimental and not recommended for production until 1.x. With static output there is no server at runtime, so API endpoints and server interactions do not run, and redirects must be set up on the host.
