const Discord = require("discord.js");
const client = new Discord.Client();

const TOKEN = "NDU2NTkyMDkwMDcyMDg4NTk4.DgMyIw.3BMj4oqfzRnNDaKSCbI-fDP-VXI";
const ownerID = "174565176492687361"
const PREFIX = "-";

var bot = new Discord.Client();

var servers = {};

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '📈à-rejoin📈');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Participant dans notre serveur : ', `${member}`)
        .addField(':microphone2: | Bienvenue!', `Bienvenue sur notre serveur, ${member}`)
        .addField(':id: | Utilisateur :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Vous êtes ', `${member.guild.memberCount}` + "ième personnes")
        .addField("Nom", `<@` + `${member.id}` + `>`, true)
        .addField('Serveur', `${member.guild.name}`, true )
        .setFooter(` Pour la commande d'aide [-aide]`, "https://imgur.com/rAgsGxu.png")
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "relié" + `${member.guild.name}`)

});

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '📉à-quitter📉');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Nom:', `${member}`)
        .addField('Pourquoi ?', "qui t'a soutenu ?")
        .addField('Bye Bye :(', 'Ouvre ton chemin, mon frère/ma soeur!')
        .addField('Maintenant sur notre serveur ils nous reste', `${member.guild.memberCount}` + " personnes")
        .setFooter(` Pour la commande d'aide [-aide]`, "https://imgur.com/rAgsGxu.png")
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "ont été divisés" + `${member.guild.name}` + "Laissez un message maintenant")
    console.log("Message envoyé")
});

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find("name", "✓NDNG✓");
    member.addRole(role)
})

bot.login(TOKEN);
