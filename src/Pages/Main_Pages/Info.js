import React from 'react'
// import BasicModal from '../../Component/Modal'
import Weather from '../../Component/Weather'
import Lottie from '../../Component/Lottie'
import weather from '../../static/weather-lottie.json' 
import News from '../../Component/News'

const Info = () => {
  return (
    <div className='info'>
      <div className='weather-lottie'>
        <Lottie data={weather} height={`300px`} width={`300px`}/>
      </div>
      <Weather />
      <News />
    </div>
  )
}

export default Info