import React, {useEffect} from 'react';
import lottie from 'lottie-web';
// import croplogo from '../static/crop-logo.json'

export default function Lottie({data, height, width}) {
    useEffect(() => {
      lottie.loadAnimation({
        container: document.querySelector("#crop-logo"),
        animationData: data
      });
    }, []);
  
    return (
      <div>
        <div id="crop-logo" style={{ width: width, height: height }} />
      </div>
    );
}