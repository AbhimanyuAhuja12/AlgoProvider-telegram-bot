const { Markup } = require('telegraf');
const algorithms = require('./algorithms');

function setupCommands(bot) {
    // Start Command
    bot.start((ctx) => {
        ctx.reply(
            '👋 Welcome! Choose the type of algorithm you want to explore:',
            Markup.keyboard([
                ['🔍 Searching', '🔄 Sorting'],
                ['🌐 Traversal', '❓ Help']
            ]).resize()
        );
    });

    // Help Command
    bot.help((ctx) => {
        ctx.reply('📚 Select an algorithm type and I\'ll provide the code.');
    });

    // Handle Algorithm Types
    bot.hears('🔍 Searching', (ctx) => algorithms.sendSearchingAlgorithms(bot, ctx)); // Pass `bot` and `ctx`
bot.hears('🔄 Sorting', (ctx) => algorithms.sendSortingAlgorithms(bot, ctx));     // Pass `bot` and `ctx`
bot.hears('🌐 Traversal', (ctx) => algorithms.sendTraversalAlgorithms(bot, ctx)); // Pass `bot` and `ctx`


    // Fallback for unknown commands
    bot.on('text', (ctx) => {
        ctx.reply('❓ I didn\'t understand that. Try using /start or /help.');
    });
}

module.exports = { setupCommands };
