const { Telegraf } = require('telegraf');

const TOKEN = '5896354843:AAHwjJ6VAgNOKOZ_Cxpmvyiof8YRz_7sYig'
const web_link = 'https://stunning-rolypoly-c38974.netlify.app/' 

const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.reply('Welcome Fucking Slaaaave', 
{reply_markup:{keyboard:[[{text:'Web App', web_app: {url: web_link}}]]}}));

bot.launch();