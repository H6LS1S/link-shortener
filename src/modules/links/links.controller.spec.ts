import { Test, TestingModule } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { ConfigModule } from '../../config/config.module';
import { ConfigService } from '../../config/config.service';

import { LinksController } from './links.controller';
import { LinksService } from './links.service';

describe('Pair controller', () => {
  let controller: LinksController;
  let service: LinksService;

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
      controllers: [LinksController],
      providers: [LinksService]
    }).compile();

    controller = module.get<LinksController>(LinksController);
    service = module.get<LinksService>(LinksService);
  });

  it('should be defined', async () => {
		expect(await controller).toBeDefined();
    expect(await service).toBeDefined();
  });

  it('should be return create links', async () => {
    const result = 1;

    jest
      .spyOn(service, 'createPair')
      .mockImplementation(async () => result);

    expect(await controller.createPair()).toBe(result);
  });

  it('should be return select links', async () => {
    const result = 1;

    jest
      .spyOn(service, 'selectPair')
      .mockImplementation(async () => result);

    expect(await controller.selectPair()).toBe(result);
  });

  it('should be return update links', async () => {
    const result = 1;``

    jest
      .spyOn(service, 'updatePair')
      .mockImplementation(async () => result);

    expect(await controller.updatePair()).toBe(result);
  });

  it('should be return delete links', async () => {
    const result = 1;

    jest
      .spyOn(service, 'deletePair')
      .mockImplementation(async () => result);

    expect(await controller.deletePair()).toBe(result);
  });
});
