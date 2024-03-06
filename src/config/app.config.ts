import { version } from 'package.json';
import { registerAs } from '@nestjs/config';
import { APP_TZ } from 'src/app/constant/app.constant';
import { ENUM_APP_ENVIRONMENT } from 'src/app/constant/app.enum.constant';

export default registerAs(
  'app',
  (): Record<string, any> => ({
    maintenance: Boolean(process.env.APP_MAINTENANCE) === true ?? false,

    name: process.env.APP_NAME ?? 'coolmarvel',
    env: process.env.APP_ENV ?? ENUM_APP_ENVIRONMENT.DEVELOPMENT,

    tz: process.env.APP_TZ ?? APP_TZ,

    repoVersion: version,
    versioning: {
      enable: Boolean(process.env.HTTP_VERSIONING_ENABLE) === true ?? false,
      prefix: 'v',
      version: process.env.HTTP_VERSION ?? '1',
    },

    globalPrefix: '/api',
    http: {
      enable: Boolean(process.env.HTTP_ENABLE) === true ?? false,
      host: process.env.HTTP_HOST ?? 'localhost',
      port: Number(process.env.HTTP_PORT) ?? 3000,
    },

    jobEnable: Boolean(process.env.JOB_ENABLE) === true ?? false,
  }),
);
