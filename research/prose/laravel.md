Laravel is a PHP framework for web applications, covering routing, database access through an ORM, Blade templates, queued jobs and a task scheduler. Applications are created with the Laravel installer or with Composer, and the web server's document root is the `public` folder. Queue workers, Reverb and Octane each need a process monitor when used, and the scheduler needs a single cron entry on the server. Frontends beyond Blade, such as React, Vue, Svelte or Livewire, come as starter kits. The company behind the framework sells hosted and commercial products around it, including Laravel Cloud and Forge.

## Worth knowing

Laravel needs writable `storage` and `bootstrap/cache` directories. MongoDB support comes from a package that MongoDB maintains, not from the framework itself.
