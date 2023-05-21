import React from 'react'
import '../../Styles/cropPredicat.css';
import Slider from '../../Component/Slider';
import NurseryImages from '../../NurseryImages';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function CropPredict() {

  const url = 'http://sarthak01.pythonanywhere.com';
  
  const [vals,setvals]= useState({});

  const [crop,setcrop]=useState("Crop Predication")
  const getPrediction = async()=>{
    axios.get(url , {
      params:{
        Nitrogen:JSON.parse(vals.Nitrogen),
        Phosphorus:JSON.parse(vals.Phosporus),
        Potassium:JSON.parse(vals.Potassium),
        Temperature:JSON.parse(vals.Temperature),
        Humidity:JSON.parse(vals.Humidity),
        pH:JSON.parse(vals.pH),
        Rainfall:JSON.parse(vals.Rainfall)
      }
    
    },)
    .then((dat)=> {
     
      const data=dat;
     
      console.log(data)
      

    })
    .catch((err)=>{
      console.log(err);
    })


  }



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

        <div className="container my-lg-3" id='maincontainer'>
          <h1 className="text-success" id='maintext'>{crop}<span className="text-success">🌿</span></h1>


          <form >
            <div className="row">
              <div className="col-md-4">
                <label for="Nitrogen">Nitrogen</label>
                <input type="number" onChange={(e)=>{
                  setvals({...vals,Nitrogen:e.target.value});
                }} step={0.01} id="Nitrogen" name="Nitrogen" placeholder="Enter Nitrogen"
                  className="form-control" />
              </div>
              <div className="col-md-4">
                <label for="Phosporus">Phosporus</label>
                <input onChange={(e)=>{
                  setvals({...vals,Phosporus:e.target.value});
                }} type="number" step={0.01} id="Phosporus" name="Phosporus" placeholder="Enter Phosporus"
                  className="form-control" />
              </div>
              <div className="col-md-4">
                <label  for="Potassium">Potassium</label>
                <input  onChange={(e)=>{
                  setvals({...vals,Potassium:e.target.value});
                }} type="number" step={0.01} id="Potassium" name="Potassium" placeholder="Enter Potassium"
                  className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label for="Temperature">Temperature</label>
                <input  onChange={(e)=>{
                  setvals({...vals,Temperature:e.target.value});
                }}  type="number" step={0.01} id="Temperature" name="Temperature" placeholder="Enter Temperature"
                  className="form-control" />
              </div>
              <div className="col-md-4">
                <label for="Humidity">Humidity</label>
                <input   onChange={(e)=>{
                  setvals({...vals,Humidity:e.target.value});
                }}  type="number" step={0.01} id="Humidity" name="Humidity" placeholder="Enter Humidity"
                  className="form-control" />
              </div>
              <div className="col-md-4">
                <label for="pH">pH</label>
                <input  onChange={(e)=>{
                  setvals({...vals,pH:e.target.value});
                }}  type="number" step={0.01} id="pH" name="pH" placeholder="Enter pH" className="form-control" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-4">
                <label for="Rainfall">Rainfall</label>
                <input type="number" onChange={(e)=>{
                  setvals({...vals,Rainfall:e.target.value});
                }}   step={0.01} id="Rainfall" name="Rainfall" placeholder="Enter Rainfall in mm"
                  className="form-control" />
              </div>
            </div>
            <div className="row mt-4 text-center">
              <div className="col-md-12">
                <button onClick={(e)=>{
                  e.preventDefault();
                  console.log(vals)
                  console.log(JSON.parse(vals.Nitrogen));
                  getPrediction()
                }} className="btn btn-success" id='recomm'>Get Recommendation</button>
              </div>
            </div>
          </form>

          

          </div>

       


        <script src="https://code.jquery.com/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>
      </section>
    </>
  )
}

export default CropPredict