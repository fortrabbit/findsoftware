sanitize-html is a JavaScript library that cleans user-submitted HTML. A caller lists the tags and the attributes per tag to permit, and the library discards the rest. The README names HTML from rich text editors, including CSS pasted from Word, as typical input.

The 2.x line no longer ships a build for the browser, so browser use means including the package in the project's own bundle.

## Worth knowing

The standalone repository is archived and points to the monorepo, where the package sits in its packages/sanitize-html directory. The README's Node.js support statement is older than the requirement in the published package.
