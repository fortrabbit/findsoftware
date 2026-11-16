starry-night is a JavaScript syntax highlighter that uses TextMate grammars. It produces a syntax tree rather than a string, so the result can be turned into HTML, React nodes or ANSI output. The README says its output classes are meant to match GitHub's and that the stylesheet it ships supports light and dark mode. It calls the project similar to shiki.

## Worth knowing

The package is ESM only. The README notes a WebAssembly dependency and rather big grammars, and says it may be too heavy in browsers, where it names lowlight and refractor as more suitable options. The grammars it includes are covered by their own repositories' licenses, which the README calls permissive.
