import { Telegraf } from 'telegraf';

const webhookDomain = `${process.env.BOT_WEBHOOK}?hash=${process.env.BOT_HASH}`;

export const bot = new Telegraf(process.env.BOT_TOKEN || '');

bot.on('text', async (ctx) => {
  const { message } = ctx;
  ctx.reply(`Reply: ${message.text}`);
});

bot.launch({
  webhook: { domain: webhookDomain || '' }
});
