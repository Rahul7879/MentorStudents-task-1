import React, { useState } from 'react'
import { useReactMediaRecorder } from "react-media-recorder";

const Logedin = () => {
   
    const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({video: true, audio: true, screen: true});

   

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video style={{width: "500px"}} src={mediaBlobUrl} controls autoPlay loop />

    </div>

  );
}

export default Logedin