import React from 'react'
import { myList } from "../../crop-list";
import '../../Styles/Result.css';
import cropresult from '../../static/crop-result.json'
import Lottie from '../../Component/Lottie'
import { useEffect, useState } from 'react';





const Result = ({ crop }) => {

  console.log(crop)

  const filtered = myList.filter(curr => {
    return curr.name === crop;
  });

  return (
    <>
      <div className='result-predict-crop'>
        <div className='result-predict-crop-layer'>
          {filtered.map(curr => {
            return (
              <div key={curr.id}>
                <img src={curr.src} alt={curr.name} id='result-crop-img'/>
                <h1 id='result-crop-name-txt'>Predicted Crop: {curr.name}</h1>
                <p  id='result-crop-period-txt'>{curr.Period}</p>
                <div className='result-desc-txt'>
                <p className='result-txt' id='result-crop-desc-txt'>{curr.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Result
