const { GatewayIntentBits } = require('discord.js');

const botIntents = [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds
];

const commands = {
    getName: 'get-name',
    tellJoke: 'tell-a-joke',
    sad: 'sad',
    lastMsgs: 'last-messages',
};

const prefix = '!';

module.exports = {
    botIntents,
    commands,
    prefix
};

