require('dotenv').config();
const WebSocket = require('ws');
const socket = new WebSocket('wss://irc-ws.chat.twitch.tv:443');

socket.addEventListener('open', (event) => {
  socket.send(`PASS oauth:${process.env.OAUTH_TOKEN}`);
  socket.send(`NICK ${process.env.BOTUSERNAME}`);
  socket.send(`JOIN #${process.env.CHANNEL}`);
});

socket.addEventListener('message', (event) => {
  console.log(event.data);

  if (event.data.includes("!sniffa")) socket.send(`PRIVMSG #${process.env.CHANNEL} :SNIFFA SNIFFA SNIFFA`);
  if (event.data.includes("PING")) socket.send("PONG");
});