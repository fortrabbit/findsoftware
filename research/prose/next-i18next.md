next-i18next adds translations to Next.js apps. It is a thin layer on top of i18next and react-i18next that handles the Next.js-specific wiring, and it supports the App Router, the Pages Router and apps that mix both. Server Components read translations through getT, Client Components through useT, and createProxy handles language detection and routing.

Translation files can sit in the public folder, be bundled with the app through a resource loader, or be loaded by i18next backends such as HTTP or a hosted service. The [project site](https://next.i18next.com/) is the documentation.

## Worth knowing

On serverless platforms such as Vercel or AWS Lambda, files in the public folder are not available on the filesystem at runtime, so the README tells users to load them with a resource loader. In a static export the proxy cannot run, and the options that depend on it do not work.
