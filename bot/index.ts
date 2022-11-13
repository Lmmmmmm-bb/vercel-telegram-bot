import { Telegraf } from 'telegraf';

export const bot = new Telegraf(process.env.BOT_TOKEN || '');

bot.on('text', async (ctx) => {
  const { message } = ctx;
  ctx.reply(`Reply: ${message.text}`);
});

bot.launch({
  webhook: { domain: process.env.BOT_WEBHOOK || '' }
});
