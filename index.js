const { Telegraf } = require('telegraf');
require('dotenv').config();
const commands = require('./src/commands');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Load Commands
commands.setupCommands(bot);

// Launch the bot
bot.launch();
console.log('🚀 Bot is running...');

// Graceful Shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
