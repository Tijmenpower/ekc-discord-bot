const Discord = require("discord.js");
exports.run = (client, message , args) => {
	let aanval = args[0];
	let op = args[1];		
	if(message.member.roles.cache.has('834423056474439750')) {
const stafflogs = new Discord.MessageEmbed()
	.setColor('#FFFC33')
	.setTitle("**Overval**")
	.addFields(
	  { name: `**aanvalers**`, value: `${aanval}`, inline: true },
	  { name: `**verdedigers**`, value: `${op}`, inline: true },
	)
	.addFields(
		{ name: `verzonden door leider`, value: `${message.author}` },
	  )
	.setFooter(`EpicKingdomCommunity © 2021`)
	.setTimestamp();
	client.channels.cache.get("834037069931741215").send(stafflogs)
let contact = new Discord.MessageEmbed()
.setColor("#FFFC33")
.setTitle('Overval')
.addFields(
	{ name: `een land voert een overval uit`, value: `#staff-overvals-logs`},
	{ name: `Overval verklaard door`, value: `${message.author}`},
  )
.setFooter(`EpicKingdomCommunity © 2021`)
.setTimestamp();
message.guild.roles.cache.get("834388352341377054").members.forEach(member => member.send(contact));
const meded = new Discord.MessageEmbed()
	.setColor('#FFFC33')
	.setTitle("**Overval**")
	.addFields(
	  { name: `een land voert een overval uit`, value: `door leider ${message.author}` },
	  { name: `**aanvalers**`, value: `${aanval}`, inline: true },
	  { name: `**verdedigers**`, value: `${op}`, inline: true },
	)
	.setFooter(`EpicKingdomCommunity © 2021`)
	.setTimestamp();
	client.channels.cache.get("834458920717516862").send(meded)
        client.channels.cache.get("834458920717516862").send(`${aanval} | ${op}`)
}else {
	let geenperms = new Discord.MessageEmbed()
.setColor("#C90101")
.setTitle('Geen Perms')
.addFields(
	{ name: 'je bent geen leider van een land', value: `${message.author}`},
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

// `${aanvl}`
