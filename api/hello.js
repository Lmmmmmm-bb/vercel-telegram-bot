import { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
	const { name = 'lmmmmmm' } = req.query;
	return res.send(`Hello ${name}`);
}
