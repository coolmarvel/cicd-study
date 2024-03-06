import { Injectable, NestMiddleware, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AppMaintenanceMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const maintenance: boolean = this.configService.get<boolean>('app.maintenance');

    if (maintenance) throw new ServiceUnavailableException({ statusCode: new Error(), message: 'http.serverError.serviceUnavailable' });

    next();
  }
}
