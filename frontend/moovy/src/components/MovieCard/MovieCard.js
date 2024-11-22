import React from "react";
import style from './style.module.css';

export default function MovieCard({movie}){
    return(
        <div className={style.card}>
            <img src={style.Poster}></img>
            <div className={style.titleHolder}>
                <div className={style.title}> {movie.Title}</div>
                <div className={style.ratingHolder}>
                    <img src="star.svg"></img>
                    <div className={style.rating}>{movie.Rating}</div>
                </div>
                <button className={style.addButton}>
                    Add to My Library
                </button>
            </div>
        </div>
    );
}