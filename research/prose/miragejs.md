Mirage JS gives frontend developers a fake server that runs beside the app in the browser. It intercepts the network requests the app makes and answers them from route handlers the developer defines, with a database and factories for test data. It is installed from npm, and Sam Selikoff maintains it. The [introduction](https://miragejs.com/docs/getting-started/introduction/) explains how the library fits into a frontend project. Mirage began as an Ember addon, and its core was later extracted into this standalone package.

## Worth knowing

Mirage resets its state on every browser reload, and it can use localStorage for temporary persistence. Under Node.js it runs only in a browser-like environment such as jsdom, and it cannot yet mock a React app's server-side API requests.
