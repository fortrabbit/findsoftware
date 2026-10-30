Phusion Passenger is a web server and application server that runs Ruby, Python, Node.js and Meteor apps, and supports other languages through generic language support described on the [what is Passenger](https://www.phusionpassenger.com/docs/tutorials/what_is_passenger/) page. It plugs into Nginx or Apache, or runs standalone, and it handles HTTP requests, manages the app processes and serves several applications at the same time. The server core is written in C++, as the [Enterprise page](https://www.phusionpassenger.com/enterprise) states. A Ruby app adds the gem through its Gemfile, and installs also come as APT and YUM packages or through an automated installer. Asynchronous B.V. publishes the project under the MIT license.

## Worth knowing

Passenger runs as a server process that keeps running. The Enterprise page presents rolling restarts, error resistance, mass deployment and a live debugger as premium features.
