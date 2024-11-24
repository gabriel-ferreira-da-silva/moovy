DO
$$
BEGIN
    IF NOT EXISTS (
        SELECT FROM pg_database WHERE datname = 'moovydb'
    ) THEN
        PERFORM dblink_exec('dbname=postgres', 'CREATE DATABASE moovydb');
    END IF;
END
$$;

\c moovydb

DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
    imdbID TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    year TEXT,
    rated TEXT,
    released TEXT,
    runtime TEXT,
    genre TEXT,
    director TEXT,
    writer TEXT,
    actors TEXT,
    plot TEXT,
    language TEXT,
    country TEXT,
    awards TEXT,
    poster TEXT,
    metascore TEXT,
    imdbRating TEXT,
    imdbVotes TEXT,
    type TEXT,
    dvd TEXT,
    boxOffice TEXT,
    production TEXT,
    website TEXT,
    response TEXT,
    error TEXT
);

DROP TABLE IF EXISTS ratings;
CREATE TABLE IF NOT EXISTS ratings (
    imdbID TEXT NOT NULL,
    source TEXT,
    value TEXT,
    PRIMARY KEY (imdbID, source), 
    FOREIGN KEY (imdbID) REFERENCES movies(imdbID) ON DELETE CASCADE
);


DROP TABLE IF EXISTS reviews;
CREATE TABLE IF NOT EXISTS reviews (
    id serial,
    imdbID TEXT NOT NULL,
    audio bytea,
    PRIMARY KEY (id), 
    FOREIGN KEY (imdbID) REFERENCES movies(imdbID) ON DELETE CASCADE
);
