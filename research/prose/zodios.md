Zodios is a TypeScript API client for REST endpoints. Endpoints are declared once as a list of methods, paths, optional aliases and Zod schemas for parameters and responses, and the client then offers typed calls with autocompleted paths and parameters and checks each response against its schema. The client is based on axios, and the shared definitions are based on Zod. The documentation describes Zodios as a set of packages: beyond the core client there are plugins, React and Solid hooks based on TanStack Query, an Express adapter and an OpenAPI generator, and the declarations can be shared between a client and a server.

## Worth knowing

Zodios embeds none of its dependencies, so a project installs the peer dependencies it needs. The README says autocompletion works best with a TypeScript language server, even in plain JavaScript.
