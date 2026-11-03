Pontoon is Mozilla's translation management system, a web application in which a community of localizers translates, reviews and manages strings for Mozilla's products and websites. It pulls strings from Git and Mercurial repositories and writes translations back to them. Its REST API, built on Django REST Framework, serves translation data and accepts uploads of translations, pretranslations and suggestions. The README describes Mozilla's own deployment as a Docker image on Google Cloud Platform, which anyone hosting an instance may need to adapt for another platform. Users hold a contributor, translator or team manager role, and the admin console is open only to administrators.

## Worth knowing

Sign-in can use third-party providers, Mozilla Accounts, GitHub, GitLab, Google or Keycloak, each set up as an OAuth application. The developer setup is for development only; the [deployment guide](https://pontoon.mozilla.org/docs/dev/deployment/) covers production.
