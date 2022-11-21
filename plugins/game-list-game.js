import { readFileSync } from 'fs'
let handler = async (m, {conn, command, args, usedPrefix}) => {
let ktnya = ['\n\n\n' + htjava + ' Mungkin menu ini bermanfaat? ' + htjava,
 '\n\n\n' + htjava + ' Terimakasih sudah menggunakan bot ini ' + htjava,
 '\n\n\n' + htjava + ' Semoga gak erorr ' + htjava,
 '\n\n\n' + htjava + ' Jika lama kemungkiman erorr atau delay ' + htjava,
 '\n\n\n' + htjava + ' Menampilkan menu ' + htjava,
 '\n\n\n' + htjava + ' Wait... ' + htjava,
 '\n\n\n' + htjava + ' Dua tiga kucing berlari ' + htjava,
 '\n\n\n' + htjava + ' Bentar bang akan kutampilkan menunya ' + htjava,
 '\n\n\n' + htjava + ' Prosess... ' + htjava]
let ktx = ktnya.getRandom()
const sections = [
   {
	title: `${htki} RPG GAME ${htka}`,
	rows: [
	    {title: `${emojis} adventure`, rowId: `${usedPrefix}adventure`, description: ktx},
	    {title: `${emojis} bansos`, rowId: `${usedPrefix}bansos`, description: ktx},
	    {title: `${emojis} buy`, rowId: `${usedPrefix}buy`, description: ktx},
	    {title: `${emojis} berburu`, rowId: `${usedPrefix}berburu`, description: ktx},
	    {title: `${emojis} berdagang`, rowId: `${usedPrefix}berdagang`, description: ktx},
	    {title: `${emojis} berkebon`, rowId: `${usedPrefix}berkebon`, description: ktx},
	    {title: `${emojis} bet`, rowId: `${usedPrefix}bet`, description: ktx},
	    {title: `${emojis} build`, rowId: `${usedPrefix}build`, description: ktx},
	    {title: `${emojis} casino`, rowId: `${usedPrefix}casino`, description: ktx},
	    {title: `${emojis} cek`, rowId: `${usedPrefix}cek`, description: ktx},
	    {title: `${emojis} chop`, rowId: `${usedPrefix}chop`, description: ktx},
	    {title: `${emojis} collect`, rowId: `${usedPrefix}collect`, description: ktx},
	    {title: `${emojis} cook`, rowId: `${usedPrefix}cook`, description: ktx},
	    {title: `${emojis} cooldown`, rowId: `${usedPrefix}cooldown`, description: ktx},
	    {title: `${emojis} craft`, rowId: `${usedPrefix}craft`, description: ktx},
	    {title: `${emojis} daily`, rowId: `${usedPrefix}daily`, description: ktx},
	    {title: `${emojis} duel`, rowId: `${usedPrefix}duel`, description: ktx},
	    {title: `${emojis} dungeon`, rowId: `${usedPrefix}dungeon`, description: ktx},
	    {title: `${emojis} eat`, rowId: `${usedPrefix}eat`, description: ktx},
	    {title: `${emojis} feed`, rowId: `${usedPrefix}feed`, description: ktx},
	    {title: `${emojis} heal`, rowId: `${usedPrefix}heal`, description: ktx},
	    {title: `${emojis} hourly`, rowId: `${usedPrefix}hourly`, description: ktx},
	    {title: `${emojis} hunt`, rowId: `${usedPrefix}hunt`, description: ktx},
	    {title: `${emojis} inventory`, rowId: `${usedPrefix}inventory`, description: ktx},
	    {title: `${emojis} kandang`, rowId: `${usedPrefix}kandang`, description: ktx},
	    {title: `${emojis} kerja`, rowId: `${usedPrefix}kerja`, description: ktx},
	    {title: `${emojis} koboy`, rowId: `${usedPrefix}koboy`, description: ktx},
	    {title: `${emojis} kolam`, rowId: `${usedPrefix}kolam`, description: ktx},
	    {title: `${emojis} leaderboard`, rowId: `${usedPrefix}leaderboard`, description: ktx},
	    {title: `${emojis} mancing`, rowId: `${usedPrefix}mancing`, description: ktx},
	    {title: `${emojis} mentransfer`, rowId: `${usedPrefix}mentransfer`, description: ktx},
	    {title: `${emojis} merampok`, rowId: `${usedPrefix}merampok`, description: ktx},
	    {title: `${emojis} mining`, rowId: `${usedPrefix}mining`, description: ktx},
	    {title: `${emojis} mission`, rowId: `${usedPrefix}mission`, description: ktx},
	    {title: `${emojis} monthly`, rowId: `${usedPrefix}monthly`, description: ktx},
	    {title: `${emojis} nabung`, rowId: `${usedPrefix}nabung`, description: ktx},
	    {title: `${emojis} nambang`, rowId: `${usedPrefix}nambang`, description: ktx},
	    {title: `${emojis} nebang`, rowId: `${usedPrefix}nebang`, description: ktx},
	    {title: `${emojis} ngocok`, rowId: `${usedPrefix}ngocok`, description: ktx},
	    {title: `${emojis} nguli`, rowId: `${usedPrefix}nguli`, description: ktx},
	    {title: `${emojis} ojek`, rowId: `${usedPrefix}ojek`, description: ktx},
	    {title: `${emojis} open-crate`, rowId: `${usedPrefix}opencrate`, description: ktx},
	    {title: `${emojis} open`, rowId: `${usedPrefix}open`, description: ktx},
	    {title: `${emojis} pasar`, rowId: `${usedPrefix}pasar`, description: ktx},
	    {title: `${emojis} petstore`, rowId: `${usedPrefix}petstore`, description: ktx},
	    {title: `${emojis} pointxp`, rowId: `${usedPrefix}pointxp`, description: ktx},
	    {title: `${emojis} profile`, rowId: `${usedPrefix}profile`, description: ktx},
	    {title: `${emojis} ramuan`, rowId: `${usedPrefix}ramuan`, description: ktx},
	    {title: `${emojis} repair`, rowId: `${usedPrefix}repair`, description: ktx},
	    {title: `${emojis} rob`, rowId: `${usedPrefix}rob`, description: ktx},
	    {title: `${emojis} roket`, rowId: `${usedPrefix}roket`, description: ktx},
	    {title: `${emojis} sell`, rowId: `${usedPrefix}sell`, description: ktx},
	    {title: `${emojis} shopfish`, rowId: `${usedPrefix}shopfish`, description: ktx},
	    {title: `${emojis} shop`, rowId: `${usedPrefix}shop`, description: ktx},
	    {title: `${emojis} slect-skill`, rowId: `${usedPrefix}slectskill`, description: ktx},
	    {title: `${emojis} slot`, rowId: `${usedPrefix}slot`, description: ktx},
	    {title: `${emojis} tarik`, rowId: `${usedPrefix}tarik`, description: ktx},
	    {title: `${emojis} taxy`, rowId: `${usedPrefix}taxy`, description: ktx},
	    {title: `${emojis} toko`, rowId: `${usedPrefix}toko`, description: ktx},
	    {title: `${emojis} transfer`, rowId: `${usedPrefix}transfer`, description: ktx},
	    {title: `${emojis} upgrade`, rowId: `${usedPrefix}upgrade`, description: ktx},
	    {title: `${emojis} use`, rowId: `${usedPrefix}use`, description: ktx},
	    {title: `${emojis} weekly`, rowId: `${usedPrefix}weekly`, description: ktx},
	    {title: `${emojis} work`, rowId: `${usedPrefix}work`, description: ktx}
	]
    },{
	title: `${htki} Non-RPG GAME ${htka}`,
	rows: [
	    {title: `${emojis} asahotak`, rowId: `${usedPrefix}asahotak`, description: ktx},
	    {title: `${emojis} caklontong`, rowId: `${usedPrefix}caklontong`, description: ktx},
	    {title: `${emojis} family100`, rowId: `${usedPrefix}family100`, description: ktx},
	    {title: `${emojis} fight`, rowId: `${usedPrefix}fight`, description: ktx},
	    {title: `${emojis} gombal`, rowId: `${usedPrefix}gombal`, description: ktx},
	    {title: `${emojis} math`, rowId: `${usedPrefix}math`, description: ktx},
	    {title: `${emojis} siapakahaku`, rowId: `${usedPrefix}siapakahaku`, description: ktx},
	    {title: `${emojis} slot`, rowId: `${usedPrefix}slot`, description: ktx},
	    {title: `${emojis} suitpvp`, rowId: `${usedPrefix}suitpvp`, description: ktx},
	    {title: `${emojis} susunkata`, rowId: `${usedPrefix}susunkata`, description: ktx},
	    {title: `${emojis} tebakan`, rowId: `${usedPrefix}tebakan`, description: ktx},
	    {title: `${emojis} tebakanime`, rowId: `${usedPrefix}tebakanime`, description: ktx},
	    {title: `${emojis} tebakbendera`, rowId: `${usedPrefix}tebakbendera`, description: ktx},
	    {title: `${emojis} tebakchara`, rowId: `${usedPrefix}tebakchara`, description: ktx},
	    {title: `${emojis} tebakgambar`, rowId: `${usedPrefix}tebakgambar`, description: ktx},
	    {title: `${emojis} tebakjenaka`, rowId: `${usedPrefix}tebakjenaka`, description: ktx},
	    {title: `${emojis} tebakkabupaten`, rowId: `${usedPrefix}tebakkabupaten`, description: ktx},
	    {title: `${emojis} tebakkalimat`, rowId: `${usedPrefix}tebakkalimat`, description: ktx},
	    {title: `${emojis} tebakkata`, rowId: `${usedPrefix}tebakkata`, description: ktx},
	    {title: `${emojis} tebakkimia`, rowId: `${usedPrefix}tebakkimia`, description: ktx},
	    {title: `${emojis} tebaklagu`, rowId: `${usedPrefix}tebaklagu`, description: ktx},
	    {title: `${emojis} tebaklirik`, rowId: `${usedPrefix}tebaklirik`, description: ktx},
	    {title: `${emojis} tebaklogo`, rowId: `${usedPrefix}tebaklogo`, description: ktx},
	    {title: `${emojis} tebaksiapa`, rowId: `${usedPrefix}tebaksiapa`, description: ktx},
	    {title: `${emojis} tebakumur`, rowId: `${usedPrefix}tebakumur`, description: ktx},
	    {title: `${emojis} tekateki`, rowId: `${usedPrefix}tekateki`, description: ktx},
	    {title: `${emojis} tictactoe`, rowId: `${usedPrefix}tictactoe`, description: ktx}
	]
	}
]

let tek = `*Hai ${conn.getName(m.sender)}* 👋
Silahkan Pilih Game Disini
`
const listMessage = {
  text: tek,
  footer: '📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner',
  mentions: await conn.parseMention(tek),
  title: `${htki} *LIST MENU* ${htka}`,
  buttonText: `CLICK HERE ⎙`,
  sections
}
  	return conn.sendMessage(m.chat, listMessage, {quoted: fakes})
                }
///AKSJDDJ
handler.help = ['game']
handler.tags = ['rpg']
handler.command = /^gam(es|ing|e)$/i 

export default handler