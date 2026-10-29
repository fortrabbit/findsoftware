getssl is a bash script that obtains SSL certificates from Let's Encrypt's ACME servers and renews them when they are due. It can run on the server that uses the certificate, on a desktop computer or on another machine, and it can copy the tokens and certificates to remote servers over ssh, sftp or ftp. After a new certificate is obtained, it can reload services such as Apache, nginx or Postfix.

The script is installed by downloading it, cloning the repository, running the Makefile from a release tarball, or installing an RPM or DEB package from a release. Arch Linux has AUR packages. The README describes running it from a daily cron job, which renews certificates when required.

## Worth knowing

The project has no website of its own. The README points to the [GitHub wiki](https://github.com/srvrco/getssl/wiki) for additional help pages.

The README says the script runs on Unix-like machines, including BSD, most Linux distributions and macOS.
