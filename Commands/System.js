                              /*
Coded By Sanuka Nimasath

*/

case 'alive':{
                anu = `Hi ${pushname}
මෙතනට alive msg එක දාන්න
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('මෙතනට alive pic එක දාන්න')},
                            hydratedFooterText: `ᴷᴵᴺᴳ⁻ᴮᴼᵀ⁻ᴹᴰ`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'not reddy'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Github',
                                    url: 'not reddy'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '✬All Menu✬',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '✬List Menu✬',
                                    id: `${prefix}menu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '✬Rate Us✬',
                                    id: `${prefix}rate`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Kingbotmd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
