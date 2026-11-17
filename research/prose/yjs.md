Yjs is a CRDT framework that exposes shared types, such as maps and arrays, and merges concurrent changes from peers without conflicts. Editor bindings (ProseMirror, Quill, Monaco, Tiptap and others), connection providers such as y-websocket and database providers such as y-indexeddb are separate packages, installed from npm next to yjs. The [getting-started guide](https://docs.yjs.dev/getting-started/a-collaborative-editor) builds a collaborative editor with the Quill binding. Kevin Jahns maintains the project.

## Worth knowing

The README asks commercial users to sponsor the project, a social expectation that sits on top of the MIT license. Each binding and provider has its own package and repository, so the repository figures describe the core only.
