import { Telegraf } from 'telegraf';

export const botToken = process.env.BOT_TOKEN || '';
export const webhookDomain = process.env.BOT_WEBHOOK || '';

export const bot = new Telegraf(botToken);

bot.on('text', async (ctx) => {
  const { message } = ctx;
  ctx.reply(`Reply: ${message.text}`);
});

bot.launch({
  webhook: { domain: webhookDomain }
});
