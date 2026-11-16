Laravel Translation Manager is a Laravel package for managing a project's translation files through a database. It reads the translation files of a Laravel application into database rows, lets the strings be edited in a web interface inside the application, and writes the results back to the files. Translation keys can also be found by scanning the application's PHP and Twig sources. The package works alongside Laravel's own translation system and does not replace it.

## Worth knowing

The export step overwrites the translation files and removes their comments, so the README advises a backup first. The README describes the package as still very alpha, and its TODO list names features still missing.
