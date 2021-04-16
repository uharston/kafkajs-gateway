import { Controller, Get, Inject, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { MY_CONT_SERVICE } from './constants';

@Controller('app')
export class AppController implements OnModuleInit {
  constructor(@Inject(MY_CONT_SERVICE) private client: ClientKafka) {}
  onModuleInit() {
    Logger.log('onModuleInit', 'MyContController');
    this.client.subscribeToResponseOf('__hello_kafka_topic');
  }

  @Get('hello')
  helloKafka() {
    console.log('sending message....');
    return this.client.send('__hello_kafka_topic', 'hello kafka!!!');
  }
}
