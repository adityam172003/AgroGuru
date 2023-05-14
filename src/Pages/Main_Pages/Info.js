import React from 'react'
// import BasicModal from '../../Component/Modal'
import Weather from '../../Component/Weather'
// import Lottie from '../../Component/Lottie'
// import weather from '../../static/weather-lottie.json' 

const Info = () => {
  return (
    <div className='info'>
      {/* <Lottie data={weather} height={`300px`} width={`300px`} className='weather-lottie'/> */}
      <Weather />
    </div>
  )
}

export default Info