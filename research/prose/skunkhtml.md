SkunkHTML is a blog that runs on GitHub Pages. A fork of its repository holds the Markdown posts, and GitHub Actions runs an F# program that converts the posts to HTML and deploys the result to GitHub Pages.

The build uses FSharp.Formatting to convert Markdown, and its layout is based on MVP.css. The [README](https://github.com/mg0x7BE/skunk-html/blob/master/README.md) describes the content folders and the optional local build.

## Worth knowing

A local preview needs .NET. The README treats it as optional, since GitHub Actions does the build.
