'use strict';
const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**Sorry maar je hebt geen perms!**");
  if(!args[0] || args[0 == "help"]) return message.reply(`**doe !setprefix om je prefix te veranderen**`);

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });const ayy = bot.emojis.cache.find(emoji => emoji.name === "ayy");

  var Embed = new Discord.MessageEmbed()
  .setColor('#FFFC33')
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(Embed);

}

module.exports.help = {
  name: "setprefix"
}