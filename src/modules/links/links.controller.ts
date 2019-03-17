import { Controller, UseGuards } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
	constructor(private readonly linksService: LinksService) {}

	@Post()
	@UseGuards(AuthGuard('jwt'))
	async createPair(): Promise<any> {
		return await this.linksService.createPair();
	}

	@Get()
	@UseGuards(AuthGuard('jwt'))
	async selectPair(): Promise<any> {
		return await this.linksService.selectPair();
	}

	@Put()
	@UseGuards(AuthGuard('jwt'))
	async updatePair(): Promise<any> {
		return await this.linksService.updatePair();
	}

	@Delete()
	@UseGuards(AuthGuard('jwt'))
	async deletePair(): Promise<any> {
		return await this.linksService.deletePair();
	}
}
