import { registerAs } from '@nestjs/config';
import { APP_LANGUAGE } from 'src/app/constant/app.constant';
import { ENUM_MESSAGE_LANGUAGE } from 'src/common/message/constant/message.enum.constant';

export default registerAs(
  'message',
  (): Record<string, any> => ({
    availableLanguage: Object.values(ENUM_MESSAGE_LANGUAGE),
    language: process.env.APP_LANGUAGE ?? APP_LANGUAGE,
  }),
);
