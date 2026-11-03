Errbit is a self-hosted error catcher. Applications send their errors to it through the Airbrake API, so an app that uses the airbrake gem can point that gem at an Errbit server. Its web UI lists the apps that report to it and the errors each one collects. The server stores its data in MongoDB and runs behind Puma, which a reverse proxy such as Nginx or Apache can front. The project documents installs from a git clone, a Docker image, Heroku, Dokku and Kubernetes.

## Worth knowing

The deployment notes say official support is limited to Heroku, and the other routes are documented as ways to deploy Errbit.
