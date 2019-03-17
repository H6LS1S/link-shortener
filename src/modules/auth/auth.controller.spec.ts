import { Test, TestingModule } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { ConfigModule } from '../../config/config.module';
import { ConfigService } from '../../config/config.service';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

describe('Auth controller', () => {
	let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
			imports: [
				ConfigModule,

		    PassportModule.registerAsync({
		      imports: [ConfigModule],
		      useFactory: (configService: ConfigService) => ({
		        defaultStrategy: configService.getSetting('NEST_DEF_STRATEGY'),
						session: configService.getSetting('NEST_DEF_SESSION')
		      }),
		      inject: [ConfigService],
		    }),

		    JwtModule.registerAsync({
		      imports: [ConfigModule],
		      useFactory: (configService: ConfigService) => ({
		        secretOrPrivateKey: configService.getSetting('JWT_SECRET_KEY'),
		        signOptions: {
		          expiresIn: configService.getSetting('JWT_EXPIRES_TIME'),
		        },
		      }),
		      inject: [ConfigService],
		    }),

		  ],
      controllers: [AuthController],
			providers: [JwtStrategy, AuthService]
    }).compile();

		controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

	it('should be defined', async () => {
		expect(await controller).toBeDefined();
    expect(await service).toBeDefined();
  });

  it('should be return create token', async () => {
    const result = 1;

    jest
      .spyOn(service, 'createToken')
      .mockImplementation(async () => result);

    expect(await controller.createToken()).toBe(result);
  });

  it('should be return select token', async () => {
    const result = 1;

    jest
      .spyOn(service, 'selectToken')
      .mockImplementation(async () => result);

    expect(await controller.selectToken()).toBe(result);
  });

  it('should be return update token', async () => {
    const result = 1;

    jest
      .spyOn(service, 'updateToken')
      .mockImplementation(async () => result);

    expect(await controller.updateToken()).toBe(result);
  });

  it('should be return delete token', async () => {
    const result = 1;

    jest
      .spyOn(service, 'deleteToken')
      .mockImplementation(async () => result);

    expect(await controller.deleteToken()).toBe(result);
  });
});
