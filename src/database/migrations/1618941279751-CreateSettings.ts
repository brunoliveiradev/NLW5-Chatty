import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1618941279751 implements MigrationInterface {

    // Toda vez que for executado o comando run, será criado a tabela com os seguintes atributos
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "username",
                        type: "varchar",
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    // Quando for utilizado o comando reverte, as ações abaixo aconteceram, desfazendo as ações que foram feitas ao criar
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings");
    }
}