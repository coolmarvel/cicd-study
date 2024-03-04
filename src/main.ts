import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

import swaggerInit from './swagger';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const env: string = configService.get<string>('app.env');

  const logger = new Logger();
  process.env.NODE_ENV = env;

  // Swagger
  await swaggerInit(app);

  await app.listen(3000);

  logger.log(`==========================================================`);
  logger.log(`Environment Variable`, 'NestApplication');
  logger.log(JSON.parse(JSON.stringify(process.env)), 'NestApplication');
  logger.log(`==========================================================`);
  logger.log(`Http Server running on ${await app.getUrl()}`, 'NestApplication');
  logger.log(`==========================================================`);

  // 변경사항
}
bootstrap();
