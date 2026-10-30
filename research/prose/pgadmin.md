pgAdmin is a graphical tool for administering and developing PostgreSQL databases. It runs in one of two modes: as a desktop application on the user's own machine, or as a web application that a server hosts and that users reach from a browser. The [server deployment guide](https://www.pgadmin.org/docs/pgadmin4/latest/server_deployment.html) describes hosting it standalone under Gunicorn or uWSGI. Administrator and User roles control who can manage pgAdmin users.

## Worth knowing

Server mode is a process that stays running and serves several users, so the host runs an application server such as Gunicorn or uWSGI. Login can go through LDAP, Kerberos, or OAuth2 and OIDC. The project has no paid support and offers a support mailing list.
