import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('tariffs')
class Tariff {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    origin: string;

    @Column()
    destiny: string;

    @Column('decimal')
    tax: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Tariff;