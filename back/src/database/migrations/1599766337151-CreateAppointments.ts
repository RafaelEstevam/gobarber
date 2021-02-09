/**
 * Aquivos na pasta /migrations estão relacionados à estrutura do banco de dados. Basicamente são arquivos SQL traduzidos para Typescript.
 * Usar o comando yarn typeorm migration:create -n NomeDaClasseRelacionadaATabela para criar o arquivo referente à tabela no diretório.
 */

import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAppointments1599766337151 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'appointments',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid', //Gera o id de forma automática usando um hash aleatório.
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'provider_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'date',
                        type: 'timestamp with time zone', // fuso-horário,
                        isNullable: false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> { // Rollback das alterações feitas
        await queryRunner.dropTable('appointments');
    }

}
