let handler = m => m
handler.all = async function (m) {
	let chat = global.db.data.chats[m.chat]
	if (chat.autoPesence) {
    if (m.text) {
    /* Mengetik */
    let ran = ['unavailable', 'available', 'composing', 'recording', 'paused']
	return this.sendPresenceUpdate(ran.getRandom(), m.chat)
	return this.sendMessage(m.chat, {
          react: {
            text: '⌛',
            key: m.sender.key,
          }})
    }
  }
}
export default handler