const { Markup } = require('telegraf');

const algorithms = {
    'linear search': `
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5], 3));
`,
    'binary search': `
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        target < arr[mid] ? right = mid - 1 : left = mid + 1;
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 3));
`
};

function sendSearchingAlgorithms(bot, ctx) {
    ctx.reply(
        '🔍 Choose a searching algorithm:',
        Markup.inlineKeyboard([
            [Markup.button.callback('Linear Search', 'linear_search')],
            [Markup.button.callback('Binary Search', 'binary_search')]
        ])
    );

    // Use `bot.action()` instead of `ctx.telegram.action()`
    bot.action('linear_search', async (ctx) => {
        await ctx.reply(`\`\`\`javascript\n${algorithms['linear search']}\`\`\``, { parse_mode: 'MarkdownV2' });
    });

    bot.action('binary_search', async (ctx) => {
        await ctx.reply(`\`\`\`javascript\n${algorithms['binary search']}\`\`\``, { parse_mode: 'MarkdownV2' });
    });
}

module.exports = { sendSearchingAlgorithms };
