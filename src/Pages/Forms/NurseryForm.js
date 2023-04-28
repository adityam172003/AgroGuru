import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../../Styles/Register.css'
import axios from 'axios'

const NurseryForm = () => {
    const [lgt ,setlgt] = useState(0.0);
    const [lgn ,setlgn] = useState(0.0);
    const schema = yup.object().shape({
        name: yup.string().required("Nursery name is required"),
        address: yup.string().required("Address must be provided"),
        email: yup.string().email("It should end with domain").required("Email is required"),
        phone: yup.number()
                .typeError("That does not look like phone number")
                .positive().integer("Enter valid Integer")
                .required("Contact number is required"),
        openTime: yup.string().required("Enter Opening Time"),
        closeTime: yup.string().required("Enter Closing Time"),
        offDay: yup.string().required("Off-Day is required"),
        
    })
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit =async (data) => {
     
      
        let axiosConfig;
      
       
      navigator.geolocation.getCurrentPosition( async function(position) {
       
       
          setlgt(position.coords.longitude);
      
          setlgn(position.coords.latitude);
        
      })
      

      axiosConfig = {
        params: {
          lng:JSON.stringify(lgn),
          ltd:JSON.stringify(lgt)
        },
        
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
        
      }
     
      let status=200;
          
   

      await axios.post('/nursery/register' , {data} ,axiosConfig)
      .then(dat=>{
        
        // use state to set form
       


        })
       .catch(err=>{
        
        
         status= (err.response.status);
        
     
        })

       if(status==200)
       {
        alert("nursery added successfully")
       }
       else
       {
        alert("Internal server error");
       
       }
      
  
    

    
    }
    


    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Enter Name of Nursery' {...register("name")}/>
        <p>{errors.name?.message}</p>
        <input type='text' placeholder='Address of Nursery' {...register('address')}/>
        <p>{errors.address?.message}</p>
        <input type="email" placeholder='Enter Contact-Email of Nursery' {...register("email")}/>
        <p>{errors.email?.message}</p>
        <input type="text" placeholder='Enter Contact-Number of Nursery' {...register("phone")}/>
        <p>{errors.phone?.message}</p>
        <input type='time' placeholder='Opening Time' {...register("openTime")}/>
        <p>{errors.openTime?.message}</p>
        <input type='time' placeholder='Closing Time' {...register("closeTime")}/>
        <p>{errors.closeTime?.message}</p>
        <input type="text" placeholder='Enter your Off-Day' {...register("offDay")}/>
        <p>{errors.offDay?.message}</p>
        <input type="submit"/>
    </form>
  )
}

export {NurseryForm}