Gettext is a PHP library that imports, edits and exports gettext translations. Loaders read PO and MO files into a collection of translations, each with its original text, translation, plural forms, references and comments, and generators write the collection back out. Scanners extract new strings from source files. A merge combines a scan with an existing PO file, and the options decide which translations, headers, comments, flags and references are kept.

The package includes no scanner. Scanners for PHP and JS sources, and a JSON format, are separate packages that the README names.

## Worth knowing

A strict PO loader fails on syntax errors and warns about plural counts and missing headers, so it can serve as a linter for PO files in a build. It is about 50% slower than the default loader.
