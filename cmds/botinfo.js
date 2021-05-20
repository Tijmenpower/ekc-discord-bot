const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    let inline = true
    let botembed = new Discord.MessageEmbed()
    .setColor("#FFFC33")
    .addField("Uptime:", `${uptime}`)
    .addField("Deze bot is special gemaakt voor", `EpicKingdomCommunity`)
    .setFooter(`EpicKingdomCommunity © 2021`)
    
    message.channel.send(botembed);
    message.react('✅');
    setTimeout(() => message.delete(), 10000)

}

module.exports.help = {
  name:"botinfo"
}
