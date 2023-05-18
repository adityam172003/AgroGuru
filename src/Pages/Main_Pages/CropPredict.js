import React from 'react'
import '../../Styles/cropPredicat.css';
import Slider from '../../Component/Slider';
import NurseryImages from '../../NurseryImages';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function CropPredict() {


  const url = `Sarthak01.pythonanywhere.com`;


  return (
    <>
      <section id="crop_predict_pag">
        <section>
          <div className='crop-pred-bg'>
            <div className='crop-pred-bg-layer'>
              <div id='content-crp'>
                <h2>Crop Predication</h2>
                <p>Crosjfdslfjdslfjdslfsdsddjfklds</p>
              </div>
              <div className='content-crp-jif'></div>
            </div>
          </div>
        </section>

        <div id>
          <h1 id='maintext'>Crop Predication<span>🌿</span></h1>
        </div>
        <section id='maincontainer'>
          <di id='form-img-wrap'>
            <div id="form-img">
            </div>
          </di>
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


        <script src="https://code.jquery.com/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>
      </section>
    </>
  )
}

export default CropPredict