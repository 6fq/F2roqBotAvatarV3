const { MessageAttachment ,Discord } = require('discord.js')
  const editor = require("editor-canvas")
const Canvas = require("canvas")
 
module.exports = {
  name: "circle",
description:"قص الصوره على دائره",
 aliases:["ci"],
   usage: `{prefix}circle \`[Files,url]\``,
examples:`{prefix}circle \n {prefix}circle @mention`,
 type: "image",
  run: async (client, message) => {
    
const imgURL = (message.attachments.first() && message.attachments.first().proxyURL) || (message.mentions.users.first() && message.mentions.users.first().displayAvatarURL({ dynamic: true, format: "png", size: 2048 })) || message.content.split(" ")[1] || message.author.displayAvatarURL({ dynamic: true, format: 'png' , size: 2048 });
  
    avatar = await editor.drawCircle({ image: imgURL ,stroke: "Black" });

  message.channel.send(`***Edit_Photo;***`,{ files: [avatar] });
  
    } 
  }   
