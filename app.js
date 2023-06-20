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

client.on('messageCreate', async (msg) => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;

    const userCmd = msg.content.slice(prefix.length);

    if (userCmd === commands.getName) {
        msg.reply("Your discord username is " + msg.author.username);
    } else if (userCmd === commands.tellJoke) {
        msg.channel.send('HTML bla bla bla');
    } else if (userCmd === commands.sad) {
        msg.reply("Don't be sad! This is not the end of the road");
    } else if (userCmd === commands.lastMsgs) {
        const reply = await getLastMsgs(msg);
        msg.reply(reply.join("\n"));
    } else {
        msg.reply('I do not understand your command');
    }
});

const getLastMsgs = async (msg) => {
    // fetching the last 10 messages
    const res = await msg.channel.messages.fetch({ limit: 10 });

    const lastTenMsgs = res.map((message) => {
        return message.content;
    });

    console.log(lastTenMsgs)

    return lastTenMsgs;
};

client.login(config.DISCORD_TOKEN);

