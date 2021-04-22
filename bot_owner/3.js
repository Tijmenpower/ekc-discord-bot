const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
exports.run = (client, message, args) => {
	if (message.author.id == "630029784302485524") {
		var gametoset = args.join(' ');
		if (!gametoset) gametoset = null;
		client.user.setUsername(gametoset);
		message.reply("kijk of je bot naam is verandert ? en ander w8 een tijdje");
		} else {
		  message.reply("sorry alleen mijn maker kan dit doen. :x:");
		}
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 2,
	ownerOnly: true,
};

exports.help = {
	name: "setnaam",
	category: "Miscelaneous",
	description: "Embeds something",
	usage: "embed [description]",
	ownerOnly: true
};