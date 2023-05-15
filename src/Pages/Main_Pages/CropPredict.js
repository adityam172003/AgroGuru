import React from 'react'
import '../../Styles/cropPredicat.css';
import Slider from '../../Component/Slider';
import NurseryImages from '../../NurseryImages';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function CropPredict() {
    

  const url = ``;
  

 

  return (
    <>
      <section id="crop_predict_pag">
        <div id="nur_news_cl">
          <Slider img={NurseryImages} />
        </div>

        <div className="container my-lg-3" id='maincontainer'>
          <h1 className="text-success" id='maintext'>Crop Predication<span className="text-success">🌿</span></h1>


          <form >
            <div className="row">
              <div className="col-md-4">
                <label for="Nitrogen">Nitrogen</label>
                <input type="number" step={0.01} id="Nitrogen" name="Nitrogen" placeholder="Enter Nitrogen"
                  className="form-control" />
              </div>
              <div className="col-md-4">
                <label for="Phosporus">Phosporus</label>
                <input type="number" step={0.01} id="Phosporus" name="Phosporus" placeholder="Enter Phosporus"
                  className="form-control" />
              </div>
              <div className="col-md-4">
                <label for="Potassium">Potassium</label>
                <input type="number" step={0.01} id="Potassium" name="Potassium" placeholder="Enter Potassium"
                  className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label for="Temperature">Temperature</label>
                <input type="number" step={0.01} id="Temperature" name="Temperature" placeholder="Enter Temperature"
                  className="form-control" />
              </div>
              <div className="col-md-4">
                <label for="Humidity">Humidity</label>
                <input type="number" step={0.01} id="Humidity" name="Humidity" placeholder="Enter Humidity"
                  className="form-control" />
              </div>
              <div className="col-md-4">
                <label for="pH">pH</label>
                <input type="number" step={0.01} id="pH" name="pH" placeholder="Enter pH" className="form-control" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-4">
                <label for="Rainfall">Rainfall</label>
                <input type="number" step={0.01} id="Rainfall" name="Rainfall" placeholder="Enter Rainfall in mm"
                  className="form-control" />
              </div>
            </div>
            <div className="row mt-4 text-center">
              <div className="col-md-12">
                <button type="submit" className="btn btn-success" id='recomm'>Get Recommendation</button>
              </div>
            </div>
          </form>


          {/* {%="card-body">
                <h5 className="card-title">Recommend Crop is :</h5>
                <p className="card-text">{{result}}</p>
            </div> if result %}
        <div className="card" style="width: 18rem;">
            <img src="{{url_for('static', filename='img.jpg')}}" className="card-img-top" alt="...">
            <div className
        </div>
        {% endif %} */}

        </div>


        <script src="https://code.jquery.com/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>
      </section>
    </>
  )
}

export default CropPredict