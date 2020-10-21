import React from 'react';
import ParallaxWrapper from './components/ParaBubble/ParallaxWrapper';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import 'bootstrap/dist/css/bootstrap.min.css';
import GifBox from './components/GifBox';
import OptionsBox from './components/OptionsBox';

function App() {
  const pages = 2;

  return (
    <>
      <div className='container-fluid'>
      <Parallax pages={pages} scrolling={true} className='para-container'>

        <ParallaxWrapper pages={pages}/>
        <GifBox />
        <OptionsBox />
      </Parallax>
      </div>
    </>
  );
}

export default App;
