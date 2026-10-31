Ceph is a distributed storage system that serves object, block and file interfaces from one cluster. The [Object Gateway](https://docs.ceph.com/en/umbrella/radosgw/) is an HTTP server that gives applications an interface compatible with a large subset of the Amazon S3 API and of the OpenStack Swift API. The Ceph Dashboard is a web management and monitoring tool that runs as a Ceph Manager Daemon module.

The [installation guide](https://docs.ceph.com/en/umbrella/install/) names cephadm as the tool that installs and manages a cluster, and Rook as the way to run Ceph on Kubernetes. Cephadm needs Python 3, systemd and Podman or Docker. The project is maintained by the Ceph Foundation, which operates under the Linux Foundation.

## Worth knowing

The repository on GitHub has tags but no releases, so the current stable line comes from the project's [release index](https://docs.ceph.com/en/umbrella/releases/). In that scheme the x.0 releases are development versions and the x.1 releases are release candidates, and only the x.2 releases are stable. Most of the code is under the LGPL, and some files carry other licenses.
