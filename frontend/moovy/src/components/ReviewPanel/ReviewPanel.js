import React from "react";
import { useState } from "react";
import style from './style.module.css';

export default function ReviewPanel({movie,isPanelOpen,setIsPanelOpen}){

    const togglePanel = () => {
      setIsPanelOpen(!isPanelOpen);
    };
  

    return(
        <div className={style.panel}>
          <div className={style.panelContent}>
            <h3>Audio Review for {movie.title}</h3>
            
            <button className={style.closeButton} onClick={togglePanel}>
              Close
            </button>
          </div>
        </div>
    );

}