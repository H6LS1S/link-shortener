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
		return await 1;
  }

	async selectToken() {
		return await 1;
	}

	async updateToken() {
		return await 1;
	}

	async deleteToken() {
		return await 1;
	}

  private async validateToken(payload: JwtPayload): Promise<any> {
    return await 1;
  }
}
