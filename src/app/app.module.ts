import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { CommonModule } from 'src/common/common.module';
import { AppMiddlewareModule } from './middleware/app.middleware.module';

@Module({
  imports: [CommonModule, AppMiddlewareModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
