import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations, {bounce,bounceIn,bounceInDown,flip} from '@wellyshen/use-web-animations';

function App() {

  // const { ref, playState, getAnimation } = useWebAnimations({...bounce})
  // const { ref, playState, getAnimation } = useWebAnimations({...bounceInDown})
  // const { ref, playState, getAnimation } = useWebAnimations({...bounceIn})
  const { ref, playState, getAnimation } = useWebAnimations({...flip})

  const onHover = () => {
    getAnimation().play()
  }

  // const { ref, playState, getAnimation } = useWebAnimations({
  //   keyframes: [
  //     { transform: 'translate(0px,0px)' },
  //     { transform: 'translate(900px,0px)' },
  //     { transform: 'translate(0px,0px)' },
  //   ],
  //   timing: {
  //     duration: 3000,
  //     iterations: Infinity,
  //     direction: 'alternate',
  //     easing: 'ease-in-out',
  //     delay: 1000
  //   },
  //   onReady: ({ playState, animate, animation }) => {
  //     // Triggered when the animation is ready to play (Google Chrome: available in v84+)
  //   },
  //   onUpdate: ({ playState, animate, animation }) => {
  //     // Triggered when the animation enters the running state or changes state
  //   },
  //   onFinish: ({ playState, animate, animation }) => {
  //     // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
  //   },
  //   // More useful options...
  // })


  return (
    <div>
      <div className="target" ref={ref}  >
        <h3>Current Animation State: {playState}</h3>
      </div>
      <div className="btn-div">
        <button onClick={() => getAnimation().pause()}>Pause</button>
        <button onClick={() => getAnimation().play()}>Play</button>
      </div>
    </div>
  );
}

export default App;
