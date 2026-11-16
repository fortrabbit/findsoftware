Superforms is a form library for SvelteKit that validates form data on the server and in the client. A form is defined by a schema from one of the supported validation libraries, and the server function `superValidate` builds the form in a load function or a form action so the page can return it to the client.

The npm package is installed into a SvelteKit project next to the validation library the schema uses. The [get-started tutorial](https://superforms.rocks/get-started) walks through a first form with a schema, a load function and an action.

## Worth knowing

The schema has to be defined at the top level of its module so the adapter caching works. Support through the project's Discord is free for non-profit use, and commercial support is bought with a donation.
