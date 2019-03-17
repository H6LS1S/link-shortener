import { Controller, UseGuards } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	@UseGuards(AuthGuard())
	async createUser(): Promise<any> {
		return await this.usersService.createUser();
	}

	@Get()
	@UseGuards(AuthGuard())
	async selectUser(): Promise<any> {
		return await this.usersService.selectUser();
	}

	@Put('setting')
	@UseGuards(AuthGuard())
	async updateUser(): Promise<any> {
		return await this.usersService.updateUser();
	}

	@Delete('delete')
	@UseGuards(AuthGuard())
	async deleteUser(): Promise<any> {
		return await this.usersService.deleteUser();
	}
}
