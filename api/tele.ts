import { Telegraf } from 'telegraf';
import { VercelRequest, VercelResponse } from '@vercel/node';

const BOT_TOKEN = process.env.BOT_TOKEN || '';

const bot = new Telegraf(BOT_TOKEN);

// bot.on('message', async (ctx) => {
// 	ctx.sendMessage(ctx.chat.id, ctx.message.text);
// })

export default async (request: VercelRequest, response: VercelResponse) => {
  const { webhook } = request.query;

  if (webhook && !Array.isArray(webhook)) {
    bot.telegram.setWebhook(webhook);
    response.send(`webhook set ${webhook}`);
  } else {
    // bot.handleUpdate(request.body);
    bot.telegram.sendMessage(request.body.message.chat.id, request.body.message.text);
  }

  response.send('telegram bot say Hi.');
};
