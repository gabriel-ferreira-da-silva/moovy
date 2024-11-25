import React, { useState, useRef } from 'react';

const AudioPage = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const [error, setError] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]); // Remove the type annotation

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

    const saveRecording = () => {
        if (audioURL) {
            const link = document.createElement('a');
            link.href = audioURL;
            link.download = 'recording.wav';
            link.click();
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

export default AudioPage;
