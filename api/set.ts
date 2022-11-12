import { VercelRequest, VercelResponse } from '@vercel/node';

import { bot } from '../bot';

export default async (request: VercelRequest, response: VercelResponse) => {
  const { wb } = request.query;

  if (wb && !Array.isArray(wb)) {
    bot.telegram.setWebhook(wb);
    response.send(`Set Webhook Success! ${wb}`);
  }

  response.send(bot.telegram.getWebhookInfo());
};
