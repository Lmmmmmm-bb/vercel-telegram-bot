import { VercelRequest, VercelResponse } from '@vercel/node';

import { bot } from '../bot';

export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    await bot.handleUpdate(request.body);
  } catch(err) {
    console.log('Something Error', err, err.message);
    return response.status(200).send(`Something Error ${err.message}`);
  }

  return response.status(200).send('Hi.');
};
