import React from 'react';
import {useSpring, animated} from 'react-spring';

function ScrollReminder() {

  let fadeIn = useSpring({
    opacity: 1,
    from: {
      opacity: 0
    },
    config: {
      friction: 200
    }
  })

  return (<>
    <animated.h1 className='scroll-banner' style={fadeIn}>Scroll Down!</animated.h1>
  </>)
}

export default ScrollReminder;