Laravel Translatable adds the HasTranslations trait to Eloquent models, so that chosen attributes keep one value per locale. The translations are stored as JSON in the model's own columns, and no table of its own is needed. A model declares its translatable attributes with the Translatable attribute or a $translatable property. The trait then writes and reads one locale with setTranslation and getTranslation, and filters records by locale with queries such as whereLocale. The package requires Laravel.

## Worth knowing

Each translatable column has to be a JSON column. The installation page says text columns can stand in where the database has no JSON type. Case-insensitive search across translations depends on the database, and SQLite converts only ASCII letters.
