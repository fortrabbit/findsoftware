Schnack is a commenting system for static websites, written in JavaScript. The server keeps comments in SQLite, and a page embeds a comment thread with a script tag that points at the server. Site owners approve or reject comments, or trust or block users, in a moderation interface that appears in the comment section for admins. Commenters sign in with third-party accounts through OAuth, so the site owner configures an OAuth app for each provider.

The [project site](https://schnack.cool/) describes two ways to install: cloning the repository and running it with Node.js, or building a Docker image from it. The README also gives an npm route through the `npm init schnack` command. The README calls Schnack a Disqus-like system and names Commento and Isso among projects that do almost the same thing.

## Worth knowing

Plugins for OAuth login and for notifications are separate npm packages, and the schnack-plugins repository collects them. Notifications can go to the site owner by web push, and plugins send them to other channels.
