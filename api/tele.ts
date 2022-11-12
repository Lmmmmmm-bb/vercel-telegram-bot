import { VercelRequest, VercelResponse } from '@vercel/node';
import { bot } from '../bot';

export default async (request: VercelRequest, response: VercelResponse) => {
  // bot.telegram.setWebhook('https://1d1d-119-123-207-235.jp.ngrok.io/api/tele');
  await bot.handleUpdate(request.body);
  // bot.telegram.sendMessage(request.body.message.chat.id, `${request.body.message.text}123`);

  response.send('telegram bot say Hi.');
};
