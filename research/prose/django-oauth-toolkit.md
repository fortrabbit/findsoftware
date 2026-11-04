Django OAuth Toolkit makes an existing Django project an OAuth 2.0 authorization server, so tokens are issued and managed inside the project rather than by a separate service. It provides the endpoints, models and token logic for that, and it makes extensive use of OAuthLib. The toolkit can also act as a resource server that protects a Django or Django REST Framework API.

## Worth knowing

OpenID Connect support is part of the toolkit but is not enabled by default. It needs additional configuration before it runs.
