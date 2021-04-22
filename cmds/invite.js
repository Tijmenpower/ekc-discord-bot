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
    .addField("Bot Invite", `https://discord.com/api/oauth2/authorize?client_id=781532992601718784&permissions=3820485952&scope=bot`, inline)
    .addField("Uptime:", `${uptime}`)
    .addField("Deze bot is special gemaakt voor", `EpicKingdomCommunity`)
    .setFooter(`EpicKingdomCommunity © 2021`)
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"invite"
}