import { useState, useRef } from 'react';
import './App.css';
import { Webcam } from '@webcam/react';
import html2canvas from 'html2canvas';

function App() {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capture = async () => {
    const canvas = await html2canvas(document.querySelector("#capture"));
    const imgData = canvas.toDataURL('image/png');
    setImageSrc(imgData);
    console.log('data', imgData)
  };

  return (
    <>
      <div id="capture">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/png"
          videoConstraints={{
            facingMode: { exact: "environment" }
          }}
        />
      </div>
      <button onClick={capture}>Capture Photo</button>
      {imageSrc && <img src={imageSrc} alt="captured" />}
    </>
  );
}

export default App;
