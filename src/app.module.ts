import { Module } from '@nestjs/common';
import { RestController } from './rest/rest.controller';
import { IndexController } from './index/index.controller';
import { LogsService } from '@thefirstspine/logs-nest';
import { RestBackwardCompatibleController } from './rest/rest.backward-compatible.controller';

@Module({
  imports: [],
  controllers: [RestController, RestBackwardCompatibleController, IndexController],
  providers: [LogsService],
})
export class AppModule {}
