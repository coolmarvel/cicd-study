import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { HelperArrayService } from './service/helper.array.service';
import { HelperDateService } from './service/helper.date.service';
import { HelperEncryptionService } from './service/helper.encryption.service';
import { HelperHashService } from './service/helper.hash.service';
import { HelperNumberService } from './service/helper.number.service';
import { HelperStringService } from './service/helper.string.service';
import { HelperFileService } from './service/helper.file.service';
import { HelperGoogleService } from './service/helper.google.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [HelperArrayService, HelperDateService, HelperEncryptionService, HelperHashService, HelperNumberService, HelperStringService, HelperFileService, HelperGoogleService],
  exports: [HelperArrayService, HelperDateService, HelperEncryptionService, HelperHashService, HelperNumberService, HelperStringService, HelperFileService, HelperGoogleService],
  controllers: [],
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('helper.jwt.defaultSecretKey'),
        signOptions: { expiresIn: configService.get<string>('helper.jwt.defaultExpirationTime') },
      }),
    }),
  ],
})
export class HelperModule {}
