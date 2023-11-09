import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';
import { JWTConfig } from 'config/jwt.config';
import { UNAUTHORIZED } from 'utils/error-messages';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException([UNAUTHORIZED]);
    }
    try {
      const { userId } = jwt.verify(token, JWTConfig.SECRET) as {
        userId: string;
      };
      request['id'] = userId;
    } catch {
      throw new UnauthorizedException([UNAUTHORIZED]);
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
