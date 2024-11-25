import React, { useState, useRef } from 'react';
import { saveReviewInLibrary } from '../../services/Review.service';

export default function AudioRecordPanel({movie}) {
    
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const [error, setError] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const startRecording = async () => {
        setError(null);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                const url = URL.createObjectURL(audioBlob);
                setAudioURL(url);
                audioChunksRef.current = [];
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch (err) {
            setError('Microphone access denied or not supported.');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const saveRecording = async () => {
        if (audioURL) {
            try {
                // Fetch the audio blob from the audioURL
                const response = await fetch(audioURL);
                const audioBlob = await response.blob();
    
                // Create FormData and append audio and imdbID
                const formData = new FormData();
                formData.append('imdbID', movie.imdbID); // Pass movie's imdbID
                formData.append('audio', audioBlob, 'recording.wav'); // Append audio blob with filename
    
                // Call the service to save the review
                const result = await saveReviewInLibrary(formData);
    
                if (result && result.success) {
                    alert('Recording saved successfully!');
                } else {
                    alert('Failed to save the recording.');
                }
            } catch (error) {
                console.error('Error saving recording:', error);
                alert('An error occurred while saving the recording.');
            }
        } else {
            alert('No audio recorded to save.');
        }
    };
    

    return (
        <div>
            <h1>Audio Recorder</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div>
                {!isRecording ? (
                    <button onClick={startRecording}>Start Recording</button>
                ) : (
                    <button onClick={stopRecording}>Stop Recording</button>
                )}
            </div>

            {audioURL && (
                <div>
                    <h2>Playback</h2>
                    <audio src={audioURL} controls></audio>
                    <button onClick={saveRecording}>Save Recording</button>
                </div>
            )}
        </div>
    );
};

