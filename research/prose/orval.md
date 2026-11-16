Orval is a generator that reads an OpenAPI v3 or Swagger v2 specification, in YAML or JSON, and writes TypeScript code for it: API clients, models and optional mocks. The generated code targets several client libraries, such as React Query, SWR, Vue Query and Angular, and the tool is installed into a project with npm as a development dependency.

Projects that cannot install it locally can run code generation with the official Docker image, which the install guide names as an alternative route.

## Worth knowing

Current releases require a recent Node.js line, so a project that runs an older one needs the Docker image to generate its code.
