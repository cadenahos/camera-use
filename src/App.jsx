import { useState } from 'react';
import './App.css';
import { Webcam } from '@webcam/react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Webcam />
    </>
  );
}

export default App;
