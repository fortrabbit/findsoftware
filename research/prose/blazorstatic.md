BlazorStatic is a library that turns a Blazor app into a static site. Running the app fetches the HTML of each page with HttpClient and writes the HTML files and assets to an output folder. Pages are discovered among Razor files, and blog posts are Markdown files with YAML front matter, so content from other static site generators can be reused. The [deployment guide](https://github.com/BlazorStatic/BlazorStatic/blob/master/BlazorStaticWebsite/Content/Docs/deployment.md) describes how the output folder is published, since it holds plain HTML files and assets.

## Worth knowing

The output is produced by running the .NET app, so building the site needs the .NET SDK on the developer's machine or in CI. The live site needs only a host that serves static files. The NuGet package has only prerelease versions, and the repository has no stable release.
