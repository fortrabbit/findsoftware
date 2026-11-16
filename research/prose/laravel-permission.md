Laravel Permission manages roles and permissions for a Laravel application's users in the database, and registers the permissions with Laravel's gate. The [documentation](https://spatie.be/docs/laravel-permission/v8/introduction) describes a role as a named group of permissions that can be assigned to users or other models, and says every guard has its own set of permissions and roles. The README names Bouncer among its alternatives.

## Worth knowing

The prerequisites page says the User model must not have a role or roles property or method, and must implement Laravel's Authorizable contract.
