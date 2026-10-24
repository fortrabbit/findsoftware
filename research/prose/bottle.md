Bottle is a micro web framework for Python that maps requests to functions and renders templates. The framework is distributed as a single module file with no dependencies beyond the Python standard library, so it can be installed with pip or copied into a project directory. The [deployment guide](https://bottlepy.org/docs/dev/deployment.html) describes running an application with the built-in server, under a WSGI server such as gunicorn or cheroot, or as a CGI script. Marcel Hellkamp holds the copyright, and the code and documentation are available under the MIT License.

## Worth knowing

The built-in development server is single-threaded, and the deployment guide points to a multi-threaded WSGI server for production. Releases are tested only against maintained Python versions, so an older interpreter may run the code without being tested.
