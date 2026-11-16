Records is a Python library that runs raw SQL and returns the results as rows. You write the SQL yourself and read the rows by column name, by index or as a dictionary. Queries can take named parameters and can be read from SQL files.

The README says the library is powered by SQLAlchemy and Tablib. Query results export through Tablib to CSV, JSON, YAML, spreadsheet and pandas DataFrame formats, and a command-line records tool exports query results as well.

## Worth knowing

Database drivers are not included, so the driver for each database has to be installed separately.
