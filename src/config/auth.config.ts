import { registerAs } from '@nestjs/config';
import { seconds } from 'src/common/helper/constant/helper.function.constant';

export default registerAs(
  'auth',
  (): Record<string, any> => ({
    accessToken: {
      secretKey: process.env.AUTH_JWT_ACCESS_TOKEN_SECRET_KEY ?? '123456',
      expirationTiime: seconds(process.env.AUTH_JWT_ACCESS_TOKEN_EXPIRED ?? '1h'),

      encryptKey: process.env.AUTH_JWT_PAYLOAD_ACCESS_TOKEN_ENCRYPT_KEY,
      encryptIv: process.env.AUTH_JWT_PAYLOAD_ACCESS_TOKEN_ENCRYPT_IV,
    },

    refreshToken: {
      secretKey: process.env.AUTH_JWT_REFRESH_TOKEN_SECRET_KEY ?? '123456000',
      expirationTime: seconds(process.env.AUTH_JWT_REFRESH_TOKEN_EXPIRED ?? '182d'),

      encryptKey: process.env.AUTH_JWT_PAYLOAD_REFRESH_TOKEN_ENCRYPT_KEY,
      encryptIv: process.env.AUTH_JWT_PAYLOAD_REFRESH_TOKEN_ENCRYPT_IV,
    },

    subject: process.env.AUTH_JWT_SUBJECT ?? 'CoolMarvelDevelopment',
    audience: process.env.AUTH_JWT_AUDIENCE ?? 'https://example.com',
    issuer: process.env.AUTH_JWT_ISSUER ?? 'coolmarvel',
    prefixAuthorization: 'Bearer',
    payloadEncryption: Boolean(process.env.AUTH_JWT_PAYLOAD_ENCRYPT) === true ?? false,

    password: { attempt: false, maxAttempt: 5, saltLength: 8, expiredIn: seconds('182d') },
  }),
);
