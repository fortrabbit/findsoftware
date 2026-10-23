IronBeard is a static site generator built with .NET. It processes Razor (`.cshtml`) and Markdown (`.md`) files into static HTML. The `beard` command is installed as a .NET global tool and generates the site into a `www` folder by default.

## Worth knowing

Building the site needs the .NET 10 SDK installed on the machine that runs `beard`, so the generated files are what goes to a web space, not the generator itself. The NuGet package is at major version 2, while the repository's tags stop at v1.0.44, so the 2.x line has no tag in the repository to compare against.
