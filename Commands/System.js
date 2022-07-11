                              /*
Coded By Sanuka Nimasath

*/

const sanuka = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
let wk = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('system_stats');




    sanuka.addCommand({pattern: 'alive', fromMe: wk, desc: Lang.ALIVE_DESC, deleteCommand: false }, (async (message, match) => {
       if (Config.ALIVE_STIC == 'default') {
       const sticker = await axios.get('https://i.ibb.co/XkWhjLh/Nt-OOzj-C3-HBAB.webp', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (sticker.data), MessageType.sticker, {quoted: message.data} )
       }else { if (!Config.ALIVE_STIC.includes('webp')){
        const sticker = await axios.get('https://i.ibb.co/XkWhjLh/Nt-OOzj-C3-HBAB.webp', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (sticker.data), MessageType.sticker, {quoted: message.data} )
    }else{
             const sticker = await axios.get(Config.ALIVE_STIC, {responseType: 'arraybuffer'})
            await message.client.sendMessage (message.jid, Buffer.from (sticker.data), MessageType.sticker, {quoted: message.data} )                                        
                                                                                                   }}
                                                                                                   
                                                                                                   
        
        var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }

        if (Config.ALIVEMSG == 'default') {
            
        var aliveimg = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (//telegra.ph/file/24b9b8507613125d34bd1.jpg), MessageType.image, {mimetype: Mimetype.png, caption: 'net complete bot', quoted: message.data  })

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\nᴷᴵᴺᴳ⁻ᴮᴼᵀ⁻ᴹᴰ',quoted: message.data })
     }
    }));

    sanuka.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, deleteCommand: false }, (async (message, match) => {

        if (message.jid === '120363042897065108@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
