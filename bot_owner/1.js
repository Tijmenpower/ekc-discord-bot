const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
exports.run = (client, message, args) => {
	if (message.author.id == "630029784302485524") {
		var gametoset = args.join(' ');
		if (!gametoset) gametoset = null;
		client.user.setAvatar(gametoset);
		var Embed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle("U heeft da avatar aangepast")	  
		message.channel.send(Embed);
		} else {
		    var Embed2 = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle("U heeft geen rechten om de avatar aantepassen")
  message.channel.send(Embed2);
		}
};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['np'],
	permLevel: 2,
	ownerOnly: true,
};

exports.help = {
	name: "setavatar",
	category: "Miscelaneous",
	description: "Embeds something",
	usage: "embed [description]",
	ownerOnly: true
};
