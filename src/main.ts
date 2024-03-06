import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

import swaggerInit from './swagger';
import { ConfigService } from '@nestjs/config';
import { Logger, VersioningType } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const env: string = configService.get<string>('app.env');
  const tz: string = configService.get<string>('app.tz');
  const host: string = configService.get<string>('app.http.host');
  const port: number = configService.get<number>('app.http.port');
  const globalPrefix: string = configService.get<string>('app.globalPrefix');
  const version: string = configService.get<string>('app.versioning.version');
  const versioningPrefix: string = configService.get<string>('app.versioning.prefix');

  const httpEnable: boolean = configService.get<boolean>('app.http.enable');
  const versionEnable: string = configService.get<string>('app.versioning.enable');

  const jobEnable: boolean = configService.get<boolean>('app.jobEnable');

  const logger = new Logger();
  process.env.NODE_ENV = env;
  process.env.TZ = tz;

  app.setGlobalPrefix(globalPrefix);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  if (versionEnable) app.enableVersioning({ type: VersioningType.URI, defaultVersion: version, prefix: versioningPrefix });

  // Swagger
  await swaggerInit(app);

  await app.listen(port, host);

  logger.log(`==========================================================`);

  logger.log(`Environment Variable`, 'NestApplication');
  // logger.log(JSON.parse(JSON.stringify(process.env)), 'NestApplication');
  
  logger.log(`==========================================================`);

  logger.log(`Job is ${jobEnable}`, 'NestApplication');
  logger.log(`Http is ${httpEnable}, ${httpEnable ? 'routes registered' : 'no routes registered'}`, 'NestApplication');
  logger.log(`Http versioning is ${versionEnable}`, 'NestApplication');

  logger.log(`Http Server running on ${await app.getUrl()}`, 'NestApplication');

  logger.log(`==========================================================`);
}
bootstrap();
