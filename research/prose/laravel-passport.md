Laravel Passport is a Laravel package that adds an OAuth2 server to an application. The [Laravel documentation](https://laravel.com/framework/docs/passport) says Passport is built on top of the League OAuth2 server, and covers the authorization code grant with PKCE, the device authorization grant, the password and implicit grants, the client credentials grant and personal access tokens. It describes the install command as creating the encryption keys access tokens need.

## Worth knowing

The documentation presents Passport and Laravel Sanctum as the two options. It says an application that needs OAuth2 should use Passport, while single-page and mobile applications and plain API tokens fit Sanctum, which does not support OAuth2.

The deployment section says the encryption keys are usually kept out of source control and must be generated the first time Passport is deployed.
