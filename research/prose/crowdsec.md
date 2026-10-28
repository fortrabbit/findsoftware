CrowdSec is an open-source security engine that reads system logs and HTTP requests and detects behavior with scenarios. It does not block traffic itself: remediation components, called bouncers, enforce its decisions at the firewall, in web servers or in reverse proxies. The AppSec component adds web application firewall rules to web servers and reverse proxies that have a bouncer installed, and one engine can serve several of them.

CrowdSec, a French company, maintains the project. The engine is installed from packages or a Docker image, and a web console, offered as a hosted service, manages the setup alongside the cscli command-line tool.

## Worth knowing

The console is a hosted service, and its Premium tier is paid. Sharing detected attacks is optional: the introduction says the sharing applies when a user participates, and in return the engine downloads the community blocklist from the central API.
