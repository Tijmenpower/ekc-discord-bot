const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#FFFC33')
    .setTitle("Command list:",)
    .addFields(
      { name: 'Koning(in)', value: '**overval @landA @LandB**\n ', inline: true },
      { name: 'algemeen', value: '#soon', inline: true },
    )
    .setFooter(`EpicKingdomCommunity © 2021`);
    message.author.send({embed}).catch(e =>{
      if (e) {
      message.channel.send(`#Error#. je DMs zijn dicht .`);
      message.channel.send({embed});
      }
    });
    message.reply("**kijk je Berichten / DMs!**");
  }
module.exports.help = {
  name : "help"
}
