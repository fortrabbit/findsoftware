OpenReplay records user sessions in a web or mobile app and plays them back as replays. A tracker SDK runs inside the monitored app and sends its data to an OpenReplay server that the operator hosts. The documentation covers a Docker Compose install on a single machine and a Helm chart for Kubernetes, and the Kubernetes chart packages PostgreSQL and Redis that the server needs. The project's own docs also describe deploying from source. The company behind the project, Asayer, Inc, offers OpenReplay Cloud as a hosted alternative to running the server.

## Worth knowing

The monorepo carries several licenses. Most files are under the AGPLv3, some directories are under the MIT license, and the directory named ee/ holds the Enterprise Edition under a separate commercial license. The Docker Compose route is marked as experimental on its deployment page. The README gives a baseline of two vCPUs, 8 GB of RAM and 50 GB of storage for a single virtual machine.
