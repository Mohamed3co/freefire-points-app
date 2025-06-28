// /api/telegramNotifier.js

import fetch from 'node-fetch';

const BOT_TOKEN = '8096326997:AAE_UuRKi3gnCdOfXKu76X4D4cPUuXSpPbo';
const CHAT_ID = '6285856969';

export async function sendTelegramMessage(message) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const body = {
        chat_id: CHAT_ID,
            text: message,
                parse_mode: 'HTML'
                  };

                    try {
                        const res = await fetch(url, {
                              method: 'POST',
                                    headers: {
                                            'Content-Type': 'application/json'
                                                  },
                                                        body: JSON.stringify(body)
                                                            });

                                                                const data = await res.json();
                                                                    if (!data.ok) {
                                                                          console.error('Telegram error:', data);
                                                                              }
                                                                                } catch (error) {
                                                                                    console.error('Telegram send error:', error);
                                                                                      }
                                                                                      }