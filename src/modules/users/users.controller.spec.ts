import { Test, TestingModule } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { ConfigModule } from '../../config/config.module';
import { ConfigService } from '../../config/config.service';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('User controller', () => {
  let controller: UsersController;
  let service: UsersService;

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
      controllers: [UsersController],
      providers: [UsersService]
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', async () => {
		expect(await controller).toBeDefined();
    expect(await service).toBeDefined();
  });

  it('should be return create user', async () => {
    const result = 1;

    jest
      .spyOn(service, 'createUser')
      .mockImplementation(async () => result);

    expect(await controller.createUser()).toBe(result);
  });

  it('should be return select user', async () => {
    const result = 1;

    jest
      .spyOn(service, 'selectUser')
      .mockImplementation(async () => result);

    expect(await controller.selectUser()).toBe(result);
  });

  it('should be return update user', async () => {
    const result = 1;

    jest
      .spyOn(service, 'updateUser')
      .mockImplementation(async () => result);

    expect(await controller.updateUser()).toBe(result);
  });

  it('should be return delete user', async () => {
    const result = 1;

    jest
      .spyOn(service, 'deleteUser')
      .mockImplementation(async () => result);

    expect(await controller.deleteUser()).toBe(result);
  });
});
