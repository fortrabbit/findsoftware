Showdown is a JavaScript converter that turns Markdown into HTML and HTML back into Markdown, based on the original Markdown work by John Gruber. It runs in the browser or under Node.js, and a command-line tool is bundled with it. Flavors set its options so that output follows original Markdown, GitHub Flavored Markdown or CommonMark. The project's wiki holds examples and fuller documentation, along with a list of known extensions.

## Worth knowing

Showdown does not sanitize its input, by design, so untrusted Markdown can produce HTML that injects scripts. The project offers a safeMode option and points readers to a separate sanitizer for untrusted sources.
