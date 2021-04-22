const botSettings = require("./botsettings");
const Discord = require("discord.js");
const fs = require("fs");
let cooldown = new Set();
let cdseconds = 5;

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("Oepsie, er zijn nog geen commands!");
        return;
    }
    jsfiles.forEach((f, i) => { 
        let props = require(`./cmds/${f}`);
        bot.commands.set(props.help.name, props);
    });
});
fs.readdir("./bot_owner/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
      return;
  }
  jsfiles.forEach((f, i) => { 
      let props = require(`./bot_owner/${f}`);
      bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./staff/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        return;
    }
    jsfiles.forEach((f, i) => { 
        let props = require(`./staff/${f}`);
        bot.commands.set(props.help.name, props);
    });
});
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botSettings.prefix
    };
  }
let prefix = prefixes[message.guild.id].prefixes;
if(!message.content.startsWith(prefix)) return;
if(cooldown.has(message.author.id)){
  message.delete();
  return message.reply("You have to wait 5 seconds between commands.")
}
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);

setTimeout(() => {
  cooldown.delete(message.author.id)
}, cdseconds * 1000);
});
bot.on("ready", () => {
  bot.user.setStatus("DND")
  bot.user.setActivity("EpicKindomCommunity","test");
});
bot.login(botSettings.token);

//geel #FFFC33
//rood #C90101