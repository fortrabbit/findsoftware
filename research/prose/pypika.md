PyPika is a Python API that builds SQL queries through a builder pattern. A query is assembled from tables, fields and methods, and it becomes SQL text when cast to a string or passed through get_sql. The README presents it as a way to replace handwritten SQL, designed with data analysis in mind. Its platform-specific query classes handle differences between database vendors, such as quote characters.

## Worth knowing

The README says validation of SQL correctness is not a goal, so the caller checks inputs and handles database errors.
