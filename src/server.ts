import { Server } from 'socket.io';
import http from 'http';
import app from './app';
import * as ChatController from './controllers/ChatController';

const server = http.createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    ChatController.handleMessage(socket, message);
  });
});

server.listen(process.env.PORT, () => {
  console.log('started service...');
});

export default server;
