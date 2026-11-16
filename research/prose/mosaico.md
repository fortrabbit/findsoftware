Mosaico is a JavaScript library for editing responsive email templates. The README says Mosaico does not define what can be edited or which styles can change; the template does, so the same editor works with different templates. It is a frontend application that needs a server-side backend for image upload, sending and downloading emails. The [wiki page on serving Mosaico](https://github.com/voidlabs/mosaico/wiki/Serving-Mosaico) lists backends that other people wrote in PHP, Python, .NET and Ruby. The repository builds with npm and grunt, and it also ships a Dockerfile.

## Worth knowing

The GitHub distribution includes a minimal Node.js backend suitable just for tests, so a production setup needs a backend the creator writes or adopts. The live demo on the project's site runs a custom backend and a template that is not part of the open-source distribution.
