import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Movie } from './movie.entity'; 

@Entity('ratings')
export class Rating {
    @PrimaryColumn()
    imdbID: string="";

    @PrimaryColumn()
    source: string="";

    @Column()
    value: string="";

    @ManyToOne(() => Movie, (movie) => movie.ratings, { onDelete: 'CASCADE' })
    movie!: Movie;

}
