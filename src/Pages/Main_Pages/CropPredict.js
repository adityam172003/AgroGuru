import React from 'react'
import '../../Styles/cropPredicat.css';
import Slider from '../../Component/Slider';
import NurseryImages from '../../NurseryImages';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import croppredictlogo from '../../static/crop-prediction.json'
import Lottie from '../../Component/Lottie'
import Result from './Result';



function CropPredict() {


  const url = `Sarthak01.pythonanywhere.com`;


  return (
    <>
      <section id="crop_predict_pag">
        <section id='top-crop-pred-bg'>
          <div className='crop-pred-bg'>
            <div className='crop-pred-bg-layer'>
              <div id='content-crop'>
                <h2>Get your <br/> <span id='crp_text'>Crop Predicted<span>🌿</span></span></h2>
                <p>Here, we provide valuable information and insights to help you make <br/> informed decisions about crop selection and cultivation</p>
              </div>
              <div className='content-crp-jif'> 
              <Lottie id="lottie-crop-pred" data={croppredictlogo} height={'23rem'}  width={'23rem'}/>
              </div> 
           </div>
          </div>
        </section>

        {/* <div id>
          <h1 id='maintext'>Crop Predication<span>🌿</span></h1>
        </div> */}
        <section id='maincontainer'>
          <div id='form-img-wrap'>
            <div id="form-img">
              <Result crop={"Blackgram"}/>
            </div> 
          </div>
          <div id="form-content">
            <div id='form-crop-pred-title'>
              <h2>Predict Crop</h2>
            </div>
            <form >
              <div className='form1' >

                <div className='crop_pred_att'><input type="number" id="Nitrogen" name="Nitrogen" placeholder="Enter Nitrogen" /></div>

                <div className='crop_pred_att'><input type="number" id="Phosporus" name="Phosporus" placeholder="Enter Phosphorus" /></div>

                <div className='crop_pred_att'><input type="number" id="Potassium" name="Potassium" placeholder="Enter Potassium" /></div>

                <div className='crop_pred_att'><input type="number" id="Temperature" name="Temperature" placeholder="Enter Temperature" /></div>

                <div className='crop_pred_att'><input type="number" id="Humidity" name="Humidity" placeholder="Enter Humidity" /></div>

                <div className='crop_pred_att'><input type="number" id="pH" name="pH" placeholder="Enter pH" /></div>

                <div className='crop_pred_att'><input type="number" id="Rainfall" name="Rainfall" placeholder="Enter Rainfall" /></div>
                <div className='crop_pred_att'><button id="crop-pred-btn">Get Prediction</button></div>
              </div>

            </form>

          </div>

        </section>

      </section>
    </>
  )
}

export default CropPredict