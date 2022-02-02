const db = require("quick.db")
const moment = require("moment");
const fs = require("fs");
const DIG = require("discord-image-generation");
const { MessageEmbed , Discord } = require("discord.js")
const { MessageAttachment } = require("discord.js")


module.exports = {
  name: "sepia",
description: "يحول الصوره ",
 aliases:[""],
 usage: `{prefix}sepia \`[Files,url,mention]\``,
examples:``,
 type: "image",
  run: async (client, message , Discord) => {
   const imgURL = (message.attachments.first() && message.attachments.first().proxyURL) || (message.mentions.users.first() && message.mentions.users.first().displayAvatarURL({ dynamic: true, format: "png", size: 2048 })) || message.content.split(" ")[1] || message.author.displayAvatarURL({ dynamic: true, format: 'png' , size: 2048 });
  let img = await new DIG.Sepia().getImage(imgURL);
    let attach = new MessageAttachment(img, "Sepia.png");
    message.channel.send("***Sepia;***",attach)
 }
}
