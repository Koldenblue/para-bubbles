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
    <animated.div className='scroll-banner' style={fadeIn}>Scroll Down!</animated.div>
  </>)
}

export default ScrollReminder;