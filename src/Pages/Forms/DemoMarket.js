import React, { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../../Styles/market_form_ui.css'
import axios from 'axios'

var bodyFormData = new FormData();
// var itemFormData = new FormData();

const MarketForm = () => {

    const [marketImage ,setmarketImage] = useState('');
    const [lgt ,setlgt] = useState(0.0);
    const [lgn ,setlgn] = useState(0.0);

    const schema = yup.object().shape({
        name: yup.string().required("Market name is required"),
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
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition( async function(position) {
       
       
            setlgt(position.coords.longitude);
        
            setlgn(position.coords.latitude);
          
        })
      },[])
    const onSubmit =async (data) => {
     
        console.log(data);
        let axiosConfig;
      
       
   
      bodyFormData.append('marketImage',marketImage)
      bodyFormData.append('name',data.name)
      bodyFormData.append('phone',data.phone)
      bodyFormData.append('address',data.address)
      bodyFormData.append('openTime',data.openTime)
      bodyFormData.append('closeTime',data.closeTime    )

      axiosConfig = {
        params: {
          lng:JSON.stringify(lgn),
          ltd:JSON.stringify(lgt)
        },
        headers: {
            'Content-Type': "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
        }
      }
      let status=200;
      await axios.post('/market/register' , bodyFormData ,axiosConfig)
      .then(dat=>{
        // use state to set form
     })
       .catch(err=>{
            status= (err.response.status);
        })
       if(status==200)
       {
        alert("Market added successfully")
       }
       else
       {
        alert("Internal server error");
       }
    }


    return (
        <>
        <section id="market_page">
            <section id="mar_back">
            <div id="mar_form_cnt">
            <div id="mar_form_back">
            <h2>Register Market</h2>
                <form action='' id='mar_form' onSubmit={handleSubmit(onSubmit)}>
                <div className='attri'>
                <input type="text" placeholder='Enter Name of Market' {...register("name")}/>
                </div>
                <div className='attri'>
                <input type='text' placeholder='Address of Market' {...register('address')}/>
                </div>
                <div className='attri'>
                <input type="email" placeholder='Enter Contact-Email of Market' {...register("email")}/>
                </div>
                <div className='attri'>
                <input type="text" placeholder='Enter Contact-Number of Market' {...register("phone")}/>
                </div>
                <div id="mar_times" className='attri'>
                       <div>
                           <label id="mar_in_time">Opening Time</label>
                           <input type="time" id="mar_in_time"{...register("openTime")}/>
                           {/* <p>{errors.openTime?.message}</p> */}
                       </div>
                       <div>
                           <label id="mar_out_time">Closing Time</label>
                           <input type="time"  {...register("closeTime")}/>
                           {/* <p>{errors.closeTime?.message}</p> */}
                       </div>
                   </div>
                <div className='attri'>
                <input type="text" placeholder='Enter your Off-Day' {...register("offDay")}/>
                </div>
                <div className='attri'>        
                <input type='file' id='mar_img_in' onChange={(e)=>{
                    setmarketImage(e.target.files[0]);
                }} ></input>
                </div>
                <button>Submit</button>
                </form>
            </div>
            </div>
            </section>
        </section>    
        </>
        
  )
}

export default MarketForm