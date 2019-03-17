import { Injectable } from '@nestjs/common';

import { ConfigService } from '../../config/config.service';

@Injectable()
export class UsersService {
	constructor(
		private readonly configService: ConfigService,
	){}

  async createUser() {
    return await 1;
  }

	async selectUser() {
		return await 1;
	}

  async updateUser() {
    return await 1;
  }

  async deleteUser() {
    return await 1;
  }

}
