AmuseWiki is a library-oriented wiki engine written in Perl, for authoring, archiving and publishing texts. Its content lives in a Git backend, and it writes in the Text::Amuse markup, which the install page's sources describe as based on and mostly compatible with Emacs Muse. The interface is localized for a list of languages. One installation can run several sites, and the README says the engine can work as a read-only site, a moderated wiki or a fully open wiki.

The install page recommends the Debian repository, which the homepage calls unofficial, and describes a manual install from a source checkout. The manual route runs an installer script, creates a MySQL or PostgreSQL database, or uses SQLite without setup, and starts the web service and a job runner as systemd units. The page recommends nginx with FCGI as the web server.

## Worth knowing

The LICENSE file gives the terms as the same as those of the Perl 5 language system and does not name a single license, so the record keeps that wording.

The install page states that Windows is not supported, and the installer needs TeX Live, a database and the Xapian libraries.
