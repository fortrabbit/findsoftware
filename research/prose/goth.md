Goth lets a Go web application offer sign-in through outside services. Each service is a provider that implements the package's Provider and Session interfaces, and the README lists the providers the package ships with.

Sessions default to a cookie store from the gorilla/sessions package. The README shows how to replace that store at startup with one that sets its own secret, path, HTTP-only and secure options.

## Worth knowing

The README's default cookie options list the secure flag as off; its example store turns the flag on for a site served over HTTPS.
