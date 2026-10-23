tg-archive is a tool that exports Telegram group chats into static websites, preserving chat history like mailing list archives. It uses the Telethon Telegram API client to sync a group's messages into a local SQLite database, then builds a static archive website from a Jinja HTML template. The install step needs Telegram API credentials for a user account, not the Bot API.

## Worth knowing

The README states that the author is no longer maintaining or developing the tool, and that small, clearly documented pull requests can still be reviewed and merged. The README suggests a cron job to sync messages and re-publish the archive periodically.
