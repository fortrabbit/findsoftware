Marked is a Markdown compiler that turns Markdown into HTML. It runs in a browser or on Node.js, and it can also be used from a command line interface. It is built for speed and parses without caching, and custom extensions can be added to adapt it.

The MarkedJS organization maintains it, and the project's own documentation pages are rendered with Marked.

## Worth knowing

Marked does not sanitize the HTML it outputs. The README recommends passing the output through a sanitizer such as DOMPurify before it is shown to users.

Node.js support covers only the current and LTS release lines.
