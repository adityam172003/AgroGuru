import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../../Styles/nursery_form_ui.css'
import axios from 'axios'
var bodyFormData = new FormData();



const NurseryForm = () => {
    const [nurseryImage ,setnurseryImage] = useState('');
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
      
      bodyFormData.append('nurseryImage',nurseryImage)
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
          
   

      await axios.post('/nursery/register' , bodyFormData ,axiosConfig)
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
    // <form onSubmit={handleSubmit(onSubmit)}>
    //     <input type="text" placeholder='Enter Name of Nursery' {...register("name")}/>
    //     <p>{errors.name?.message}</p>
    //     <input type='text' placeholder='Address of Nursery' {...register('address')}/>
    //     <p>{errors.address?.message}</p>
    //     <input type="email" placeholder='Enter Contact-Email of Nursery' {...register("email")}/>
    //     <p>{errors.email?.message}</p>
    //     <input type="text" placeholder='Enter Contact-Number of Nursery' {...register("phone")}/>
    //     <p>{errors.phone?.message}</p>
    //     <input type='time' placeholder='Opening Time' {...register("openTime")}/>
    //     <p>{errors.openTime?.message}</p>
    //     <input type='time' placeholder='Closing Time' {...register("closeTime")}/>
    //     <p>{errors.closeTime?.message}</p>
    //     <input type="text" placeholder='Enter your Off-Day' {...register("offDay")}/>
    //     <p>{errors.offDay?.message}</p>
    //     <input type="submit"/>
    // </form>
    <section id="nursery_page">
    <section id="nur_back">
        <div id="nur_form_cnt">
           <div id="nur_form_back">
               <h2>Register Nursery</h2>
               <form action="" id="nur_form"onSubmit={handleSubmit(onSubmit)}>
                   <div>
                       <label for="nur_name">Name of Nursery</label><br/>
                       <input type="text" id="nur_form_name"{...register("name")}/>
                       <p>{errors.name?.message}</p>
                   </div>
                   <div>
                       <label for="nur_addr">Address of Nursey</label><br/>
                       <input type="text" id="nur_form_addr"{...register('address')}/>
                       <p>{errors.address?.message}</p>
                   </div>
                   <div>
                       <label for="nur_email">Contact Email</label><br/>
                       <input type="email" id="nur_form_email"{...register("email")}/>
                       <p>{errors.email?.message}</p>
                   </div>
                   <div>
                       <label for="nur_phone">Contact Number</label><br/>
                       <input type="text" id="nur_form_phone"{...register("phone")}/>
                       <p>{errors.phone?.message}</p>
                   </div>
                   <div id="nur_times">
                       <div>
                           <label for="nur_in_time">Opening Time</label>
                           <input type="time" id="nur_in_time"{...register("openTime")}/>
                           <p>{errors.openTime?.message}</p>
                       </div>
                       <div>
                           <label for="nur_out_time">Closing Time</label>
                           <input type="time" id="nur_out_time" {...register("closeTime")}/>
                           <p>{errors.closeTime?.message}</p>
                       </div>
                   </div>
                   <div>
                       <label for="nur_off_day">Enter Off Day</label><br/>
                       <input type="text" id="nur_off_day"{...register("offDay")}/>
                       <p>{errors.offDay?.message}</p>
                   </div>
                   <div>
                    
                    <input type='file' onChange={(e)=>{
                        setnurseryImage(e.target.files[0]);
                    }} ></input>
                   </div>
                   <div><button>Submit</button></div>
               </form>
                            </div>
           </div>
    </section>
</section>
  )
}

export {NurseryForm}