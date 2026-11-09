Happy DOM is a JavaScript implementation of a web browser without its graphical user interface. It is written in TypeScript and provides DOM features such as custom elements, declarative shadow DOM, mutation observers, tree walkers and the Fetch API. The project describes its purpose as emulating enough of a browser for testing, scraping web sites and server-side rendering, and the wiki names JSDOM as an alternative to it.

Test runners use it as their DOM environment. The [setup guide](https://github.com/capricorn86/happy-dom/wiki/Setup-as-Test-Environment) covers Vitest, Bun and the Node.js test runner.

## Worth knowing

With Vitest, the wiki says that the timer methods of the window do not work fully by default, because Vitest does not use the timer methods of Happy DOM. The guide gives a setup-file workaround that copies those functions into the global scope.
