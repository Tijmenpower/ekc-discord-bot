const Discord = require("discord.js");
module.exports.run = async(bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle("Command list:",)
    .addFields(
      { name: 'Info/help', value: '#SOON', inline: true },
      { name: 'koning', value: '**!overval @landA[overvallers] @landB[verdedigers]** \n ', inline: true },
      { name: 'Staff', value: '**!accept  @landA[overvallers] @landB[verdedigers]\n **!winnaar @land[winnaar]', inline: true },
    )
    .setFooter(`© Test.bot `);
    message.author.send({embed}).catch(e =>{
      if(e) {
        let Error = new Discord.MessageEmbed()
        .setColor("#C90101")
        .setTitle('Error, Er is een probleem!')
        .setDescription('Uw de is dicht of u heeft de bot geblokkeerd')
        .setFooter(`EpicKingdomCommunity © 2021\nfout code: `)
        message.channel.send(Error);
      }
    });
    message.react('✅');
    setTimeout(() => message.delete(), 10000)
    
  }
module.exports.help = {
  name : "help"
}
