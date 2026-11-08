EmailValidator is a PHP library that checks email addresses against RFC-based rules and a set of extra strategies. A validator takes one strategy per check: the RFC check, a stricter check that fails on RFC warnings, a DNS check for mail-server records, a combinator that runs several strategies with a logical AND, a Message-ID check and a spoof check. Developers can implement their own strategy. It installs with Composer.

## Worth knowing

The DNS check shows that a domain accepts mail, not that a particular mailbox exists. The spoof check and the DNS check need the PHP Intl extension. The project's supported-versions table marks the 3.x line and older as end of life.
