const { prefix } = require('../../config.json');
 const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'help',
 run: async (client, message) => {
   var args = message.content.split(" ");
   if(args[1]){
     var command = client.commands.find(c => c.name == args[1])
     var embed = new MessageEmbed()
     if(command){
      embed
.setTitle(`command: \`${command.name}\``)
.setColor(message.guild.me.displayHexColor)
.setDescription(`${command.description}`)
.addField(`aliases:`,`${command.aliases}` || `No aliases`)
.addField(`usage:`,`${command.usage.replace(/{prefix}/gi,`${prefix}`).replace(/{member}/gi,`${message.author}`)}`)
.addField(`Example:`,`${command.examples.replace(/{prefix}/gi,`${prefix}`).replace(/{member}/gi,`${message.author}`)}`)
.setFooter(`Requested ${message.author.tag}`, message.author.avatarURL({dynamic: true}))
.setTimestamp();
  
     }else{
 embed.setDescription(`I can't find this command!`)
     }
     message.channel.send(embed);
   }else{
var types = ["image","info"];
let em = new MessageEmbed()
  .setAuthor("Commands of "+client.user.username)
 .setColor(message.guild.member(client.user).roles.highest.hexColor)
  .setThumbnail (message.guild.iconURL({ dynamic: true, size: 2048 }))
.setFooter(`${prefix}help [command]`);
for(let i = 0; i < types.length; i++){
var cmd =  client.commands.filter(c => c.type && c.type == types[i])
if(cmd.size != 0){
em.addField(`__${types[i].toUpperCase()}__:`,`${cmd.map(c => `\`${c.name}\``).join(", ")}`)
}
}
if(message.author.id == message.guild.ownerID){
var OwnerCmd = client.commands.filter(c => c.owner && c.owner == true);
if(OwnerCmd.size != 0){
em.addField(`__OWNER__:`,`${OwnerCmd.map(c => `\`${c.name}\``).join(", ")}`)
}
}
 message.author.send(em).then(() => 
message.react("✅").catch( err => {})
).catch( err => 
message.react("❌").catch( err => {})
)
  }
 }
}
