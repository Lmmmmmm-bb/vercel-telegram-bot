export default (request, response) => {
	const { name = 'lmmmmmm' } = request.query;
	return response.send(`Hello ${name}`);
}
