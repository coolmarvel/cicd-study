import { ENUM_LOGGER_ACTION, ENUM_LOGGER_LEVEL } from '../constant/logger.enum.constant';

export class LoggerCreateDto {
  action: ENUM_LOGGER_ACTION;
  description: string;
  apiKey?: string;
  user?: string;
  requestId: string;
  method: '';
  path: string;
  role?: string;
  type?: '';
  tags?: string[];
  params?: Record<string, any>;
  bodies?: Record<string, any>;
  statusCode?: number;
}

export class LoggerCreateRawDto extends LoggerCreateDto {
  level: ENUM_LOGGER_LEVEL;
}
