phonenumbers is a Python library that parses phone numbers, formats them in national, international and E.164 layouts, and checks whether a number is possible or valid. It also formats a number as a user types it, and finds phone numbers inside a longer block of text. The package is a Python port of Google's libphonenumber, and the metadata that drives parsing ships with it.

The normal metadata loads one region at a time, on first use. Geocoding, carrier and timezone lookups need metadata held in separate packages that the caller imports explicitly. The repository also ships phonenumberslite, a package without those three lookups, for installs that run short of space or memory. The [documentation](https://daviddrysdale.github.io/python-phonenumbers/) describes the API.

## Worth knowing

A number written without a plus sign needs a default region, and parse raises an exception when it has neither. Static type checking works through the type stub files the package includes.
