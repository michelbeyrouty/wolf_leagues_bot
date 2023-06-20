const { Client } = require('discord.js');
const { botIntents, prefix, commands } = require('./config/config');
const config = require('./config/default');

const client = new Client({
    intents: botIntents,
    partials: ['CHANNEL', 'MESSAGE'],
});

client.on('ready', () => {
    console.log('Logged in as ' + client.user.tag);
});

client.on('messageCreate', (msg) => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;

    const userCmd = msg.content.slice(prefix.length);

    if (userCmd === commands.getName) {
        msg.reply("Your discord username is " + msg.author.username);
    } else {
        msg.reply('I do not understand your command');
    }
});

client.login(config.DISCORD_TOKEN);

