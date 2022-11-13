import { VercelRequest, VercelResponse } from '@vercel/node';

import { bot } from '../bot';

export default async (request: VercelRequest, response: VercelResponse) => {
  console.log('Tele Request Body: ', request.body);
  await bot.handleUpdate(request.body);

  return response.status(200).send('Hi.');
};
