import React from 'react';
import ParallaxWrapper from './components/ParaBubble/ParallaxWrapper';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className='container-fluid'>
      <ParallaxWrapper />
    </div>
  );
}

export default App;
