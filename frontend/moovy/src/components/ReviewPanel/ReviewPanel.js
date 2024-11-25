import React, { useEffect, useState } from "react";
import style from './style.module.css';
import AudioRecordPanel from "../AudioRecordPanel/AudioRecordPanel";
import { fetchReviewFromLibrary } from "../../services/Review.service";

export default function ReviewPanel({ movie, isPanelOpen, setIsPanelOpen }) {
    const [review, setReview] = useState(null);
    const [audioSrc, setAudioSrc] = useState(null);

    const togglePanel = () => {
        setIsPanelOpen(!isPanelOpen);
    };

    const fetchReview = async (imdbID) => {
        const response = await fetchReviewFromLibrary(imdbID);
        if (response?.result && response.result.length > 0) {
            const fetchedReview = response.result[0];
            setReview(fetchedReview);

            if (fetchedReview.audio?.data) {
                const audioBlob = new Blob([Uint8Array.from(fetchedReview.audio.data)], { type: "audio/wav" });
                const audioUrl = URL.createObjectURL(audioBlob);
                setAudioSrc(audioUrl);
            }
        }
    };

    useEffect(() => {
        fetchReview(movie.imdbID);
    }, [movie.imdbID]);

    return (
        <div className={style.panel}>
            <div className={style.panelContent}>
                <h3>Audio Review for {movie.title}</h3>
                <img className={style.posterImg} src={movie.poster} alt={`${movie.title} poster`} />
                {audioSrc ? (
                    <div className={style.audioPlayer}>
                        <h4>Review Audio</h4>
                        <audio src={audioSrc} controls></audio>
                    </div>
                ) : (
                    <AudioRecordPanel movie={movie} />
                )}
                <button className={style.closeButton} onClick={togglePanel}>
                    Close
                </button>
            </div>
        </div>
    );
}
