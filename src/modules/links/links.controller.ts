import { Controller, UseGuards } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
	constructor(private readonly linksService: LinksService) {}

	@Post()
	@UseGuards(AuthGuard())
	async createPair(): Promise<any> {
		return await this.linksService.createPair();
	}

	@Get()
	@UseGuards(AuthGuard())
	async selectPair(): Promise<any> {
		return await this.linksService.selectPair();
	}

	@Put()
	@UseGuards(AuthGuard())
	async updatePair(): Promise<any> {
		return await this.linksService.updatePair();
	}

	@Delete()
	@UseGuards(AuthGuard())
	async deletePair(): Promise<any> {
		return await this.linksService.deletePair();
	}
}
