import {MigrationInterface, QueryRunner} from "typeorm";

export class user1666648655725 implements MigrationInterface {
    name = 'user1666648655725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "religion"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "religion" character varying NOT NULL`);
    }

}
