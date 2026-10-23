Craft.js is a React library for building drag-and-drop page editors. It modularizes the building blocks of an editor, and the developer writes the editor's interface and the editable components in React. The editor state serializes to JSON and can be recreated from it, so the application decides where edited pages are stored. The library is installed from npm as @craftjs/core, and a companion package, @craftjs/layers, adds a layers panel.

Craft.js is maintained by Previnash Wong Sze Chuan and accepts sponsorships.

## Worth knowing

Craft.js ships no ready-made editor interface; the README describes it as an abstraction on which a developer implements a page editor. It manages no content, storage or API of its own, so a project using it as part of a content tool supplies those itself.
