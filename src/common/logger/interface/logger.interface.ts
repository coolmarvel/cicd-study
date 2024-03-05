import { ENUM_LOGGER_LEVEL } from '../constant/logger.enum.constant';

export interface ILoggerOptions {
  description?: string;
  tags?: string[];
  level?: ENUM_LOGGER_LEVEL;
}
