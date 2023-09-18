import { Module } from '@nestjs/common';
import { RestController } from './rest/rest.controller';
import { IndexController } from './index/index.controller';
import { LogsService } from '@thefirstspine/logs-nest';

@Module({
  imports: [],
  controllers: [RestController, IndexController],
  providers: [LogsService],
})
export class AppModule {}
