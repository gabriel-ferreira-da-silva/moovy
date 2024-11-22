import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import style from "./style.module.css";

export default function MoviesPanel({movies}){
    return(
        <div className={style.container}>
            
            {movies.map((movie, index) => (
                <MovieCard
                    key={index} 
                    movie={movie}
                />
            ))}

        </div>
    )
}