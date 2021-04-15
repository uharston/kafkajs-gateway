import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { SchemaFirstModule } from './schema-first/schema-first.module';

@Module({
  imports: [ApiModule, SchemaFirstModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
