import { VercelRequest, VercelResponse } from '@vercel/node';

import { bot } from '../bot';

export default async (request: VercelRequest, response: VercelResponse) => {
  console.log('Tele Request Body: ', request.body);

  try {
    console.log('handleUpdate');
    await bot.handleUpdate(request.body);
    console.log('Success handleUpdate');
  } catch(err) {
    console.log('Something Error', err, err.message);
    return response.status(200).send(`Something Error ${err.message}`);
  }
  console.log('Success To Response');

  return response.status(200).send('Hi.');
};
