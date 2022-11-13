import { VercelRequest, VercelResponse } from '@vercel/node';

import { bot } from '../bot';

export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    console.log('Tele Request Body: ', request.body);
    await bot.handleUpdate(request.body);
  } catch(err) {
    return response.status(200).send('Something Error', err, err.message);
  }

  return response.status(200).send('Hi.');
};
