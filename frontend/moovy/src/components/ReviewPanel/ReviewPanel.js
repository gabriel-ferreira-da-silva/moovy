import React from "react";
import { useState } from "react";
import style from './style.module.css';
import AudioRecordPanel from "../AudioRecordPanel/AudioRecordPanel";

export default function ReviewPanel({movie,isPanelOpen,setIsPanelOpen}){

    const [review, setReview] = useState(null);
    const togglePanel = () => {
      setIsPanelOpen(!isPanelOpen);
    };

  

    return(
        <div className={style.panel}>
          <div className={style.panelContent}>
            <h3>Audio Review for {movie.title}</h3>
            {
                review?
                <div></div>
                :
                <AudioRecordPanel
                movie={movie}
                ></AudioRecordPanel>
            }
            <button className={style.closeButton} onClick={togglePanel}>
              Close
            </button>
          </div>
        </div>
    );

}