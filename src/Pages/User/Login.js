import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../../Styles/Register.css'
import axios from 'axios'
// import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Login = () => {
    const nevigate = useNavigate();
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(4).max(20).required(),
    })
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit =async (data) => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          }
      let Locate={
        longit:"",
        latit:""
      }
   
      let status=200;
          
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);

        console.log("Longitude is :", position.coords.longitude);
      });

      await axios.post('/user/login' , {data,Locate} ,axiosConfig)
      .then(dat=>{
        
        alert("logged in");
       


        })
       .catch(err=>{
        
        
         status= (err.response.status);
        
     
        })

       if(status==200)
       {
        nevigate('/main/about');
       }
       else
       {
        alert("register first")
        nevigate('/user/regi')
       }
      
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder='Enter your Email' {...register("email")}/>
        <p>{errors.email?.message}</p>
        <input type="password" placeholder='Enter Password' {...register("password")}/>
        <p>{errors.password?.message}</p>
        <input type="submit"/>
    </form>
  )
}

export default Login