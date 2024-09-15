require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const slash = require('./src/Handler/comandos');
const eventos = require('./src/Handler/evento');
const client = new Client({
    intents: [
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessageReactions
    ],
    partials: []
});

module.exports = client;

client.login(process.env.bot);

slash.run(client);
eventos.run(client);