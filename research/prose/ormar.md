ormar is an async object-relational mapper for Python. Its models are pydantic models, so the same class validates data and can serve as a request or response model in a FastAPI app. It is built on SQLAlchemy core for query building, and a translation tool for existing SQLAlchemy models is documented. The [documentation](https://ormar-orm.github.io/ormar/latest/) covers models, queries, relations and use with FastAPI.

## Worth knowing

The README says the project is still under development and recommends pinning the version. Its versioning note says breaking changes bump the minor number, so a minor update within the 0.x line can carry breaking changes.
