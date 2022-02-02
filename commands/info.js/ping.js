const { MessageEmbed } = require("discord.js")
const discord = require("discord.js")
const { prefix } = require('../../config.json'); 

module.exports = {
  name: "ping",
  description: "Test the bots response time.",
 aliases:[""],
 usage: `{prefix}ping`,
examples:`{prefix}ping`,
 type: "info",

  run: async (client, message) => {
var ping = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ws.ping)}`

    message.channel
      .send({ embed: { description: "Loading...", color: "DARK_BUT_NOT_BLACK" } })
      .then((m) => {

        let embed = new discord.MessageEmbed()
.setDescription(`\`Speed message ${Date.now() - message.createdTimestamp}ms\`\n\`Discord Api ${api}ms\`\n\`ping Bot ${ping}ms\``)
      .setColor(message.guild.me.displayHexColor);
        m.edit(embed).catch((e) => message.channel.send(e));
      });
  },
};
