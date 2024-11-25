import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('reviews') 
export class Review {
    @PrimaryGeneratedColumn() 
    id?: number;

    @Column()
    imdbID: string = "";

    @Column('bytea') 
    audio?: Buffer; 
}
