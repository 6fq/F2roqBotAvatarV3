const { Client , Message , MessageEmbed } = require("discord.js")
const axios = require("axios")

module.exports = {
  name: "banner",
  description: "Get a user's avatar banner.",
  aliases: ["بنر"],
  usage: `{prefix}avatar-banner \`[user,id]\``,
  examples: ``,
  type: "general",
  run: async (client, message, args) => {
    
 const user = message.mentions.users.first() || await client.users.fetch(args[0]).catch(() => {}) || message.author;
  if(!user) return message.channel.send(`:rolling_eyes: **Please provide a user mention/ID**`)    

    axios
      .get(`https://discord.com/api/users/${user.id}`, {
    headers: {
    Authorization: `Bot ${client.token}`,
    
    },
    })
    .then((res) => {
    const { banner , accent_color } = res.data;

if(banner){
    const extension = banner.startsWith("a_") ? ".gif" : ".png"
  const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}?size=1024`
  const embed = new MessageEmbed()
  .setColor(message.member.displayHexColor)
  .setDescription(`${user.tag}'s Banner`)
  .setImage(url) 
message.channel.send(embed)
} else {  
  if(accent_color) {
  const embed = new MessageEmbed()
  .setDescription(`${user.tag} doesn't have a banner but the do have a accent color`)
  .setImage(accent_color.url)
     .setColor(accent_color)
   message.channel.send(embed)
  } else 
    return message.channel.send(`${user.tag} does not have a banner not a accent color!`)

}
    });

  
  },
};
