Fluent UI Blazor is a set of Blazor components for ASP.NET Core applications that want the look of Microsoft's Fluent design language. Some components wrap Microsoft's Fluent UI Web Components, and others leverage the Fluent Design System or make it easier to work with Fluent UI. A project adds the library with dotnet add package, registers its services in Program.cs, adds the library stylesheet and places a providers component in its top-level layout.

A separate template package provides Fluent versions of the standard Blazor project templates, and further packages carry the Fluent icons and emoji sets. Microsoft publishes the library, and the source lives in its GitHub organization.

## Worth knowing

Interactive components need an interactive Blazor render mode, which the install steps set globally or per page. The project is not an official part of ASP.NET Core, and the README says support is offered on a best effort basis through the GitHub repository only.
