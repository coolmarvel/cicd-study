import { registerAs } from '@nestjs/config';

export default registerAs('swagger', async () => ({
  title: `${process.env.APP_NAME} API Specification`,
  description: 'Study NestJS with Kafka, Microservice Architecture',
  version: '1.0.0',
  prefix: '/docs',
}));
