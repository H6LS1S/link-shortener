import { MigrationInterface, QueryRunner } from 'typeorm';

export class dev1552355904234 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "public"."Users" ("id" uuid NOT NULL, "name" character varying(26) NOT NULL, "email" character varying(230) NOT NULL, "password" character varying NOT NULL, "createAt" date NOT NULL, "updateAt" date NOT NULL, CONSTRAINT "PK_ac3c96e3c912cbda773b7c7edc9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "Users_name_key" ON "public"."Users" ("name") `,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "Users_email_key" ON "public"."Users" ("email") `,
    );
    await queryRunner.query(
      `CREATE TABLE "public"."Links" ("id" uuid NOT NULL, "full" character varying(2083) NOT NULL, "short" character varying(6), "createAt" date NOT NULL, "updateAt" date NOT NULL, "owner" uuid NOT NULL, CONSTRAINT "PK_0fc4ebbddd8b53d05f8cde5f2ca" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "Links_short_key" ON "public"."Links" ("short") `,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "Links_full_key" ON "public"."Links" ("full") `,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."Links" ADD CONSTRAINT "FK_0ded0c40303d77e48c436eb56cf" FOREIGN KEY ("owner") REFERENCES "public"."Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "public"."Links" DROP CONSTRAINT "FK_0ded0c40303d77e48c436eb56cf"`,
    );
    await queryRunner.query(`DROP INDEX "public"."Links_full_key"`);
    await queryRunner.query(`DROP INDEX "public"."Links_short_key"`);
    await queryRunner.query(`DROP TABLE "public"."Links"`);
    await queryRunner.query(`DROP INDEX "public"."Users_email_key"`);
    await queryRunner.query(`DROP INDEX "public"."Users_name_key"`);
    await queryRunner.query(`DROP TABLE "public"."Users"`);
  }
}
