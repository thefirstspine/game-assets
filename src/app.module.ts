import { Module } from '@nestjs/common';
import { RestController } from './rest/rest.controller';

@Module({
  imports: [],
  controllers: [RestController],
  providers: [],
})
export class AppModule {}
