PHP-JWT encodes and decodes JSON Web Tokens in PHP. Encoding signs a payload with a key and an algorithm. Decoding takes a key object that names the algorithm the application expects, verifies the signature and the time claims, and returns the payload as a stdClass object. Keys can come from PEM strings, from a JSON Web Key Set, or from a cached key set that fetches the set from a URL and refreshes the cache when a key ID is unknown.

Decoding throws a different exception for an invalid key, an unsupported algorithm, a bad signature, a token used too early or too late, and a malformed token.

## Worth knowing

The README says the application must name the algorithms it accepts, and that decoding header values before verifying the token is not supported. The EdDSA examples use libsodium. PS256 needs phpseclib installed separately, because the OpenSSL extension does not support it.
