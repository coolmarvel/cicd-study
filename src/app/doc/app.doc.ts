import { applyDecorators } from '@nestjs/common';

export function AppHelloDoc(): MethodDecorator {
  return applyDecorators();
}
