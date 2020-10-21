import React, { useState } from 'react';
import ParallaxWrapper from './components/ParaBubble/ParallaxWrapper';
import { Parallax } from 'react-spring/renderprops-addons';
import 'bootstrap/dist/css/bootstrap.min.css';
import GifBox from './components/GifBox';
import OptionsBox from './components/OptionsBox';
import ScrollReminder from './components/ScrollReminder';

function App() {
  const [numBubbles, setNumBubbles] = useState(200)
  const [grayscale, setGrayscale] = useState(false)
  const pages = 2.1;
  const [numberWarning, setNumberWarning] = useState(<></>)

  const handleOptionsSubmit = (event) => {
    event.preventDefault();
    if (event.target[0].value === '') {
      setNumberWarning(<h4>Current number of bubbles is {numBubbles}</h4>)
      setGrayscale(event.target[1].checked)
    }
    else {
      let newNumBubbles = Number(event.target[0].value)
      if (isNaN(newNumBubbles)) {
        console.log('not a number');
        setNumberWarning(<h4>Please enter a number from 0 to 300!</h4>)
      }
      else if (newNumBubbles > 300 || newNumBubbles < 0) {
        console.log('btwn 0 and 300');
        setNumberWarning(<h4>Please enter a number from 0 to 300!</h4>)
      } 
      else {
        setNumBubbles(newNumBubbles);
        setNumberWarning(<></>)
      }
      setGrayscale(event.target[1].checked)
    }
  }


  return (
    <>
      <div className='container-fluid'>
      <Parallax pages={pages} scrolling={true} className='parallax-container'>

        <ScrollReminder />
        <ParallaxWrapper pages={pages} numBubbles={numBubbles} grayscale={grayscale}/>
        <GifBox />
        <OptionsBox handleOptionsSubmit={handleOptionsSubmit} numberWarning={numberWarning}/>
      </Parallax>
      </div>
    </>
  );
}

export default App;
