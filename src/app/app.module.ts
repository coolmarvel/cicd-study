import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './app.service';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
