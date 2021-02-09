/**
 * Arquivos .model, são arquivos que representam objetos que são usados no servidor. Quando recebem "anotations" eles passam a ser Entidades
 * Basicamente, uma entidade mostra como um modelo vai ser persistido no banco de dados.
 */

import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('appointments') //Relacionar modelo à tabela do banco de dados usando decorator
class Appointment {

    @PrimaryGeneratedColumn('uuid') // Decorator que define qual a PK da tabela do banco de dados
    id: string;
    
    @Column()
    provider_id: string;
    
    @Column()
    name: string;
    
    @Column('timestamp with time zone') // Decorator para definir tipo data no banco
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Appointment;