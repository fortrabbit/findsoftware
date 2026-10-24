Apache Roller is a Java multi-user and group blog server. It runs as a web application on a servlet container, with a relational database behind it. Bloggers style their blogs with Apache Velocity templates, and group blogs assign owner, editor and drafter roles. The README names Apache Tomcat and MySQL as the usual setup, and the install guide deploys a WAR file to the servlet container. The README's Maven and Docker quick starts are for trying Roller out; its Maven quick start says not to use that technique in production.

## Worth knowing

The install guide dates from the Tomcat 7 era and still states Java 1.6 as the minimum, while the release's build targets Java 11. The install guide lists OpenID and LDAP as sign-in options.
