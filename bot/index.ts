import { Telegraf } from 'telegraf';

import { botToken, webhook } from './config';

export const bot = new Telegraf(botToken);

bot.on('text', async (ctx) => {
  const { message } = ctx;
  await ctx.reply(`Reply: ${message.text}`);
});

bot.launch({ webhook });
