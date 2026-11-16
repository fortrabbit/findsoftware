Legend-State is a state library for JavaScript applications with a sync system built in. Values live in observables: get reads one, set writes one, and observers and computed observables re-run when the values they read change. The React bindings ship in the same package as the core, so components read observables through the React helpers the package provides.

A sync plugin connects an observable to a backend such as Keel, Supabase, Firebase or TanStack Query, or to a generic fetch call. A persistence plugin keeps the value in local storage, IndexedDB, MMKV or AsyncStorage. Local changes apply first and are retried until the backend accepts them. The README says Jay Meistrich created and maintains it with Legend and Bravely.

## Worth knowing

The documentation describes a newer major version that is still in beta, while the npm package's stable release is the older line. Legend Kit, a separate product sold as premium tools by subscription, is not part of this library.
