 
const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = async (client, message, args) => {
  if (message.author.id == "630029784302485524") {
    var gametoset = args.join(' ');
    if (!gametoset) gametoset = null;
    client.user.setActivity(gametoset);
    message.reply("The new game has been set!");
    } else {
      message.reply("sorry alleen mijn maker kan dit doen. :x:");
    }
}
module.exports.help = {
	name : "setgame"
  }