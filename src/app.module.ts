import { Module } from '@nestjs/common';
import { RestController } from './rest/rest.controller';
import { IndexController } from './index/index.controller';

@Module({
  imports: [],
  controllers: [RestController, IndexController],
  providers: [],
})
export class AppModule {}
