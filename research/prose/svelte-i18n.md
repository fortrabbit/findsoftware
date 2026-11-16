svelte-i18n localizes a Svelte app with stores. A locale store holds the current locale, a dictionary store holds the messages for each locale, and a formatter store turns a message id into text inside a component. A dictionary is a JSON object, added up front or loaded on demand, and the [Getting Started guide](https://github.com/kaisermann/svelte-i18n/blob/main/docs/Getting%20Started.md) covers both.

It is installed from npm into a Svelte project. Server rendering is covered by a separate SvelteKit guide, which sets the locale on the server from the request's language header.

## Worth knowing

The README opens with a notice that the library is being reworked, moving from a singleton to instances, and that the work will happen when the maintainer finds time and priority for it.
