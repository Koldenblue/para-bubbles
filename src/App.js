import React from 'react';
import ParallaxWrapper from './components/ParaBubble/ParallaxWrapper';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextBox from './components/TextBox';
import ScrollReminder from './components/ScrollReminder';

function App() {


  return (
    <>
      <div className='container-fluid'>
        <ScrollReminder />
        <ParallaxWrapper />
        <TextBox />
      </div>
    </>
  );
}

export default App;
