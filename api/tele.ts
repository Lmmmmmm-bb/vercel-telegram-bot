import { VercelRequest, VercelResponse } from '@vercel/node';

import { bot } from '../bot';

export default async (request: VercelRequest, response: VercelResponse) => {
  const { hash } = request.query;
  hash === process.env.BOT_HASH && await bot.handleUpdate(request.body);

  return response.send('telegram bot say Hi.');
};
