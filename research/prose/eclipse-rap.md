Eclipse RAP, the Remote Application Platform, lets a developer write a browser user interface in Java against an SWT-style API. The project's homepage says RAP works with OSGi and Java EE and runs in any servlet container, and the [developer's guide](https://www.eclipse.org/rap/developers-guide/) describes two setups: an OSGi application built against a RAP target platform in the Eclipse IDE, and RWT used as a plain Java library inside a web application's WEB-INF/lib folder.

The Eclipse Foundation AISBL makes the project available.

## Worth knowing

The default mode is compatible with Java EE. The SWT compatibility mode starts a separate UI thread for each user session, and the developer's guide says code in that thread cannot directly reach Java EE transaction or security contexts.
