import { LoggerCreateDto, LoggerCreateRawDto } from '../dto/logger.create..dto';

export interface ILoggerService {
  info({ action, description, apiKey, user, method, requestId, role, type, params, bodies, path, statusCode, tags }: LoggerCreateDto): Promise<any>;

  debug({ action, description, apiKey, user, method, requestId, role, type, params, bodies, path, statusCode, tags }: LoggerCreateDto): Promise<any>;

  warn({ action, description, apiKey, user, method, requestId, role, type, params, bodies, path, statusCode, tags }: LoggerCreateDto): Promise<any>;

  fatal({ action, description, apiKey, user, method, requestId, role, type, params, bodies, path, statusCode, tags }: LoggerCreateDto): Promise<any>;

  raw({ level, action, description, apiKey, user, method, requestId, role, type, params, bodies, path, statusCode, tags }: LoggerCreateRawDto): Promise<any>;
}
