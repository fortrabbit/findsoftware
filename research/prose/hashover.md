HashOver is a self-hosted comment system written in PHP. A site adds it with a JavaScript tag, or with a PHP call, and an element with the ID "hashover" marks where the comments appear. The README says comments can be posted anonymously, and that the only required information is the comment itself.

The software is not installed like a package. Its files are downloaded and used as they are, and the setup asks for an email address, an encryption key and an admin login in a secrets file. Comments are kept in flat files by default, and the setup page describes SQLite or MySQL as alternatives through PDO. The admin login moderates comments from inside the comment section.

## Worth knowing

The repository has no release or tag. The author's documentation describes version 2.0 as in development and keeps the 1.0 documentation beside it.
