Gorush is a server that sends push notifications to iOS, Android and Huawei devices. An application calls the server's web API at `/api/push`, and the server passes the message on to the platform's push service. It is written in Go, is configured with a YAML file and listens on port 8088 by default. Notifications go through a queue handled by multiple workers. Delivery statistics can be kept in memory, in Redis or in one of several embedded stores. Prometheus metrics, a gRPC service and a command line for single messages are also part of the project. The README describes running it in Docker, on Kubernetes or as an AWS Lambda function.

## Worth knowing

Each platform needs its own credentials in the configuration: a Firebase service account key for Android and an APNs key file for iOS. The queue's default is an in-process channel, and the README names NSQ, NATS and Redis streams as queue backends the operator can choose instead.
