Buffalo is a web development framework and toolkit written in Go. It generates a project with the front end and the back end set up together, and projects use Plush templates, with html/template as an option. The supported databases are MySQL and MariaDB, PostgreSQL, CockroachDB and SQLite, and the localization guide describes translations through go-i18n. The project is installed from a pre-built release archive or from source. The build command packs the application into a single binary, and the [deployment guide](https://gobuffalo.io/documentation/deploy/systemd/) runs that binary as a systemd service that starts a process. Mark Bates holds the copyright under the MIT License.

## Worth knowing

The homepage and the installation page name an older Go release than the one the module file of the latest release requires.
