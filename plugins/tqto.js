import { createHash } from 'crypto'
import fetch from 'node-fetch'

let handler = async function (m, { text, usedPrefix, command }) {
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let cap = `*BIG THANKS TO*
    
Terutama Terimakasih Teruntuk:
➸ @${'6281316235253'.split('@')[0]}

Terimakasih Juga Untuk Kang Banned:
➸ 0@s.whatsapp.net

─────────────────────
• Tuhan Yang Maha Esa
• Orang Tua
• Zyrex-MD MultiDevice ( Me )
• Ivantheo Rizky Putra
• Callista Verlian
• Sans-BOT
• Rian Habibullah
• Saipul Anuar
• Muhammad Ridwan Reynaldy
• Muhammad Nasir
• NazeDev-BOT MD
• Fangz-XD BOT MD

𝙰𝚗𝚒𝚖𝚎 𝚝𝚎𝚛𝚔𝚊𝚒𝚝
• Gawr Gura
• MoeChann


𝙿𝚎𝚛𝚞𝚜𝚊𝚑𝚊𝚊𝚗 𝚃𝚎𝚛𝚔𝚊𝚒𝚝

• PT. Pertamina Persero
• PT. Thiees Indonesia
• PT. Freeport Indonesia
• Activition
• Timi Studios
• Tencent Games
• Garena
• Riot Games
• Moonton
• ZeeoneOfc
• Microsoft Corporation
• Google Adsense


─────────────────────`
  let buttonMessage= {
'document':{'url':'https://youtu.be/obPptvXfoiQ'},
'mimetype':global.ddocx,
'fileName':'「 ᴹᴿ᭄ King Of Ramzz ×፝֟͜× 」',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://youtu.be/obPptvXfoiQ',
'mediaType':2,
'previewType':'pdf',
'title':`💌 Ultah Owner: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
'body':`⚘ by ᴹᴿ᭄ King Of Ramzz ×፝֟͜×`,
'thumbnail':await(await fetch('https://telegra.ph/file/b79f5434198052c642a7e.jpg')).buffer(),
'sourceUrl':'https://youtu.be/obPptvXfoiQ'}},
'caption':cap,
'footer':`Ini Ucapan Terima Kasih Untuk Orang Yang Telah Berpatisipasi

${botdate}`,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'▣ Mҽɳυ ▣'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'🎈Hαʅʅσ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.tags = ['xp']

handler.command = /^(tqto)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
