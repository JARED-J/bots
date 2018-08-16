const commando = require('discord.js-commando');

class RolesCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roles',
            group: 'random',
            memberName: 'roles',
            description: 'Can give list of server roles, add/remove a role to user or change users role.',
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply(`You rolled a ${roll}`)
    }
}

module.exports = DiceRollCommand;