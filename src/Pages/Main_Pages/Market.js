import React from 'react'
import marketlogo from '../../static/market-lottie.json'
import Lottie from '../../Component/Lottie'

export const Market = () => {
  return (
    <>
      <Lottie data={marketlogo} height={`400px`} width={'100%'} />
      <h1>Market</h1>
    </>
  )
}
