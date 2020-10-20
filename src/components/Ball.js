import React, { useState } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import {useSpring, animated} from 'react-spring'

function Ball(props) {
  // const [toggle, setToggle] = useState(false);

  // const toggleGrow = () => {
  //   setToggle(!toggle);
  //   console.log(toggle)
  // }

  // let grow = useSpring({
  //   x: toggle ? 100 : 0    
  // })

  // console.log(grow)
  // console.log(grow.x)

  let styles = {
    ball: {
      backgroundColor: props.backgroundColor,
      // padding: `${props.padding + (toggle ? 50 : 0)}px`,
      padding: `${props.padding}px`,
      height: '50px',
      width: `${50}px`,
      borderRadius: '1000px',

    }
  }



  return (
    <>
        <ParallaxLayer offset={props.offset} speed={props.speed} style={{left:props.left}} >
          <div style={styles.ball} ></div>
        </ParallaxLayer>
    </>
  )
}

export default Ball;