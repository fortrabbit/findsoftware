BlogEngine.NET is an open source blogging platform for ASP.NET that runs on Windows hosting with IIS. Posts and pages are stored as XML files in the App_Data folder by default, and a database provider stores them in MS SQL Server, MySQL, SQLite or other standard SQL databases. The admin panel is at the /admin/ path of the site, and the App_Data and Custom folders need write access for the application to run.

## Worth knowing

The code is released under the Microsoft Reciprocal License, and the documentation under Creative Commons. The README asks users to update the machineKey in Web.config after installation, to prevent a known exploit that affects installs still using the default admin account. The newest release is older than the default branch, which has received commits since.
