rehype is the HTML processor of the unified ecosystem. It adds support for HTML to unified: it parses HTML into a syntax tree, runs plugins that inspect and change that tree, and writes the result back out as HTML. The npm package combines the parser and the serializer with unified. The separate rehype-parse and rehype-stringify packages cover one half each, and rehype-cli inspects and formats HTML in scripts.

The package runs in Node.js and in Deno, and can be loaded in browsers from esm.sh. Plugins are separate packages, some kept by the rehype organization and others by outside authors.

## Worth knowing

The package is ESM only. Improper use of HTML can open a site to cross-site scripting, and the README points to rehype-sanitize to make a tree safe. Plugins can open other attacks.
