class-validator checks the properties of TypeScript and JavaScript class instances against rules attached as decorators, and it exports the same checks as plain functions for validation without decorators. The README says it works in both the browser and Node.js and uses validator.js internally to perform the checks. It covers custom messages, nested objects, validation groups, whitelisting, and custom validators that run synchronously or asynchronously.

## Worth knowing

Schema-based validation without decorators, defined apart from the class, is no longer supported: the README says the feature broke and will not be fixed. A plain object, such as parsed JSON, has to become a class instance before it is validated, for example with class-transformer.
