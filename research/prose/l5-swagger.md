L5 Swagger is a Laravel package that generates an OpenAPI document from swagger-php attributes in a Laravel application and serves it through Swagger UI. It is installed with Composer and registers itself through Laravel's package discovery. The artisan generation command writes the document, which is then served at /api/documentation. The package does not define the specification itself: it packages swagger-php and swagger-ui for Laravel, and the attributes are written as swagger-php describes them.

## Worth knowing

The documentation routes have no middleware by default, so the generated documentation is public until authentication middleware is added to them in the configuration.
