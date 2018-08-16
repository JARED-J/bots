const {MUSIC_BOT_TOKEN, JARED_TOKEN, NATE_TOKEN} = require('../secrets.js');
const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('message', (message) => {
    // GET USERNAME << console.log(message.author.username);

    if (message.author.username === NATE_TOKEN || message.author.username === JARED_TOKEN) {
        let resMessage = '';
        if (message.content) {
            for (let i = 0; i < message.content.length; i++) {
                if (i % 2) resMessage += message.content[i].toUpperCase();
                else resMessage += message.content[i].toLowerCase();
            }
        }
    console.log(resMessage);
    message.channel.sendMessage(`*i'M nAtE* ${resMessage}`);
    // send spongebob picture --> message.channel.sendMessage()
    }
});

bot.login(MUSIC_BOT_TOKEN);
