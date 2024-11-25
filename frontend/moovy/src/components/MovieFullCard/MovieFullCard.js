import React, { useState } from "react";
import style from "./style.module.css";
import starIcon from "./star.svg";
import ReviewPanel from "../ReviewPanel/ReviewPanel";

export default function MovieFullCard({ movie, callBack }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false); // State for panel visibility

  const MovieTitle = movie.title.length > 33 ? movie.title.slice(0, 30) + "..." : movie.title;

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className={style.card}>
      <img className={style.poster} src={movie.poster} alt="Movie Poster"></img>
      <div className={style.titleHolder}>
        <div className={style.title}>{MovieTitle}</div>
        <div className={style.ratingHolder}>
          <img src={starIcon} className={style.ratingIcon} alt="Star Icon"></img>
          <div className={style.rating}>{movie.imdbRating}</div>
        </div>
      </div>
      <div className={style.audioHolder} onClick={togglePanel}>
        Play Review
      </div>
      <div className={style.deleteButton} onClick={() => callBack(movie.imdbID)}>
        Delete
      </div>

      {isPanelOpen && (
        <ReviewPanel
            movie={movie}
            isPanelOpen={isPanelOpen}
            setIsPanelOpen={setIsPanelOpen}
        ></ReviewPanel>
      )}
    </div>
  );
}
