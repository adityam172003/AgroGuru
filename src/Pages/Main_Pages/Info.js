import React from 'react'
// import BasicModal from '../../Component/Modal'
import Weather from '../../Component/Weather'
import Lottie from '../../Component/Lottie'
import weather from '../../static/weather-lottie.json' 

const Info = () => {
  return (
    <div className='info'>
      <div className='weather-lottie'>
        <Lottie data={weather} height={`300px`} width={`300px`}/>
      </div>
      <Weather />
    </div>
  )
}

export default Info