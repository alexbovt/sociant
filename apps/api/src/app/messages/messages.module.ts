import { Module } from '@nestjs/common';
import { MessagesGateway } from './messages.gateway';


@Module({
  imports: [],
  providers: [MessagesGateway]
})
export class MessagesModule {
}
