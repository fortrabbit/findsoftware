WebOptimizer is middleware for ASP.NET Core that bundles and minifies CSS and JavaScript files while the application runs. It is registered through `services.AddWebOptimizer` and `app.UseWebOptimizer`. The pipeline is set up when the application starts, and each output is generated on the first browser request for it.

Bundles and minification rules are defined in code and can use glob patterns. The output is kept in memory and not written to disk. Tag helpers add a version string to the `script` and `link` tags that refer to registered files, and an `inline` attribute copies a file's content into the page.

## Worth knowing

The library runs inside the ASP.NET Core application it is added to, so the application process produces the bundles. The README describes memory and disk caches as settings, and the disk cache is meant to speed up application restarts.
