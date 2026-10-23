grunt-flats is a Grunt task that renders Mustache-style partials and layouts into static HTML pages. It reads a master page, layouts and partials from a `_templates` folder by default and compiles each layout into a destination directory. Partials can be nested, take their own data object, and carry default values. The task is installed as a development dependency of a project that already uses Grunt and is configured in the Gruntfile under a `flats` key.

## Worth knowing

On each build the task removes every `.html` file from the destination directory, except the master page when it sits there.
