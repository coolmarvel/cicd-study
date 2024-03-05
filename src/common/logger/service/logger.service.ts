import { Injectable } from '@nestjs/common';
import { ILoggerService } from '../interface/logger.service.interface';
import { LoggerCreateDto, LoggerCreateRawDto } from '../dto/logger.create..dto';

@Injectable()
export class LoggerService implements ILoggerService {
  info({ action, description, apiKey, user, method, requestId, role, type, params, bodies, path, statusCode, tags }: LoggerCreateDto): Promise<any> {
    throw new Error('Method not implemented.');
  }

  debug({ action, description, apiKey, user, method, requestId, role, type, params, bodies, path, statusCode, tags }: LoggerCreateDto): Promise<any> {
    throw new Error('Method not implemented.');
  }

  warn({ action, description, apiKey, user, method, requestId, role, type, params, bodies, path, statusCode, tags }: LoggerCreateDto): Promise<any> {
    throw new Error('Method not implemented.');
  }

  fatal({ action, description, apiKey, user, method, requestId, role, type, params, bodies, path, statusCode, tags }: LoggerCreateDto): Promise<any> {
    throw new Error('Method not implemented.');
  }

  raw({ level, action, description, apiKey, user, method, requestId, role, type, params, bodies, path, statusCode, tags }: LoggerCreateRawDto): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
