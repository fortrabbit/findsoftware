Milkdown is a WYSIWYG markdown editor framework in TypeScript, in which syntax, themes and UI are added as plugins. It is built on ProseMirror and remark, and collaborative editing uses Y.js. The core package is installed next to @milkdown/crepe, the ready-to-use route, or @milkdown/kit, for an editor assembled from plugins.

## Worth knowing

The FAQ says Milkdown relies on DOM APIs and cannot run on the server, so an app that renders pages on the server initializes the editor on the client only. The homepage says it comes without any CSS, and themes are separate packages.
