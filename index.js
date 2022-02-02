const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('<meta http-equiv="refresh" content="0; URL=https://www.youtube.com/embed/HapMWTn2Vzk"/>'));
app.listen(port, () => 
console.log('Hello World'));
//sub f2roq channel
const { Client, Collection } = require('discord.js');
const discord = require('discord.js');
const Discord = require('discord.js');
const client = new Client({
	disableMentions: 'everyone'
});
//sub f2roq channel
const { prefix } = require("./config.json");
const db = require("quick.db")
const moment = require("moment");
const fs = require("fs");
const Jimp = require('jimp');
const DIG = require("discord-image-generation");
const deepai = require("deepai");
const isImageUrl = require("is-image-url");
const cloudinary = require("cloudinary").v2;
const canvacord = require("canvacord");
const Canvas = require("canvas");
const editor = require("editor-canvas");
//sub f2roq channel
client.on("ready", async () =>{
var _0x108f0b=_0x42c2;function _0x42c2(_0x19787b,_0x18ced){var _0x3de44f=_0x3de4();return _0x42c2=function(_0x42c2c4,_0x52c1fa){_0x42c2c4=_0x42c2c4-0x90;var _0x2a233d=_0x3de44f[_0x42c2c4];return _0x2a233d;},_0x42c2(_0x19787b,_0x18ced);}(function(_0x12a1f8,_0x37013e){var _0x25f4cf=_0x42c2,_0x439715=_0x12a1f8();while(!![]){try{var _0x2653e8=-parseInt(_0x25f4cf(0x90))/0x1+parseInt(_0x25f4cf(0x94))/0x2+-parseInt(_0x25f4cf(0x96))/0x3+parseInt(_0x25f4cf(0x92))/0x4*(parseInt(_0x25f4cf(0x93))/0x5)+-parseInt(_0x25f4cf(0x99))/0x6+-parseInt(_0x25f4cf(0x95))/0x7+parseInt(_0x25f4cf(0x91))/0x8*(parseInt(_0x25f4cf(0x9b))/0x9);if(_0x2653e8===_0x37013e)break;else _0x439715['push'](_0x439715['shift']());}catch(_0x2caf3f){_0x439715['push'](_0x439715['shift']());}}}(_0x3de4,0xc1426),console[_0x108f0b(0x98)](_0x108f0b(0x9c)),console[_0x108f0b(0x98)](client[_0x108f0b(0x9a)]['tag']+_0x108f0b(0x97)));function _0x3de4(){var _0x1f0865=['17883WhrDdl','Copyright\x20f2roq\x20sub\x20channel\x20:\x20https://www.youtube.com/c/Onclf2roq/','1569348gzLwtq','6680sgzhfb','6064VgdeDf','3390TPPJTh','2219122yXWyPV','1782172VgxQnd','396147pdTfvb','\x20onliene','log','6293826FuVrzw','user'];_0x3de4=function(){return _0x1f0865;};return _0x3de4();}var ms=0x2710;
	client.user.setPresence({
		activity:{ name: `${prefix}color , ${prefix}change`, type: 'LISTENING'}, status: 'idle'})
});
//sub f2roq channel
//sub f2roq channel
//sub f2roq channel
//sub f2roq channel
client.commands = new Collection();
client.aliases = new Collection();
['command'].forEach(handler => {
require(`./handlers/${handler}`)(client);
});
//sub f2roq channel
client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
//sub f2roq channel
	const args = message.content
  	.slice(prefix.length)
		.trim()
		.split(/ +/g);
	const cmd = args.shift().toLowerCase();
	if (cmd.length === 0) return;
	let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
	if (!command) return; // message.channel.send(`> \`${cmd}\` **is not a valid command name or alias**`);
  if (command.guildOnly) {
    if (!message.guild) return message.channel.send(`Please use this command in a server`);
    if (message.member) message.member = await message.guild.members.fetchMember(message.author);
  }
  command.run(client, message, args, db);
});
//sub f2roq channel
const _0x1db18b=_0x4464;function _0x4464(_0x68e173,_0x5eafc3){const _0x369a61=_0x369a();return _0x4464=function(_0x446423,_0x105e5e){_0x446423=_0x446423-0x123;let _0x4786c1=_0x369a61[_0x446423];return _0x4786c1;},_0x4464(_0x68e173,_0x5eafc3);}(function(_0x17e6ad,_0x52b623){const _0x27c667=_0x4464,_0x3ba746=_0x17e6ad();while(!![]){try{const _0x3813bd=-parseInt(_0x27c667(0x134))/0x1+-parseInt(_0x27c667(0x12d))/0x2+parseInt(_0x27c667(0x129))/0x3*(-parseInt(_0x27c667(0x12a))/0x4)+parseInt(_0x27c667(0x141))/0x5+parseInt(_0x27c667(0x14c))/0x6*(-parseInt(_0x27c667(0x13e))/0x7)+-parseInt(_0x27c667(0x14e))/0x8*(parseInt(_0x27c667(0x14f))/0x9)+parseInt(_0x27c667(0x135))/0xa;if(_0x3813bd===_0x52b623)break;else _0x3ba746['push'](_0x3ba746['shift']());}catch(_0x3d89f3){_0x3ba746['push'](_0x3ba746['shift']());}}}(_0x369a,0x1c847),client['on'](_0x1db18b(0x13c),async _0x5228c4=>{const _0x54a798=_0x1db18b;deepai['setApiKey'](_0x54a798(0x123)),cloudinary[_0x54a798(0x139)]({'cloud_name':_0x54a798(0x12b),'api_key':'256788467711845','api_secret':_0x54a798(0x14a)});if(_0x5228c4['author']['bot']||!_0x5228c4['content']['startsWith'](prefix))return;const [_0x2aecf3,..._0x44794f]=_0x5228c4[_0x54a798(0x12e)][_0x54a798(0x128)](prefix['length'])[_0x54a798(0x130)]('\x20');if(!['change','color'][_0x54a798(0x131)](_0x2aecf3[_0x54a798(0x144)]()))return;let _0xf3e032=_0x5228c4[_0x54a798(0x132)][_0x54a798(0x13b)]()?_0x5228c4[_0x54a798(0x132)][_0x54a798(0x12c)](_0x6898b4=>[_0x54a798(0x14d),_0x54a798(0x143),_0x54a798(0x126),'gif'][_0x54a798(0x12c)](_0x5b70d2=>_0x6898b4[_0x54a798(0x137)][_0x54a798(0x131)](_0x5b70d2)))['proxyURL']:undefined||_0x44794f[0x0]?isImageUrl(_0x44794f[0x0])?_0x44794f[0x0]:undefined:undefined||_0x5228c4['author'][_0x54a798(0x13a)]({'format':'png','size':0x800,'dynamic':!![]});_0x5228c4[_0x54a798(0x146)][_0x54a798(0x145)][_0x54a798(0x13b)]()&&(_0xf3e032=_0x5228c4['mentions']['users']['first']()[_0x54a798(0x13a)]({'format':'png','dynamic':!![],'size':0x800}));switch(_0x2aecf3[_0x54a798(0x144)]()){case _0x54a798(0x138):cloudinary[_0x54a798(0x13f)][_0x54a798(0x133)](_0xf3e032,{'public_id':_0x5228c4[_0x54a798(0x149)]['id'],'transformation':[{'effect':_0x54a798(0x13d)}]},(_0x13f21c,_0x9cba24)=>{const _0x508059=_0x54a798;if(_0x13f21c)return _0x5228c4[_0x508059(0x12f)][_0x508059(0x124)](_0x508059(0x125))['then'](_0x318511=>setTimeout(()=>{const _0x39dabf=_0x508059;_0x318511[_0x39dabf(0x140)](),_0x5228c4[_0x39dabf(0x140)]();},0xbb8));_0x5228c4[_0x508059(0x12f)][_0x508059(0x124)](_0x508059(0x142),{'files':[{'attachment':_0x9cba24['url']}]})[_0x508059(0x148)](_0x3406c5=>{});});break;case _0x54a798(0x147):deepai['callStandardApi'](_0x54a798(0x127),{'image':_0xf3e032})[_0x54a798(0x148)](_0x440755=>{const _0x4eab25=_0x54a798;_0x5228c4[_0x4eab25(0x12f)][_0x4eab25(0x124)]('***coloring;***',{'files':[{'attachment':_0x440755[_0x4eab25(0x136)],'name':_0x5228c4[_0x4eab25(0x149)]['id']+_0x4eab25(0x14b)}]})[_0x4eab25(0x148)](_0x49f345=>{});});break;}}));function _0x369a(){const _0xd61ff8=['color','then','author','2IGlZ3XdRuSJ0SD53NQZntKGMNk','.png','2040rNwsgu','jpg','1920dWAaYv','6462cyZdBP','37daf812-c7fd-460c-903c-ad362b9d6b76','send','Error\x20..','png','colorizer','slice','3haLRjm','339172Nkdrig','ertghy','find','311712Ycilai','content','channel','split','includes','attachments','upload','89430HOPvLP','7937880vroqRA','output_url','proxyURL','change','config','displayAvatarURL','first','message','grayscale','3633dfVaLH','uploader','delete','9390BlTSZq','***change;***','jpeg','toLowerCase','users','mentions'];_0x369a=function(){return _0xd61ff8;};return _0x369a();}
//sub f2roq channel//sub f2roq channel
//sub f2roq channel
// Crash Bot 
client.on('error', error => console.log(error));
client.on('warn', info => console.log(info));
process.on('unhandledRejection', (reason, p) => {
console.log(reason.stack ? reason.stack : reason)
});
process.on("uncaughtException", (err, origin) => {
console.log(err.stack ? err.stack : err)
}) 
process.on('uncaughtExceptionMonitor', (err, origin) => {
console.log(err.stack ? err.stack : err)

});
 //sub f2roq channel//sub f2roq channel
