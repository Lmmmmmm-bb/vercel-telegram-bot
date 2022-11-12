import { Telegraf } from 'telegraf';

export const bot = new Telegraf(process.env.BOT_TOKEN || '');

bot.on('message', async (ctx) => {
  ctx.reply('Hello Message');
});

bot.launch();
