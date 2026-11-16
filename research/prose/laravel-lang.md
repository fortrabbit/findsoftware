Laravel Lang is a Composer package of translations for the language keys used by Laravel Framework and the official Laravel packages, among them Jetstream, Fortify, Cashier, Breeze, Nova and UI. It is installed as a development dependency, and an Artisan command, lang:update, updates the localizations an application already has.

The [documentation page](https://laravel-lang.com/packages-lang.html) suggests calling that command from the post-update-cmd section of composer.json, so the translations follow dependency updates.
