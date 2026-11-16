International Telephone Input puts a country selector on a phone number input and formats the number as the user types. It can return the number in E.164 format for storage and validate it with specific error types.

The core is a vanilla JavaScript library. According to the [integrations page](https://intl-tel-input.com/docs/integrations), the React, Vue, Angular and Svelte components wrap that same core.

## Worth knowing

Formatting and validation helpers, and country-specific placeholders, come from a separate utils script that is loaded apart from the main library.
