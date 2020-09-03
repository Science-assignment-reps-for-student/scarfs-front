import io from 'socket.io-client';

class Socket {
  url: string;
  socket: SocketIOClient.Socket;
  constructor() {}
  connect() {
    this.socket = io.connect(this.url);
  }
  joinRoom(studentId: number, adminId: number) {
    this.socket.emit('joinRoom', `${studentId}:${adminId}`);
  }
  send(message: string, userId: number, target: number) {
    this.socket.emit('send', { message, room: `${userId}:${target}` });
  }
  receive(callback: Function) {
    this.socket.on('receive', callback);
  }
  error(callback: Function) {
    this.socket.on('error', callback);
  }
  disconnect() {
    this.socket.disconnect();
  }
  setSocket(socket: SocketIOClient.Socket) {
    this.socket = socket;
  }
  setUrl(url: string) {
    this.url = url;
  }
  errorHandler(error: string) {
    switch (error) {
      case 'client': {
        new Error('create client before send message by connect(connectCallback, errorCallback)');
      }
      case 'destination': {
        new Error('set destination by setDestination(url)');
      }
      default: {
        new Error('unkown error');
      }
    }
  }
}

export default Socket;
