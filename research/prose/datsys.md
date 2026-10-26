Datsys is a web application framework for Clojure and ClojureScript. Its README describes it as built from four libraries: Datsync, which syncs a DataScript database in the browser with a Datomic database on the server; Datview, for turning query results into UI components; Datreactor, for event handling; and Datspec, for protocols and specs. The parts are assembled as a system with Stuart Sierra's Component library, and the README says any of them can be used without the others.

The project is started from a Leiningen REPL with `(run)`, which starts the system and serves a browser app on a local port.

## Worth knowing

The repository has no tagged release, and its newest commit on the default branch is from 2017. The README describes its Datomic Pro setup as partial and points to the wiki for the rest.
