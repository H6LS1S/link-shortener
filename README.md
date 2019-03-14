<p align="center">
	<a target="blank" href="https://nestjs.com/">
		<img height="60" src="https://raw.githubusercontent.com/HELSIS666/link-shortener/master/assets/images/modules/nestjs.png" />
	</a>
	<a target="blank" href="https://typeorm.io/">
		<img height="60" src="https://raw.githubusercontent.com/HELSIS666/link-shortener/master/assets/images/modules/typeorm.png" />
	</a>
	<a target="blank" href="https://www.docker.com/">
		<img height="60" src="https://raw.githubusercontent.com/HELSIS666/link-shortener/master/assets/images/modules/docker.png" />
	</a>
	<a target="blank" href="https://www.openapis.org/">
		<img height="60" src="https://raw.githubusercontent.com/HELSIS666/link-shortener/master/assets/images/modules/openapis.png" />
	</a>
</p>


## Description :book:

REST-API service witch visual documentation support API.
Allows users to reduce links to sources, and authorized users to
keep history and statistics.
Rest-API based in the
[NestJS framewerk](https://github.com/nestjs/nest) +
[TypeORM](https://github.com/typeorm/typeorm) +
[Some magic](https://www.docker.com/) :whale: +
[Swagger](https://github.com/nestjs/swagger)


## In future :bulb:

 - ~~DbSchema creation~~ :heavy_check_mark:
 - ~~Install and configure project ecosystem~~ :heavy_check_mark:
 - User entities creation and Authentication flow
 - Link initial flow
 - Full coverage
 - Migration to Docker container


## Installation :wrench:

```bash
$ npm install
```


## Test :coffee:

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Running the app :rocket:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Environment variable :space_invader:

The following are environment variables for different usage modules.
The prefixes for .env **can only** be:
 - For development: `development`
 - For testing: `test`
 - For production: `[ EMPTY ]`

### Server:
	NODE_TLS_REJECT_UNAUTHORIZED=0
	NEST_PORT=80
	NEST_API_PREFIX=/api/v1
	NEST_ROOT_URL=//localhost + NEST_API_PREFIX

### Authentication strategies:
	NEST_DEF_STRATEGY=jwt
	NEST_DEF_SESSION=false
	JWT_SECRET_KEY=testToken
	JWT_EXPIRES_TIME=3600

### TypeORM:
	TYPEORM_PORT=5432
	TYPEORM_CONNECTION=postgres
	TYPEORM_HOST=localhost
	TYPEORM_USERNAME=postgres
	TYPEORM_PASSWORD=postgres
	TYPEORM_DATABASE=link_exapmle
	TYPEORM_LOGGING=true
	TYPEORM_SYNCHRONIZE=true
	TYPEORM_DROP_SCHEMA=true
	TYPEORM_ENTITIES=src/modules/**/*.entity.ts
	TYPEORM_SUBSCRIBERS=src/modules/**/*.subscriber.ts
	TYPEORM_MIGRATIONS_DIR=src/database/migrations/
	TYPEORM_MIGRATIONS_TABLE_NAME=migration_project
	TYPEORM_ENTITIES=src/modules/**/*.entity.ts
	TYPEORM_MIGRATIONS_DIR=src/database/migrations/


## Support :octocat:

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors
and support by the amazing backers.
If you'd like to join them, please [read more here](https://docs.nestjs.com/support).


## License :scroll:

Nest is [MIT licensed](LICENSE).
