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
	  { name: `**aanvalers**`, value: `${aanval}`, inline: true },
	  { name: `**verdedigers**`, value: `${op}`, inline: true },
	)
	.addFields(
		{ name: `geaccepteerd door`, value: `${message.author}` },
	  )
	.setFooter(`EpicKingdomCommunity © 2021`)
	.setTimestamp();
	client.channels.cache.get(botSettings.stafflogs).send(stafflogs)
	const meded = new Discord.MessageEmbed()
	.setColor('#FFFC33')
	.setTitle("**Overval**")
	.addField('De overval begint over 10 min',`\n\u200b\n`)
	.addFields(
	  { name: `**aanvalers**`, value: `${aanval}`, inline: true },
	  { name: `**verdedigers**`, value: `${op}`, inline: true },
	)
	.setFooter(`EpicKingdomCommunity © 2021`)
	.setTimestamp();
	client.channels.cache.get(botSettings.mededeling).send(meded)
	client.channels.cache.get(botSettings.mededeling).send(`[ ${aanval} | ${op} ]`)
	setTimeout(() => {
		const meded2 = new Discord.MessageEmbed()
		.setColor('#FFFC33')
		.setTitle("**Overval Begint**")
		.addField(`**De aanvaller mogen nu aanvallen**`,`\nDe oorlog eindig over 30 min`)
		.setFooter(`EpicKingdomCommunity © 2021`)
		.setTimestamp();
		client.channels.cache.get(botSettings.mededeling).send(meded2)
	  }, 600000);
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
	name: "accept",
	category: "Miscelaneous",
	description: "Embeds something",
	usage: "embed [description]"
};
//geel #FFFC33
//rood #90101