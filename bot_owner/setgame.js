 
const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = async (client, message, args) => {
  if (message.author.id == "362983908532420608","362981513777905665") { //job1 en joep hebben alleen perms voor !setgame [status]
    var gametoset = args.join(' ');
    if (!gametoset) gametoset = null;
    client.user.setActivity(gametoset);
    message.reply("The new game has been set!");
    message.react('✅');
    setTimeout(() => message.delete(), 10000)
    } else {
      message.reply("sorry alleen mijn maker kan dit doen. :x:");
    }
}
module.exports.help = {
	name : "setgame"
  }
