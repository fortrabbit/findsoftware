Laravel Envoy is a task runner for PHP projects that executes shell commands on remote servers over SSH. The package is added to a project with Composer as a development dependency, and tasks are written in Blade-style syntax. Once installed, the envoy binary is run from the project's vendor/bin directory, so the commands run from the developer's machine against the servers the tasks name. Taylor Otwell holds the copyright and the project is released under the MIT license; the repository belongs to the Laravel organization on GitHub.

## Worth knowing

The project states that it supports macOS and Linux, and that Windows is possible through WSL2. Its composer.json states a PHP constraint of ^7.2 or ^8.0, while its illuminate and symfony requirements list newer major releases; the record keeps the stated constraint.
