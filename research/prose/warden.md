Warden is a command-line tool that starts Docker-based local development environments for web projects. Each project runs in its own containers, and a few shared global services route requests into the correct environment, so several environments can run at once without port conflicts. Traefik terminates SSL with certificates Warden issues for the local development domains, and Dnsmasq resolves `.test` domains without editing hosts files.

Environment types cover Drupal, Laravel, Magento 1 and 2, Shopware, Symfony and WordPress, and a custom environment can be defined per project. The tool runs on macOS and Linux, and on Windows through WSL2.

## Worth knowing

Warden needs Docker and Docker Compose on the developer's machine. On macOS, Mutagen handles file sync for environments that use sync sessions. The environments pull their container images from Docker Hub, so they depend on those published images.
