Infection mutates PHP source code through changes to its abstract syntax tree and reports the mutations the test suite still passes. The guide names PHPUnit, PhpSpec, Codeception and Testo as the test frameworks it supports, and the PHAR download bundles all of them.

## Worth knowing

Infection needs Xdebug, phpdbg or pcov enabled alongside PHP. The [CI guide](https://infection.github.io/guide/using-with-ci.html) describes using it in a continuous integration server together with other code quality tools.
