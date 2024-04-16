import { useState, useRef } from 'react';
import './App.css';
import { Webcam } from '@webcam/react';
import html2canvas from 'html2canvas';
import {Modal} from '@mui/material';
const Camera = ({setOpenModal}) => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capture = async () => {
    const canvas = await html2canvas(document.querySelector("#capture"));
    const imgData = canvas.toDataURL('image/png');
    setImageSrc(imgData);
    console.log('data', imgData);
    setOpenModal(false);
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
};

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button onClick={() => setOpenModal(true)}>Open Camera</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
            <Camera setOpenModal={setOpenModal} />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default App;
