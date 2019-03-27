const Command = require('../command.js');

class PurgeCommand extends Command {
    constructor() {
        super("Purge", ['purge'], 1);
    }

    help(msg) {
        return "Use `]purge X` to remove last X messages in the current channel. Based on your permissions, so no sneaky stuff!";
    }

    shortHelp(msg) {
        return "quickly clears messages from a channel";
    }

    runInternal(msg, args) {
        if (isNaN(args[1])) {
            msg.channel.send("How can I remove '" + args[1] + "' messages you smartass?");
            return;
        }

        // check user rights in this channel (needs delete privileges)
        msg.guild.fetchMember(msg.author).then(
            member => {
                if (!member.permissionsIn(msg.channel).has("MANAGE_MESSAGES")) {
                    msg.channel.send("Sorry mate, you need to have permission to delete messages. Nice try though...");
                } else {
                    if (msg.channel.fetchMessages != null) {
                        msg.delete();
                        msg.channel.fetchMessages({ limit: args[1], before: msg.id })
                            .then(messages => msg.channel.bulkDelete(messages))
                            .catch(console.error);
                    }
                }
            }
        ).catch(console.error);
    }
}

module.exports = PurgeCommand;