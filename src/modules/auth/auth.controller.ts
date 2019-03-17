import { Controller, UseGuards } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  async createToken(): Promise<any> {
    return await this.authService.createToken();
  }

  @Get('token')
	async selectToken(): Promise<any> {
    return await this.authService.selectToken();
  }

	@Put('token')
	@UseGuards(AuthGuard())
	async updateToken(): Promise<any> {
		return await this.authService.updateToken();
	}

	@Delete('token')
	@UseGuards(AuthGuard())
	async deleteToken(): Promise<any> {
		return await this.authService.deleteToken();
	}
}
