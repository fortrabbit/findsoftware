SafeLine is a web application firewall and reverse proxy that sits in front of web apps to protect them from attacks and exploits. It is built on Nginx, which the landing page names as the basis of its reverse proxy. The deployment guide runs SafeLine as a set of Docker containers started with Docker Compose, and it serves a web console for configuration.

## Worth knowing

A Pro license is required to run SafeLine on ARM servers, and the free Personal Edition is not supported there. The deployment guide fetches the automatic installer with certificate checking turned off.
