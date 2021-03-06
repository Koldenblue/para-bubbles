import React, { useEffect, useState } from 'react';
import Ball from './Ball';

function ParallaxWrapper(props) {
  const [width, setWidth] = useState(window.innerWidth)


  let ballArr = new Array(props.numBubbles)
  for (let i = 0, j = ballArr.length; i < j; i++) {
    ballArr[i] = i;
  }

  // window width used to distrubite Ball components
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);
  }, [])


  let key = 0;
  return (
    <>
      {ballArr.map(() => {
        const randOffset = (Math.floor(Math.random() * (props.pages * 1000))) / 1000;
        const randRed = Math.floor(Math.random() * 256);
        let randGreen;
        let randBlue;
        if (props.grayscale) {
          randGreen = randRed;
          randBlue = randRed;
        } else {
          randGreen = Math.floor(Math.random() * 256);
          randBlue = Math.floor(Math.random() * 256);
        }
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
    </>
  )
}

export default ParallaxWrapper;