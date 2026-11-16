pdf-lib is a JavaScript library that creates PDF documents and changes existing ones. It adds pages, draws text, images and vector graphics, fills and flattens forms, copies pages between documents, and reads and sets metadata. The README says it is tested in Node, browsers, Deno and React Native, and custom fonts need a separate sister module, `@pdf-lib/fontkit`. The [API documentation](https://pdf-lib.js.org/docs/api/) is on the project site.

## Worth knowing

pdf-lib cannot extract or edit text on a page outside a form field, and it does not accept HTML or CSS as page content. Encrypted documents are not supported. The project's maintainership document describes a single principal maintainer who works on it without pay and can no longer answer every message.
