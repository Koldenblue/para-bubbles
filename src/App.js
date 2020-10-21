import React, { useState } from 'react';
import ParallaxWrapper from './components/ParaBubble/ParallaxWrapper';
import { Parallax } from 'react-spring/renderprops-addons';
import 'bootstrap/dist/css/bootstrap.min.css';
import GifBox from './components/GifBox';
import OptionsBox from './components/OptionsBox';
import ScrollReminder from './components/ScrollReminder';

function App() {
  const [numBubbles, setNumBubbles] = useState(200)

  const pages = 2.1;

  const handleOptionsSubmit = (event) => {
    event.preventDefault();
    let newNumBubbles = Number(event.target[0].value)
    if (isNaN(newNumBubbles)) {
      console.log('not a number')
    }
    else if (newNumBubbles > 300 || newNumBubbles < 0) {
      console.log('btwn 0 and 300')
    } 
    else {
      setNumBubbles(newNumBubbles)
    }


    console.log(event.target[1].checked)
  }

  return (
    <>
      <div className='container-fluid'>
      <Parallax pages={pages} scrolling={true} className='parallax-container'>

        <ScrollReminder />
        <ParallaxWrapper pages={pages} numBubbles={numBubbles}/>
        <GifBox />
        <OptionsBox handleOptionsSubmit={handleOptionsSubmit}/>
      </Parallax>
      </div>
    </>
  );
}

export default App;
