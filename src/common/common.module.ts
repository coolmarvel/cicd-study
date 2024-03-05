import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from './logger/logger.module';
import swaggerConfig from 'src/config/swagger.config';

@Module({
  imports: [ConfigModule.forRoot({ load: [swaggerConfig], isGlobal: true, cache: true, envFilePath: ['.env'], expandVariables: true }), LoggerModule],
})
export class CommonModule {}
