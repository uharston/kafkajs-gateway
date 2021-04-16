import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchemaFirstModule } from './schema-first/schema-first.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BROKER1, CLIENTID, MY_CONT_SERVICE } from './constants';
import { CodeFirstModule } from './code-first/code-first.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MY_CONT_SERVICE,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: CLIENTID,
            brokers: [BROKER1],
          },
          producer: {},
          // consumer: {
          //   groupId: 'myCont-consumer',
          // },
        },
      },
    ]),
    SchemaFirstModule,
    CodeFirstModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
