govalidator is a Go package with validators and sanitizers for strings, structs and collections. Struct fields are checked through valid struct tags, where each validator name in a tag maps to a function, and the same checks are available as plain functions for values outside a struct.

The README says the package is based on validator.js, the JavaScript validation library. Custom validators can be added to the tag map, and a struct can be required to tag every field.

## Worth knowing

The README's breaking-changes section says custom validator functions take a context as second parameter, and that custom validators are added through a method rather than by writing to the map, to prevent data races.
