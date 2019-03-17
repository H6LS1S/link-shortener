import { Injectable } from '@nestjs/common';

import { ConfigService } from '../../config/config.service';

@Injectable()
export class LinksService {
	constructor(
		private readonly configService: ConfigService,
	){}

	async createPair() {
		return await 1;
	}

	async selectPair() {
		return await 1;
	}

	async updatePair() {
		return await 1;
	}

	async deletePair() {
		return await 1;
	}
}
