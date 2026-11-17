Zod to OpenAPI reads the Zod schemas and route definitions of a TypeScript API and writes an OpenAPI document from them, so the schemas that validate requests also describe them. Schemas are named with an `openapi` method that Zod objects gain once the library extends Zod, and a registry collects named schemas, parameters and paths. A generator turns the registry into the components section or a full document for OpenAPI 3.0, 3.1 or 3.2. The README shows a script in the build step that writes the document to a file such as `openapi-docs.json`.

## Worth knowing

For Zod 3 schemas, the README points to an older release line that its maintainers say they do not intend to support going forward. Calling `z.nullable()` on a registered schema does not produce a reference to it; the README suggests the schema's own `.nullable()` method instead. Schemas of types the library does not support raise an error unless the type is given by hand through the `openapi` method.
