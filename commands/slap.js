const Command = require('../command.js');
const UserService = require('../services/user.js');
const SlapService = require('../services/slaps');

class SlapCommand extends Command {

    constructor() {
        super("Slap", ['slap'], 1);
    }

    setBot(bot) {
        super.setBot(bot);
    }

    help(msg) {
        return "]slap {user|me}\n\nThis is a joke 'slap' based on some talk in Aground #suggestions server. @Alchemist requested it, so feel free to send him a slap or two!";
    }

    shortHelp(msg) {
        return "slap a user...mostly @Alchemist";
    }

    runInternal(msg, args) {
        if (msg.channel.id === "664532460029214741" && msg.author.id !== "412352063125717002") {
            msg.channel.send("Sorry, this is a no-slap channel.");
            return;
        }

        let uname = args.slice(1).join(" ");
        switch (uname.toLowerCase()) {
            case "sun":
            case "a sun":
            case "the sun":
                msg.channel.send("Silly you, you tried the slap the sun but your hand got melted!");
                return;
            case "water":
                msg.channel.send("Splash!");
                return;
            case "a stone":
            case "stone":
                msg.channel.send("Ow! " + UserService.getUsernameFromMessage(msg) + " has broken their wrist!" );
                return;
            case "fire":
                msg.channel.send("Yikes! " + UserService.getUsernameFromMessage(msg) + " has burned their hand!" );
                return;
            case "button":
            case "a button":
            case "the button":
            case "nuclear launch button":
            case "launch button":
                msg.channel.send("https://imgflip.com/s/meme/Two-Buttons.jpg");
                return;
            case "yo mama":
            case "your mother":
            case "yo momma":
                msg.channel.send(uname + "'s a nice lady. Why would you slap her? Better give her a call and apologize right now, " +UserService.getUsernameFromMessage(msg)  + "!");
                return;
            case "earth":
            case "ground":
            case "the ground":
            case "unoiks 428c":
                msg.channel.send("THUD!" );
                return;
            case "mars":
            case "the mars":
                msg.channel.send("Aw, that's cute. But you're no Elon Musk, mate!");
                return;
            case "uranus":
            case "the uranus":
                msg.channel.send(UserService.getUsernameFromMessage(msg) + ", you have just slapped uranus. Are you happy now? Are you? ARE YOU???");
                return;
            case "pluto":
            case "the pluto":
                msg.channel.send("Leave pluto out of this, " + UserService.getUsernameFromMessage(msg) + ". It is still getting over being kicked out of the planet club....");
                return;
            case "moon":
            case "the moon":
                msg.channel.send("You slapped the moon until it started to crack. So **this** is what happened to it!");
                return;
            case "car roof":
            case "the car roof":
            case "a car roof":
            case "top of a car":
            case "top of car":
                msg.channel.send("https://i.kym-cdn.com/photos/images/newsfeed/001/387/189/3bf.png");
                return;
            case "air":
            case "the air":
            case "the sky":
            case "sky":
                msg.channel.send("...... seriously?" );
                return;
            case "me":
                msg.channel.send("Oh, " + UserService.getUsernameFromMessage(msg) + ", silly you! You cannot slap yourself. Or can you?");
                return;
            case "an easter egg":
            case "easter egg":
            case "a easter egg":
                msg.channel.send("Oh, real nice. You broke the egg and now there is yolk all over the place. Good job, " + UserService.getUsernameFromMessage(msg) + "!")
                return;
            case "pig":
            case "a pig":
            case "the pig":
                msg.channel.send("DUDE HE'S THE ADMIN");
                return;
            case "snowflake":
            case "the snowflake":
            case "a snowflake":
                msg.channel.send("Did you mean to slap ❄Lybell_❄?");
                return;
            case "BONO BOBO":
            case "bono":
            case "bobo":
            case "bono bobo":
            case "bonobobo":
                if (msg.guild != null && msg.guild.id === "422847864172183562") {
                    var messages = ["think if you start me talk good then i will talk good my promise no slap me",
                        "you do this make me angry to please not do i request forgot i do",
                        "i good i not bad",
                        "i good English you take course of good people slap people",
                        "i not want any disturb you why slap you me",
                        "i cause not trouble",
                        "u cause no trouble",
                        "please talk respectful me",
                        "u not like me"];

                    msg.channel.send(messages[Math.floor(Math.random() * messages.length)]);
                    return;
                }
                break;
            case "a butt":
            case "butt":
            case "ass":
            case "an ass":
            case "buttocks":
                msg.channel.send("...we don't do that anymore.")
                return;
            case "slap":
                msg.channel.send("ERROR 6913: STACK OVERFLOW! HUNTER BOTS HAVE BEEN DISPATCHED! PLEASE LIE DOWN WITH YOUR HANDS BEHIND YOUR HEAD " + UserService.getUsernameFromMessage(msg) + " AND AWAIT THEIR ARRIVAL. THANK YOU FOR YOUR COOPERATION!");
                return;
        }

        if (!msg.guild) {
            msg.channel.send("Uh, if it's only you and me here...nobody will hear your slap.");
            return;
        }

        let user = UserService.lookupUser(msg, uname);
        if (user == null) {
            return;
        }

        SlapService.saveSlap(msg.author.id, user.id);

        if (user.id === '522160089554092041') {
            if (msg.author.id === '500774841738199070') {
                msg.channel.send("Alchemist has tried to slap [UAMT]Bot. [UAMT]Bot evaded. [UAMT]Bot has tried to slap Alchemist. Alchemist teleports. There is an awkward stalemate.");
            } else {
                msg.channel.send(UserService.getUsernameFromMessage(msg) + " has tried to slap [UAMT]Bot. [UAMT]Bot evaded. [UAMT]Bot has slapped " + UserService.getUsernameFromMessage(msg) + " so hard that " + UserService.getUsernameFromMessage(msg) + " fainted!");
            }        
        } else if (user.id === msg.author.id) {
            msg.channel.send(UserService.getUsernameFromMessage(msg) + " really likes to slap themselves. Nudge nudge wink wink.");
        } else if (user.id === '285627467279106049') {
            msg.channel.send(UserService.getUsernameFromMessage(msg) + " tried to slap Unowninator, but he used Spiky Shield. " + UserService.getUsernameFromMessage(msg) + " bleeds a lot! Ouch!");
        } else if (user.id === '551914765534887936') {
            msg.channel.send(UserService.getUsernameFromMessage(msg) + "slaps the_stephenator. Your slap has no effect. The_stephenator slowly turns around and slaps you into a nearby wall.\n\n**You have been stephenated!**");

        } else if (user.id === '483028152130469891') {
            
                msg.channel.send(UserService.getUsernameFromMessage(msg) + " has started to slap Demo Master. The slap is slowly closing in .... and ...\n\nPlease purchase the full version to find out what happened, this content is not available in DEMO.");
           
        } else if (user.id === '500774841738199070') {
                            msg.channel.send(UserService.getUsernameFromMessage(msg) + " has tried to slap Alchemist. Alchemist teleported behind " + UserService.getUsernameFromMessage(msg) + ". Alchemist used a magic hand to slap " + UserService.getUsernameFromMessage(msg) + " into the next week.");
            
        } else if (user.id === '159985870458322944' && msg.author.id === '500774841738199070') {
          msg.channel.send(UserService.getUsernameFromMessage(msg) + " has beat MEE6 mercilessly, then threw him in the trash can.");
        } else if ((user.id === '352201261971668992')) {
          msg.channel.send("DUDE HE'S THE ADMIN");
        } else {
            if (msg.author.id === '483028152130469891') {
                msg.channel.send(UserService.getUsernameFromMessage(msg) + " has used his telekiness to make " + UserService.getUsername(user) + " slap himself repeatedly! OUCH!");
            } else {
                msg.channel.send(UserService.getUsernameFromMessage(msg) + " has just slapped " + UserService.getUsername(user) + "!");
            }
        }
    }
}

module.exports = SlapCommand;
