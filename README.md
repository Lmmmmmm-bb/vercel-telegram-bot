# Vercel Telegram bot

Deploy your Telegram bot to Vercel.

[![GitHub license](https://img.shields.io/github/license/Lmmmmmm-bb/vercel-telegram-bot)](https://github.com/Lmmmmmm-bb/vercel-telegram-bot/blob/main/LICENSE)

> It is strongly recommended to use **degit** to clone this repository. It will delete **README.md** and **degit.json** file when clone.

# Before Develop

1. Copy `.env.example` to `.env`. **Do not upload `.env` file to your repository**.
2. Setup bot token, webhook domain & path.

# Get started

1. Clone the template repo & Initialize git repository.

```bash
> degit git@github.com:Lmmmmmm-bb/vercel-telegram-bot.git my-project
> git init
```

2. Install Dependencies.

```bash
> pnpm i
```

3. Start dev server & Set your bot webhook to develop server.

```bash
> pnpm serve # open dev serve by ngrok
> pnpm start
```

# Deploy to Vercel

1. Setup Vercel project.
2. Setup your project **Environment Variables** in Vercel. Same as your `.env` file.
3. After deploy success, set bot webhook url.
