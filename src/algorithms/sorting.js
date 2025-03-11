const { Markup } = require('telegraf');

const algorithms = {
    'bubble sort': `
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
`,
    'quick sort': `
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = arr.filter((x) => x < pivot);
    const right = arr.filter((x) => x > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));
`
};

function sendSortingAlgorithms(bot, ctx) {
    ctx.reply(
        '🔄 Choose a sorting algorithm:',
        Markup.inlineKeyboard([
            [Markup.button.callback('Bubble Sort', 'bubble_sort')],
            [Markup.button.callback('Quick Sort', 'quick_sort')]
        ])
    );

    bot.action('bubble_sort', async (ctx) => {
        await ctx.reply(`\`\`\`javascript\n${algorithms['bubble sort']}\`\`\``, { parse_mode: 'MarkdownV2' });
    });

    bot.action('quick_sort', async (ctx) => {
        await ctx.reply(`\`\`\`javascript\n${algorithms['quick sort']}\`\`\``, { parse_mode: 'MarkdownV2' });
    });
}

module.exports = { sendSortingAlgorithms };
