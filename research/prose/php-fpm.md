PHP-FPM is a FastCGI process manager for PHP, built as an optional SAPI in the PHP source tree. The [manual](https://www.php.net/manual/en/install.fpm.php) calls it a primary PHP FastCGI implementation. It runs in the background by default and is enabled with the `--enable-fpm` configure option when PHP is built from source. Its releases are PHP releases, so the PHP branch support dates apply to it.

## Worth knowing

The manual says php-fpm must not be reachable from an untrusted network.
