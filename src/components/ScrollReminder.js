import React, { useEffect, useState } from 'react';
import {useSpring, animated} from 'react-spring';

function ScrollReminder() {
  const [hasScrolled, setHasScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      document.getElementsByClassName('parallax-container')[0].removeEventListener('scroll', handleScroll, {passive: true})
      setHasScrolled(true)

    }
    document.getElementsByClassName('parallax-container')[0].addEventListener('scroll', handleScroll, {passive: true})
  },[])


  let fadeIn = useSpring({
    opacity: hasScrolled ? 0 : 1,
    from: {
      opacity: hasScrolled ? 1 : 0
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