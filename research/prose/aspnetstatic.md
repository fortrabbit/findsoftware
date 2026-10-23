AspNetStatic is a NuGet package that generates static HTML files from the routes of an ASP.NET Core app. It is added with `dotnet add package AspNetStatic`, and the routes to generate are listed in an IStaticResourcesInfoProvider registered in the app's dependency injection container.

The package has two modes. In standalone generation the app writes the static files, which are then copied to a web host. In partial static site mode the app keeps running, serves the generated files for the static routes, and serves other routes dynamically. The package is built on ASP.NET Core, and its [README](https://github.com/ZarehD/AspNetStatic/blob/master/Readme.md) says it works with Razor Pages, MVC and Blazor SSR.

## Worth knowing

Routes for static content must not sit behind authentication or anything else that needs user interaction. Blazor pages have to finish rendering on the server, without client-side JavaScript or WebAssembly.
