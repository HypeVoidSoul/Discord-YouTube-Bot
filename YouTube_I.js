// ===========================================[ ⭕️𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️ ]==================================================
console.clear();
require('dotenv').config()
YouTubeTok = process.env.YouTubeTok;
const Discord = require("discord.js");
const ʏᴏᴜᴛᴜʙᴇᴍᴜꜱɪᴄ = new Discord.Client();
const { Client } = require("youtubei");
const { createWriteStream } = require("fs");
const YouTube_Feed = require("discord-ytdl-core");
// ===========================================[ ⭕️𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️ ]==================================================
const YouTubeIC = new Client();
ʏᴏᴜᴛᴜʙᴇᴍᴜꜱɪᴄ.on("ready",
    () => {
        ʏᴏᴜᴛᴜʙᴇᴍᴜꜱɪᴄ.user.setActivity(`🔊 /yt`, { type: 'LISTENING' });
        console.log(`
========================[ 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 ]========================
|⭕️••  Bot_Status : 𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰 𝚒𝚜 𝙾𝚗𝚕𝚒𝚗𝚎 ! 
|⭕️••  Check Discord for: 🔊 /yt
========================[ 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 ]========================`
        );
    });
// ===========================================[ ⭕️𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️ ]==================================================
ʏᴏᴜᴛᴜʙᴇᴍᴜꜱɪᴄ.on("message",
    async message => {
        if (message.author.bot) return;
        if (message.content.startsWith("/yt")) {
            // ===========================================[ ⭕️𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️ ]==================================================
            let args = message.content.split(' ').slice(1);
            if (!args[0]) return message.channel.send(
                // ${message.author},
                `
Please enter YouTube **𝘜𝘙𝘓** or **𝘕𝘢𝘮𝘦** of the song!

**Example:** /yt URL or /yt Song_Name`);
            // ===========================================[ ⭕️𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️ ]==================================================
            let infos;
            let stream;
            // ===========================================[ ⭕️𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️ ]==================================================
            try {
                stream = YouTube_Feed(args.join(" "),
                    { encoderArgs: ['-af', 'dynaudnorm=f=200'], fmt: 'mp3', opusEncoded: false });
                infos = await YouTubeIC.search(args.join(" "));
                // ===========================================[ ⭕️𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️ ]==================================================
            } catch (exiled) {
                message.channel.send(
                    // ${message.author},
                    `
Sorry! I could not find anything for: ${args.join(" ")} !`);
                return
            }
            try {
                message.channel.send(
                    // ${message.author},
                    `
𝘞𝘢𝘪𝘵 𝘛𝘪𝘭𝘭 𝘵𝘩𝘦 𝘥𝘰𝘸𝘯𝘭𝘰𝘢𝘥 𝘪𝘴 𝘧𝘪𝘯𝘪𝘴𝘩𝘦𝘥...
${infos[0].title}`);
                // ===========================================[ ⭕️𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️ ]==================================================
                stream.pipe(createWriteStream(__dirname + `/downloads/${infos[0].title}.mp3`)).on('finish', () => {
                    try {
                        message.channel.send(// ${message.author},
                            ` music : ${infos[0].title} in mp3.`,
                            new Discord.MessageAttachment(__dirname + `/downloads/${infos[0].title}.mp3`,
                                `${infos[0].title}.mp3`))
                        // ===========================================[ ⭕️𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️ ]==================================================
                    } catch (exiled) {
                        return message.channel.send(
                            // ${message.author},
                            `
Sorry! I didn't manage to send the desired music
ᴍᴀʏʙᴇ ɪᴛ'ꜱ ᴛᴏᴏ ʜᴇᴀᴠʏ ꜰᴏʀ ᴅɪꜱᴄᴏʀᴅ? 
ᴏʀ 
ᴍᴀʏʙᴇ ɪ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ ᴛʜᴇ ʀᴇQᴜɪʀᴇᴅ ᴘᴇʀᴍɪꜱꜱɪᴏɴꜱ ᴛᴏ ᴜᴘʟᴏᴀᴅ ᴛʜɪꜱ ᴛʏᴘᴇ ᴏꜰ ꜰɪʟᴇ ᴏɴ ᴛʜɪꜱ ꜱᴇʀᴠᴇʀ...`);
                    }
                })
                // ===========================================[ ⭕️𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️ ]==================================================
            } catch (exiled) {
                return message.channel.send(
                    // ${message.author},
                    `
Sorry! I could not find anything for:
${args.join(" ")}

Maybe it is not possible to fetch the file from web`);
            }
        }
    });
ʏᴏᴜᴛᴜʙᴇᴍᴜꜱɪᴄ.login(YouTubeTok);
// ===========================================[ ⭕️𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️ ]==================================================