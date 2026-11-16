TypeBox is a TypeScript library that builds JSON Schema objects in memory and infers the matching TypeScript type from each one. One definition can therefore be checked statically by TypeScript and at runtime with standard JSON Schema validation.

The package also includes a Script engine that converts TypeScript type definitions written as text into JSON Schema, and a compiler submodule that checks values against a compiled schema. The README names REST and RPC services as a place to validate data received over the wire.

## Worth knowing

The 1.x line is ESM only. The 0.x line is kept under long-term support in a separate repository and supports both ESM and CommonJS.
