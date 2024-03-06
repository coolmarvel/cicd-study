import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from './logger/logger.module';
import { ApiKeyModule } from './api-key/api-key.module';
import { AuthModule } from './auth/auth.module';
import { AwsModule } from './aws/aws.module';
import { DatabaseOptionModule } from './database/database.option.module';
import { DebuggerOptionModule } from './debugger/debugger.option.module';
import { ErrorModule } from './error/error.module';
import { HelperModule } from './helper/helper.module';
import { MessageModule } from './message/message.module';
import { PaginationModule } from './pagination/pagination.module';
import { PolicyModule } from './policy/policy.module';
import { RequestModule } from './request/request.module';
import { ResponseModule } from './response/response.module';
import configs from 'src/config';

@Module({
  imports: [
    ConfigModule.forRoot({ load: configs, isGlobal: true, cache: true, envFilePath: ['.env'], expandVariables: true }),
    LoggerModule,
    ApiKeyModule,
    AuthModule,
    AwsModule,
    DatabaseOptionModule,
    DebuggerOptionModule,
    ErrorModule,
    HelperModule,
    MessageModule,
    PaginationModule,
    PolicyModule,
    RequestModule,
    ResponseModule,
  ],
})
export class CommonModule {}
