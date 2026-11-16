Translation is a PHP component of Symfony that looks up translated messages for the user's locale. Dictionaries can be written in YAML, PHP or XLIFF, and a locale can fall back to other locales. The docs also describe a Twig filter and tag for translating in templates, and the translation:extract command lists the messages the code and templates use. The default locale and the translation directory are set in the application's configuration.

## Worth knowing

Translating into languages other than English needs the PHP intl extension. Translation files can be pushed to and pulled from third-party translation platforms, through provider packages installed separately.
