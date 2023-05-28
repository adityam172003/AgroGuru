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

  const url = 'http://sarthak01.pythonanywhere.com';

  const [vals, setvals] = useState({});

  const [cro, setcrop] = useState("Crop Predication")
  const getPrediction = async () => {
    axios.get(url, {
      params: {
        Nitrogen: JSON.parse(vals.Nitrogen),
        Phosphorus: JSON.parse(vals.Phosporus),
        Potassium: JSON.parse(vals.Potassium),
        Temperature: JSON.parse(vals.Temperature),
        Humidity: JSON.parse(vals.Humidity),
        pH: JSON.parse(vals.pH),
        Rainfall: JSON.parse(vals.Rainfall)
      }

    },)
      .then((dat) => {

        console.log(dat)
        setcrop(dat.data.Predicted)

      })
      .catch((err) => {
        console.log(err);
      })


  }



  return (
   
      <section id="crop_predict_pag">
        <section>
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
            <Result crop={cro} />
          </div>
        </div>
        <div id="form-content">
          <div id='form-crop-pred-title'>
            <h2>Predict Crop</h2>
          </div>
          <form >
            <div className='form1' >

              <div className='crop_pred_att'><input onChange={(e)=>{setvals({...vals,Nitrogen:e.target.value})}} type="number" id="Nitrogen" name="Nitrogen" placeholder="Enter Nitrogen(0-140)" /></div>

              <div className='crop_pred_att'><input onChange={(e)=>{setvals({...vals,Phosporus:e.target.value})}}type="number" id="Phosporus" name="Phosporus" placeholder="Enter Phosphorus(0-150)" /></div>

              <div className='crop_pred_att'><input onChange={(e)=>{setvals({...vals,Potassium:e.target.value})}}  type="number" id="Potassium" name="Potassium" placeholder="Enter Potassium(0-210)" /></div>

              <div className='crop_pred_att'><input onChange={(e)=>{setvals({...vals,Temperature:e.target.value})}} type="number" id="Temperature" name="Temperature" placeholder="Enter Temperature(9-50)" /></div>

              <div className='crop_pred_att'><input onChange={(e)=>{setvals({...vals,Humidity:e.target.value})}} type="number" id="Humidity" name="Humidity" placeholder="Enter Humidity(14-100)" /></div>

              <div className='crop_pred_att'><input onChange={(e)=>{setvals({...vals,pH:e.target.value})}} type="number" id="pH" name="pH" placeholder="Enter pH(3-10)" /></div>

              <div className='crop_pred_att'><input onChange={(e)=>{setvals({...vals,Rainfall:e.target.value})}} type="number" id="Rainfall" name="Rainfall" placeholder="Enter Rainfall(20-300)" /></div>
              <div className='crop_pred_att'><button  onClick={(e) => {
                    e.preventDefault();
                    console.log(vals)
                  
                    getPrediction()
                  }}id="crop-pred-btn">Get Prediction</button></div>

              
              </div>

            </form>

          </div>

        </section>

      </section>

      )
}

      export default CropPredict