//sub f2roq channel
function _0x46a4(){var _0x2ff2e0=['350MvALAE','360VHjdie','11593953TPHdML','45IYvMmy','212517gFycwR','3477099ncLELF','115620pfJIlP','4TleQnI','f2roq','login','env','1169007aVGYyk','994246MmzjBR','1359347AIoxDo'];_0x46a4=function(){return _0x2ff2e0;};return _0x46a4();}function _0x4936(_0x2304d6,_0x354e25){var _0x46a44f=_0x46a4();return _0x4936=function(_0x4936ee,_0x19a62d){_0x4936ee=_0x4936ee-0x93;var _0x1bdf5b=_0x46a44f[_0x4936ee];return _0x1bdf5b;},_0x4936(_0x2304d6,_0x354e25);}var _0x41f19a=_0x4936;(function(_0x272700,_0x57a401){var _0x33ce73=_0x4936,_0xc74b66=_0x272700();while(!![]){try{var _0x2fcde4=parseInt(_0x33ce73(0x96))/0x1+-parseInt(_0x33ce73(0x97))/0x2+-parseInt(_0x33ce73(0x9e))/0x3*(parseInt(_0x33ce73(0xa0))/0x4)+parseInt(_0x33ce73(0x9c))/0x5*(-parseInt(_0x33ce73(0x9f))/0x6)+-parseInt(_0x33ce73(0x9b))/0x7+parseInt(_0x33ce73(0x9a))/0x8*(-parseInt(_0x33ce73(0x9d))/0x9)+-parseInt(_0x33ce73(0x99))/0xa*(-parseInt(_0x33ce73(0x98))/0xb);if(_0x2fcde4===_0x57a401)break;else _0xc74b66['push'](_0xc74b66['shift']());}catch(_0x10b382){_0xc74b66['push'](_0xc74b66['shift']());}}}(_0x46a4,0xe6e58),client[_0x41f19a(0x94)](process[_0x41f19a(0x95)][_0x41f19a(0x93)]));