Filament is a set of Laravel packages for building admin panels and applications from components such as tables, forms, infolists, actions, notifications and widgets. It is developed as one monorepo and runs on top of Livewire, Alpine.js and Tailwind CSS, with Laravel as the host application. Its install command sets up a panel, served at /admin by default. Dan Harrin, Ryan Chandler and the Filament core team maintain it.

## Worth knowing

Outside the local environment, the user model has to implement Filament's user authorization, or nobody can sign in to the panel. Production also needs cached components and icons, an upgrade command after Composer's autoload dump, and a Node build for the Tailwind assets. Official themes are paid add-ons, and the plugin directory lists third-party plugins with paid licenses.
