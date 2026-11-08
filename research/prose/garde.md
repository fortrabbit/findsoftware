garde is a validation library for Rust. A struct or enum takes the Validate derive, and each field carries garde attributes that name its rules, such as length, range, email or a custom function. Calling validate on a value reports the failed rules with their field paths. Error messages can be customized by implementing an I18n trait. The README names integration crates for the axum and actix-web web frameworks.

The README says garde is heavily inspired by the validator crate and is essentially a full rewrite of it.
