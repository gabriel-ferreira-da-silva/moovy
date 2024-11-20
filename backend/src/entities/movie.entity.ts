import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('movies')
export  class Movie {
    @PrimaryColumn()
    imdbID: string;

    @Column()
    title: string;

    @Column({ nullable: true })
    year: string;

    @Column({ nullable: true })
    rated: string;

    @Column({ nullable: true })
    released: string;

    @Column({ nullable: true })
    runtime: string;

    @Column({ nullable: true })
    genre: string;

    @Column({ nullable: true })
    director: string;

    @Column({ nullable: true })
    writer: string;

    @Column({ nullable: true })
    actors: string;

    @Column({ nullable: true })
    plot: string;

    @Column({ nullable: true })
    language: string;

    @Column({ nullable: true })
    country: string;

    @Column({ nullable: true })
    awards: string;

    @Column({ nullable: true })
    poster: string;

    @Column({ nullable: true })
    metascore: string;

    @Column({ nullable: true })
    imdbRating: string;

    @Column({ nullable: true })
    imdbVotes: string;

    @Column({ nullable: true })
    type: string;

    @Column({ nullable: true })
    dvd: string;

    @Column({ nullable: true })
    boxOffice: string;

    @Column({ nullable: true })
    production: string;

    @Column({ nullable: true })
    website: string;

    @Column({ nullable: true })
    response: string;

    @Column({ nullable: true })
    error: string;
}
