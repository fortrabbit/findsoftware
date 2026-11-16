ow checks the arguments of a function at runtime and throws an ArgumentError with a message when a value does not match. Checks are written as chained predicates, such as ow.string.minLength, and TypeScript type guards narrow the checked value afterwards.

The package installs from npm and runs in Node.js, where the name of a checked value is inferred from the source. In the browser that inference does not work.

## Worth knowing

For complex schema validation, such as API responses or parsed JSON, the README points to zod instead. A dev-only import, ow/dev-only, exports a shim in production builds, which lowers the bundle size.
