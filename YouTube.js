// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
console.clear();
require('dotenv').config()
const ʙᴏᴛꜰɪx = process.env.BotFix;
const ʏᴏᴜᴛᴜʙᴇᴛᴏᴋ = process.env.YouTubeFix;
const ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇserver = require('./server');
const Discord = require("discord.js");
const ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ = new Discord.Client();
const ᴠᴏɪᴅᴅᴡɴ = require("discord-ytdl-core");
const { createWriteStream } = require("fs");
const { Client } = require("youtubei");
const ᴠᴏɪᴅɪᴄ = new Client();
console.clear();
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
const ʏᴏᴜʟɪꜱᴛᴘᴀᴛᴛᴇʀɴ = /^.*(list=)([^#\&\?]*).*/gi;
const ʏᴏᴜɢᴇᴛᴘᴀᴛᴛᴇʀɴ = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
if (ʙᴏᴛꜰɪx === undefined) {
    console.log('𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 |>••••••••••••••••••••••••••\n\nPrefix is undefined')
    return;
}
if (ʏᴏᴜᴛᴜʙᴇᴛᴏᴋ === undefined) {
    console.log('𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 |>••••••••••••••••••••••••••\n\nYouTubeTok is undefined')
    return;
}
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.on("ready",
    () => {
        console.clear();
        ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.user.setActivity(`${ʙᴏᴛꜰɪx}yt ⭕️`,
            { type: 'WATCHING' });
        console.log(`
𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 |>••••••••••••••••••••••••••
|
|⭕️••  Bot_Status : 𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰 𝚒𝚜 𝙾𝚗𝚕𝚒𝚗𝚎 ! 
|⭕️••  Check Discord for: 🔊 ${ʙᴏᴛꜰɪx}yt   
|
𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 |>••••••••••••••••••••••••••`
        );
    });
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.on("message", async message => {
    // ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
    if (message.author.bot)
        return;
    // ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================   
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "yt")) {
        let ᴀʀɢꜱ = message.content.split(' ').slice(1);
        // ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
        if (!message.content.startsWith(ʙᴏᴛꜰɪx + "yt") && ʏᴏᴜɢᴇᴛᴘᴀᴛᴛᴇʀɴ.test(ᴀʀɢꜱ[0])) {
            message.channel.send(`
${message.author}
**• ⚠️WARNING:** Please use **${ʙᴏᴛꜰɪx}yt YouTube Url**`).catch(console.error);
            return;
        }
        // ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
        if (ʏᴏᴜʟɪꜱᴛᴘᴀᴛᴛᴇʀɴ.test(ᴀʀɢꜱ[0])) {
            message.channel.send(`
${message.author}
**• ⚠️WARNING:** Please send **YouTube   _Single/Non-Playlist_   Urls Only**`).catch(console.error);
            return;
        }
        // ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
        if (!ᴀʀɢꜱ[0])
            return message.channel.send(`
${message.author}
𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 |>••••••••••••••••••••••••••

**• ⚠️WARNING:** Please enter the **YouTube URL** of a song !
**• EX:** ${ʙᴏᴛꜰɪx}yt https://www.youtube\.com|youtu`).catch(console.error);
        // ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
        let ʏᴏᴜᴛᴀᴋᴇʀ;
        let ʏᴏᴜꜱᴛʀᴇᴀᴍᴇʀ;
        // ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
        try {
            ʏᴏᴜꜱᴛʀᴇᴀᴍᴇʀ = ᴠᴏɪᴅᴅᴡɴ(ᴀʀɢꜱ.join(" "), {
                encoderArgs: ['-af', 'dynaudnorm=f=200'], fmt: 'mp3', opusEncoded: false
            });
            ʏᴏᴜᴛᴀᴋᴇʀ = await ᴠᴏɪᴅɪᴄ.search(ᴀʀɢꜱ.join(" "));
        } catch (e) {
            return message.channel.send(`
${message.author}
𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 |>••••••••••••••••••••••••••

**• ⚠️WARNING:** I didn't find anything for: **${ᴀʀɢꜱ.join(" ")}**`).catch(console.error);
        }
        // ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
        try {
            message.channel.send(`
${message.author}
𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 |>••••••••••••••••••••••••••

•:shaved_ice:**SongTitle:** _${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}_
•:chains:**SongUrl:**   _${ᴀʀɢꜱ}_

Please Wait till 𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 finishes downloading...`).catch(console.error);
            ʏᴏᴜꜱᴛʀᴇᴀᴍᴇʀ.pipe(createWriteStream(__dirname + `/YTubeTemp/${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}.mp3`)).on('finish', () => {
                try {
                    // ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
                    try {
                        message.delete()
                    } catch (e) {
                        console.log(e)
                    }
                    // ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
                    message.channel.send(`𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 |>••••••••••••••••••••••••••
•:shaved_ice:**SongTitle:** _${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}_
•:chains:**SongUrl:**   _${ᴀʀɢꜱ}_`,
                        new Discord.MessageAttachment(__dirname + `/YTubeTemp/${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}.mp3`, `${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}.mp3`)
                    )
                } catch (e) {
                    return message.channel.send(`
${message.author}
𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 |>••••••••••••••••••••••••••

**• 🔥ERROR:** 
I didn't manage to send the music... 

Maybe it's too heavy for Discord ? 
Or 
Maybe I don't have the required permissions to upload this type of file on this server...`).catch(console.error);
                }
            })
            // ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
        } catch (e) {
            return message.channel.send(`
${message.author}
𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 |>••••••••••••••••••••••••••

**• 🔥ERROR:**
I didn't find anything for : **${ᴀʀɢꜱ.join(" ")}**

Maybe it is impossible to retrieve this music...`).catch(console.error);
        }
    }
});
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇserver()
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.login(ʏᴏᴜᴛᴜʙᴇᴛᴏᴋ).catch(console.error);
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================