import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ConfigService } from '../../config/config.service';
import { JwtPayload } from './interfaces/jwtPayload.interface';

@Injectable()
export class AuthService {
  constructor(
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService,
	) {}

  async createToken() {
    const user: JwtPayload = { email: 'test@email.com' };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: this.configService.getSetting('JWT_EXPIRES_TIME'),
      accessToken,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return {};
  }
}
