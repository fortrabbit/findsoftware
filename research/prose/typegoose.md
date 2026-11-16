Typegoose defines Mongoose models from TypeScript classes. A class carries property decorators, and getModelForClass turns it into a regular Mongoose model whose documents have the class's types, so the schema and the TypeScript type come from one definition.

Typegoose wraps Mongoose and does not change its functions. Mongoose is installed next to Typegoose as a peer dependency. Static methods, instance methods and hooks are written on the class.

## Worth knowing

Each Typegoose release line works with a range of Mongoose versions, and the compatibility page lists them. Mongoose may change types even in patch versions, so an upgrade of one can need a matching upgrade of the other.
