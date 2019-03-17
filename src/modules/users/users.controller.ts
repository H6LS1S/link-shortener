import { Controller, UseGuards } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get(':id')
	@UseGuards(AuthGuard('jwt'))
	async selectUser(): Promise<any> {
		return await this.usersService.selectUser();
	}

	@Post('create')
	@UseGuards(AuthGuard('jwt'))
	async createUser(): Promise<any> {
		return await this.usersService.createUser();
	}

	@Put()
	@UseGuards(AuthGuard('jwt'))
	async updateUser(): Promise<any> {
		return await this.usersService.updateUser();
	}

	@Delete()
	@UseGuards(AuthGuard('jwt'))
	async deleteUser(): Promise<any> {
		return await this.usersService.deleteUser();
	}
}
