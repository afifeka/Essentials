const Discord = require("discord.js");

const TOKEN = ("NDE5Njg3NTQ0ODg4NzU0MTc5.DYEReg.srlu48UQ64904e6vPWh69O9JNF4");
const PREFIX = ("jn!");

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready")
    bot.user.setGame("Coding By Afif");
    bot.user.setStatus("idle")
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
  

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "ping":
            message.channel.sendMessage(message.client.ping)
        break; 
        
        
      case "help":
        var embed = new Discord.RichEmbed()
               .addField("📝Help📝","📚Commands📚", true)
               .addField("1. Use **jn!ping** To See Your Pung","2. Use **jn!info** To Know Info About Bot Jones", true)
               .addField("📰MoodBooster📰","1. **jn!tableflip** -> (╯°□°)╯  ︵  ┻━┻ ", true) 
        message.channel. sendEmbed(embed)
        break;
        
      case "info":
        var embed = new Discord.RichEmbed()
               .addField("📃Info📃", "Creator : 『AfifGaming』#9369", true)
        message.channel.sendEmbed(embed)
        break; 
        
      case "tableflip":
        message.channel.sendMessage("(╯°□°)╯  ︵  ┻━┻ ")
        break; 
    }
});

bot.login(TOKEN);
