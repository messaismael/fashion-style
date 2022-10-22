import { MigrationInterface, QueryRunner } from "typeorm";

export class createUser1666398576490 implements MigrationInterface {
    name = 'createUser1666398576490'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
    }

}
