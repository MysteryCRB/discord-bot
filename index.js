const { Client, Intents, MessageEmbed, DiscordAPIError, Discord } = require("discord.js");
const command = require("nodemon/lib/config/command");
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const config = require("./config.json");

const activities_list = [ 
  { type: 'PLAYING',  message: 'CRB Ganteng' },
  { type: 'WATCHING', message: 'Prefix: ~' },
  { type: 'LISTENING', message: 'Krzemien is online 24/7!' },
  { type: 'STREAMING', message: 'Created by CRB'}
];

client.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);

      client.user.setActivity(activities_list[index].message, { type: activities_list[index].type });
  }, 10000);

  console.log("CRB nyala uyyy")

  client.user.setPresence({status: "dnd"})
});

// yang dibawah ini khusus commands, males buat advanced command handler soalnya bot yang lalu error mulu anjing
client.on("messageCreate", msg => {
    if (msg.content === "hey") {
    msg.reply("sup bro")
    } else if (msg.content === "gimana kabar bro?") {
    msg.reply("b aja")
    } else if (msg.content === "aku kesepian") {
    msg.react("❤️")
    } else if (msg.content === "Assalamualaikum") {
    msg.reply("Waalaikumsalam")
    } else if (msg.content === "Ppagi") {
    msg.reply("swlamst oagih vhanhn!")
    } else if (msg.content === "p") {
    msg.reply("salam yang bener blog")
    } else if (msg.content === "siang") {
    msg.reply("swlamst xyannh vhanhn")
    } else if (msg.content === "sore") {
    msg.reply("swlamst somre vhangg")
    } else if(msg.content === "malam") {
    msg.reply("congratulation nacht vhang") 
    }
    });

//untuk command" diatas itu nda usah pake prefix ya (reminder)

const prefix = "~";
client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(`${prefix}author`)) {
    message.reply("MysteryCRB");
  } else

  if (message.content.startsWith(`${prefix}info`)) {
    message.reply("blm ada bro");
  } 
});


// batas command disini





//hehe boi
client.login(process.env.TOKEN);