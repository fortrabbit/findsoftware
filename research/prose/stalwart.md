Stalwart is a mail and collaboration server written in Rust. It serves SMTP, IMAP, JMAP, CalDAV, CardDAV and WebDAV. A website can post its contact form straight to the server's [form endpoint](https://stalw.art/docs/http/form-submission/), which delivers each submission as an email. The server runs as a service on Linux, macOS, FreeBSD and Windows, or from its Docker image, and keeps its data in a configured store such as RocksDB, PostgreSQL or MySQL.

## Worth knowing

The community edition is licensed under AGPL-3.0. The Enterprise edition is sold per mailbox under a separate license, and the server reverts to the community edition when a subscription ends. A managed service is planned but not yet offered.
