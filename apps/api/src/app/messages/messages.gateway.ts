import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { WebSocketMessageType } from '@sociant/api-interfaces';
import { Logger } from '@nestjs/common';
import { Server } from 'socket.io';

@WebSocketGateway(3000)
export class MessagesGateway {

  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(MessagesGateway.name);

  @SubscribeMessage(WebSocketMessageType.NewMessageRequest)
  handleNewMessage(@MessageBody() data: string): void {
    this.logger.log(data);
  }
}
