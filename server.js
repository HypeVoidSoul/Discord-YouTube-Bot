// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
const express = require('express');
const server = express();
console.clear();
require('dotenv').config()
const ʙᴏᴛꜰɪx = process.env.BotFix;
const ʏᴏᴜᴛᴜʙᴇᴛᴏᴋ = process.env.YouTubeFix;
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
server.all('/', (req, res)=>{
    res.send(`Your bot is Ready!

𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 |>••••••••••••••••••••••••••
|
|⭕️••  Bot_Status : 𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰 𝚒𝚜 𝙾𝚗𝚕𝚒𝚗𝚎 !
|⭕️••  Check Discord for: 🔊 ${ʙᴏᴛꜰɪx}yt   
|
𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 |>••••••••••••••••••••••••••`)
})
function ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇserver(){
    server.listen(3000, ()=>{console.log(`Server is Ready!`)});
}
module.exports = ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇserver;
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================