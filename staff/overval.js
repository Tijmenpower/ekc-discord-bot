const Discord = require("discord.js");
const botSettings = require("..//botsettings.json");
exports.run = (client, message , args) => {
	let aanval = args[0];
	let op = args[1];		
	if(message.member.roles.cache.has(botSettings.koningrole)) {
const stafflogs = new Discord.MessageEmbed()
	.setColor('#FFFC33')
	.setTitle("**Overval**")
	.addFields(
	  { name: `**aanvallers**`, value: `${aanval}`, inline: true },
	  { name: `**verdedigers**`, value: `${op}`, inline: true },
	)
	.addFields(
		{ name: `verzonden door leider`, value: `${message.author}` },
		{ name: `Type !accept @land-aanvallers @land-verdedigers`, value: `om de overval teaccepteren`},
	  )
	.setFooter(`EpicKingdomCommunity © 2021`)
	.setTimestamp();
	client.channels.cache.get(botSettings.stafflogs).send(stafflogs)
let contact = new Discord.MessageEmbed()
.setColor("#FFFC33")
.setTitle('Overval')
.addFields(
	{ name: `een land voert een overval uit`, value: `#staff-overvals-logs`},
	{ name: `Overval verklaard door`, value: `${message.author}`},
	{ name: `Type !accept @land-aanvallers @land-verdedigers`, value: `om de overval teaccepteren`},
  )
.setFooter(`EpicKingdomCommunity © 2021`)
.setTimestamp();
message.guild.roles.cache.get(botSettings.staffrole).members.forEach(member => member.send(contact));
}else {
	let geenperms = new Discord.MessageEmbed()
.setColor("#C90101")
.setTitle('Geen Perms')
.addFields(
	{ name: 'Je bent geen leider van een land', value: `${message.author}`},
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
	name: "overval",
	category: "Miscelaneous",
	description: "Embeds something",
	usage: "embed [description]"
};
//geel #FFFC33
//rood #90101
