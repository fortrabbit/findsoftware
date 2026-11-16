Swashbuckle.AspNetCore generates OpenAPI (Swagger) documents from an ASP.NET Core application's code and serves them as JSON, with an embedded swagger-ui for exploring them. The parts work together or on their own: the generator, a middleware that exposes the document, and the UI. Add-on packages include a command line tool and Redoc as an alternative interface.

The library is added to an ASP.NET Core application as a NuGet package, and the application registers the generator in its startup path.

## Worth knowing

The embedded Redoc interface collects anonymous usage telemetry by default. The README says the `disableTelemetry` option turns it off.
