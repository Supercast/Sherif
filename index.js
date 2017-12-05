const Discord = require('discord.js');

const client = new Discord.Client();

const token = process.env.BOT_TOKEN;
var prefix        = "s!";
var mention       = "<@383569995050909697>";
var sherif 		  = '<:sherif:258244124220588043>';

client.on('ready', () => {
	console.log("Bonjour, je suis LE Shérif.");
    client.user.setGame("Far West");
});

client.on('message', message => {
	var msgc = message.content;

	if (!message.author.bot) {
	    if (msgc.includes('ping') || msgc.includes('Ping') || msgc.includes('pong') || msgc.includes('Pong')) {
	    	message.channel.send('On ne joue pas avec le Shérif ' + sherif);
	    }else if (msgc.includes('Bonjour') || msgc.includes('bonjour')) {
        message.channel.send('Bien le bonjour ' + message.author.username + ', je suis le Shérif et je suis là pour faire régner l\'ordre.');
			}else if (msgc.includes('BONJOUR')) {
				message.channel.send('EH OH ! ' + message.author.username.toUpperCase() + ', TU VAS TE CALMER VITE FAIT ET ARRETER DE CRIER !');
			}
		var badwords = ["JUL", "Jul", "jul", "<:jul:365030665630121985>"];
		var i = 0;
		while(i<badwords.length){
			if(msgc.includes(badwords[i])){
				message.delete(1000);
			}
		i++;
		}
	}
});

client.login(token);
