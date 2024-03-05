import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestApplication } from '@nestjs/core';
import { ENUM_APP_ENVIRONMENT } from './app/constant/app.enum.constant';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';

export default async function (app: NestApplication) {
  const configService: ConfigService = app.get(ConfigService);
  const env: string = configService.get<string>('app.env');
  const logger = new Logger();

  const swaggerTitle: string = configService.get<string>('swagger.title');
  const swaggerDesc: string = configService.get<string>('swagger.description');
  const swaggerVersion: string = configService.get<string>('swagger.version');
  const swaggerPrefix: string = configService.get<string>('swagger.prefix');

  if (env !== ENUM_APP_ENVIRONMENT.PRODUCTION) {
    const config = new DocumentBuilder()
      .setTitle(swaggerTitle)
      .setDescription(swaggerDesc)
      .setVersion(swaggerVersion)
      .addTag('API')
      .addServer('/')
      .addServer('/staging')
      .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'accessToken')
      .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'refreshToken')
      .addApiKey({ type: 'apiKey', in: 'header', name: 'x-api-key' }, 'apiKey')
      .build();
    const customeOptions: SwaggerCustomOptions = { swaggerOptions: { persistAuthorization: true }, explorer: true, customSiteTitle: swaggerTitle };
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(swaggerPrefix, app, document, customeOptions);

    logger.log(`==========================================================`);
    logger.log(`Docs will serve on ${swaggerPrefix}`, 'NestApplication');
    logger.log(`==========================================================`);
  }
}
