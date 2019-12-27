import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './@shared/env-shared/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.dist ? env.config.REST_PORT : 2405);
}
bootstrap();
