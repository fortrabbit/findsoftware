Squire is an HTML5 rich text editor that a page creates on a DOM node, replacing a textarea, and reads and writes as HTML. It was built for email composition in the Fastmail web app, where forwarded and quoted HTML from other senders has to keep its formatting. The editor therefore keeps the HTML as the source of truth rather than converting it into a limited internal model. It ships no toolbar, widgets or overlays; the application builds its own interface around the editor.

## Worth knowing

The README says a page must provide a way to turn raw HTML safely into DOM nodes. Squire uses DOMPurify when the page loads it; otherwise the configuration needs a sanitizeToDOMFragment function.
