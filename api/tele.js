import { Telegraf } from "telegraf";

const BOT_TOKEN = process.env.BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

bot.on('message', async (ctx) => {
	ctx.reply(ctx.message.text);
})

export default async (request, response) => {
	const { webhook } = request.query;

	if (webhook) {
		bot.telegram.setWebhook(webhook);
		response.send(`webhook set ${webhook}`);
	}
}
