const Discord = require("discord.js");
const botSettings = require("..//botsettings.json");
exports.run = (client, message , args) => {
	let aanval = args[0];
	let op = args[1];		
	if(message.member.roles.cache.has(botSettings.staffrole)) {
	const meded = new Discord.MessageEmbed()
	.setColor('#FFFC33')
	.setTitle("**Overval afgelopen**")
	.addField(`oorlog is voorbijenen de winnaar zijn [ ${aanval} ]`,`\n\u200b\n`)
	.setFooter(`EpicKingdomCommunity © 2021`)
	.setTimestamp();
	client.channels.cache.get(botSettings.mededeling).send(meded)
}else {
	let geenperms = new Discord.MessageEmbed()
.setColor("#C90101")
.setTitle('Geen Perms')
.addFields(
	{ name: 'Je bent geen staff omdit command tedoen', value: `${message.author}`},
  )
.setFooter(`EpicKingdomCommunity © 2021`)
message.channel.send(geenperms);
}
	}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 2
};

exports.help = {
	name: "winnaar",
	category: "Miscelaneous",
	description: "Embeds something",
	usage: "embed [description]"
};
//geel #FFFC33
//rood #90101