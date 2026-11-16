Typia is a TypeScript transformer. A project calls a function such as `typia.is<T>()` or `typia.assert<T>()` with a type argument, and the build replaces the call with a checker written for that type, so the validators need no separate schema and no reflection at runtime. The same transform produces JSON schemas, typed stringify and parse functions, Protocol Buffer encoders and decoders, and random data for a type.

Its [homepage](https://typia.io/) contrasts this with validators that need a separate schema object, such as Zod, io-ts and class-validator.

## Worth knowing

The transform runs when the project compiles, so the stock `tsc`, `ts-node` and `tsx` do not apply it. The [setup guide](https://typia.io/docs/setup/) covers `ttsc` and `ttsx`, and a legacy path for projects pinned to earlier releases.
