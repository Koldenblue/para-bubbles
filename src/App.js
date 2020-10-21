import React from 'react';
import ParallaxWrapper from './components/ParaBubble/ParallaxWrapper';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import 'bootstrap/dist/css/bootstrap.min.css';
import GifBox from './components/GifBox';
import OptionsBox from './components/OptionsBox';
import ScrollReminder from './components/ScrollReminder';

function App() {
  const pages = 2.1;

  return (
    <>
      <div className='container-fluid'>
      <Parallax pages={pages} scrolling={true} className='parallax-container'>

        <ScrollReminder />
        <ParallaxWrapper pages={pages}/>
        <GifBox />
        <OptionsBox />
      </Parallax>
      </div>
    </>
  );
}

export default App;
