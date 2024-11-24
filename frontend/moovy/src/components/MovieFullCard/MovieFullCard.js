import React from "react";
import style from './style.module.css';
import starIcon from './star.svg'; 

export default function MovieFullCard({movie, callBack}){

    movie.title = movie.title.length > 33 ? movie.title.slice(0, 30) + "..." : movie.title;

    return(
        <div className={style.card}>
            <img className={style.poster} src={movie.poster}></img>
            <div className={style.titleHolder}>
                <div className={style.title}> {movie.title}</div>
                <div className={style.ratingHolder}>
                    <img src={starIcon} className={style.ratingIcon}></img>
                    <div className={style.rating}>{movie.imdbRating}</div>
                </div>
                
            </div>
            <div className={style.deleteButton} onClick={() => callBack(movie.imdbID)}>
                delete
            </div>
        </div>
    );
}