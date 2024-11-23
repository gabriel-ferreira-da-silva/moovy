import React from "react";
import style from './style.module.css';
import starIcon from './star.svg'; 

export default function MovieCard({movie,callback}){
    return(
        <div className={style.card}>
            <img className={style.poster} src={movie.Poster}></img>
            <div className={style.titleHolder}>
                <div className={style.title}> {movie.Title}</div>
                <div className={style.ratingHolder}>
                    <img src={starIcon} className={style.ratingIcon}></img>
                    <div className={style.rating}>{movie.Rating}</div>
                </div>
                
            </div>
            <div className={style.addButton} onClick={() => callback(movie.imdbID)}>
                Add to My Library
            </div>
        </div>
    );
}