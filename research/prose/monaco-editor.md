Monaco Editor is the code editor from VS Code, packaged as a JavaScript library that a web page loads and runs in the browser. The project generates it from VS Code's sources with shims around the services that code needs outside VS Code. The README describes its core as models (the content of an open file, identified by a URI), editors (the view of a model) and providers (language features such as completion and hover). A locale script loaded before the main script changes the interface language. The [API docs](https://microsoft.github.io/monaco-editor/docs.html) describe the API.

## Worth knowing

The README says the editor is not supported in mobile browsers or mobile web app frameworks. It does not support TextMate grammars; the README links a third-party bridge for them. The AMD build is deprecated, and the README says it will be removed. Web workers need the page served over http or https, not from a file path.
