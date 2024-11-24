import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import style from "./style.module.css";

export default function MoviesPanel({movies,movieCardCallback}){
    if (!movies || movies.length === 0) {
        return <div></div>;
    }
    
    return(
        <div className={style.container}>
            
            {movies.map((movie, index) => (
                <MovieCard
                    key={index} 
                    movie={movie}
                    callback={movieCardCallback}
                />
            ))}

        </div>
    )
}