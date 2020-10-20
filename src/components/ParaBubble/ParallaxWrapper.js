import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Ball from './Ball';

function ParallaxWrapper() {
  const [width, setWidth] = useState(window.innerWidth)
  const pages = 2;
  const numBalls = 200;


  let ballArr = new Array(numBalls)
  for (let i=0, j = ballArr.length; i < j; i++) {
    ballArr[i] = i;
  }


  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);
  }, [])


  let key=0;
  return (
    <>
      <Parallax pages={pages} scrolling={true}>
        {ballArr.map(() => {
    const randOffset = (Math.floor(Math.random() * (pages * 1000))) / 1000;
    const randRed = Math.floor(Math.random() * 256);
    const randGreen = Math.floor(Math.random() * 256);
    const randBlue = Math.floor(Math.random() * 256);
    const randTransparency = (Math.floor(Math.random() * 100) + 1) / 100
    const randSpeed = (Math.random() * 5) - 2.5
    let randLeft = Math.random()
    const randSize = Math.floor(Math.random() * 50) + 25

    return (
      <Ball
        key={key++}
        offset={randOffset}
        speed={randSpeed}
        backgroundColor={`rgba(${randRed}, ${randGreen}, ${randBlue}, ${randTransparency})`}
        left={`${randLeft * width - 50}px`}
        padding={randSize}
      />
    )

  })}
      </Parallax>
    </>
  )
}

export default ParallaxWrapper;