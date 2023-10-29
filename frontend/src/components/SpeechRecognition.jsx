import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function SpeechRecognitionApp() {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening();
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <div>
      <h1>Speech Recognition</h1>
      <button className='border border-black' onClick={startListening} disabled={listening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!listening}>
        Stop Listening
      </button>
      <button onClick={resetTranscript}>
        Reset Transcript
      </button>
      <p>Listening: {listening ? 'Yes' : 'No'}</p>
      <p>Transcript: {transcript}</p>
    </div>
  );
}

export default SpeechRecognitionApp;
