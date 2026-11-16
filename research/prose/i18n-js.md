i18n-js exports the translations of a Ruby i18n setup to JSON files, so JavaScript can read the same messages. A YAML configuration lists the output files and the key patterns to include or exclude, and the output path can carry the locale and an MD5 digest of the file. The gem's plugins can fill missing keys from the default locale and export other file formats through ERB templates, and a lint command lists keys that are missing from a locale.

## Worth knowing

The script linter needs a Node.js runtime on the machine that runs it. The README also describes watchers (watchman, guard and listen) that rerun the export when locale files change, and a companion npm package for JavaScript-only use.
