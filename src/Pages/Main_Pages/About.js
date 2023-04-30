import React from 'react'
import Features from '../../Component/Features'
import image1 from '../../images/2.jpg'

export const About = () => {
  return (
    <div>
      <Features title='Crop-Prediction' url={image1} body='crop-prediction' nav='/main/crop'/>
    </div>
  )
}
