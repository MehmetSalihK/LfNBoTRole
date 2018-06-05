const Discord = require("discord.js");
const client = new Discord.Client();

const TOKEN = "NDUzNjIxNDUwNzc1OTg2MTc2.DfhjeQ.T_F3AELdZiLkaCNsiB67rA6QuiI";
const ownerID = "174565176492687361"
const PREFIX = "-";

var bot = new Discord.Client();

var servers = {};

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "📈à-rejoin📈").send(`**Bienvenue à** __**${member.guild.name}**__ **maintenant** __**${member.user.username}**__ **est avec nous!**`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "📉à-quitter📉").send(`__**${member.user.username}**__ **n'est plus sur notre serveur** __**${member.guild.name}**__`)
})

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find("name", "✓NDNG✓");
    member.addRole(role)
})

bot.login(TOKEN);
