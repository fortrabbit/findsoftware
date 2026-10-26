OpenCms is a website content management system written in Java and XML, developed by Alkacon Software GmbH & Co. KG. It runs as a Java web application on a servlet container, uses JSP for template logic, and keeps content in a database that can be MySQL, MariaDB, Oracle, PostgreSQL, MS SQL Server, DB2 or HSQLDB. Pages can be served dynamically or exported to static HTML files, and one installation can host several websites.

The [installation guide](https://github.com/alkacon/opencms-core/blob/main/assets/docs/INSTALL.md) describes a manual install of the web application archive on Tomcat, and the project also publishes a Docker image.

## Worth knowing

Alkacon sells OCEE, a commercial extension for OpenCms, which the [project homepage](https://www.opencms.org/en) describes beside the open source release.

The installation guide in the repository names Tomcat 9 only, while the README says the current Jakarta variant runs on Tomcat 10.1, Tomcat 11 or Jetty 12. The README is the newer statement, so check the Tomcat version against it before installing.
