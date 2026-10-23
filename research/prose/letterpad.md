Letterpad is a blog publishing engine with an admin dashboard and a server-rendered public website. The admin panel and the client site run as two apps in one repository, on ports 3000 and 3001 by default, and content is stored in SQLite or MySQL. The README lists inline editing on the website, domain mapping, three themes, a multi-user install and integrations with Cloudinary and Unsplash. Installation clones the repository and runs `bun install`, `bun run build`, `bun run seed` and `bun run start`, or runs the Docker image named in the README.

## Worth knowing

The project's website, letterpad.app, runs a hosted publishing platform with member accounts and a Pro plan, which is separate from the open source install. The client app needs a client ID copied from the admin settings.
