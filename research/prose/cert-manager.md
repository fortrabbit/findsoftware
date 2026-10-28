cert-manager is a controller for Kubernetes and OpenShift clusters that creates TLS certificates for workloads running in the cluster and renews them before they expire. It automates certificates for Ingress with TLS. It is installed into the cluster with static manifests through kubectl apply, through the Helm chart, or with the cmctl command.

The installation guide's section on availability suggests two replicas of the controller and cainjector components, so that a standby pod can take leadership when the active pod is disrupted. The project was created by Jetstack and donated to the Cloud Native Computing Foundation in 2020, and its authors are named in the site footer.

## Worth knowing

cert-manager is a cluster component: it needs a Kubernetes or OpenShift cluster to run, and the Helm route is described for both platforms.
