import React from "react";
import MovieFullCard from "../MovieFullCard/MovieFullCard";
import style from "./style.module.css";

export default function MoviesFullPanel({movies, movieFullCardCallBack}){
    if (!movies || movies.length === 0) {
        return <div></div>;
    }
    return(
        <div className={style.container}>
            
            {movies.map((movie, index) => (
                <MovieFullCard
                    key={index} 
                    movie={movie}
                    callBack={movieFullCardCallBack}
                />
            ))}

        </div>
    )
}