import React, { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../../Styles/laboratory_form_ui.css'
import axios from 'axios';

var bodyFormData = new FormData();
var itemFormData = new FormData();

const LaboratoryForm = () => {

    const [laboratoryImage ,setlaboratoryImage] = useState('');
    const [lgt ,setlgt] = useState(0.0);
    const [lgn ,setlgn] = useState(0.0);

    const schema = yup.object().shape({
        name: yup.string().required("Laboratory name is required"),
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

    const [imageForm, setImageForm] = useState({});

    const imageSubmitHandle = async (e) => {
        e.preventDefault();
        console.log()
        console.log()
        // const itemName = e.target.value.itemName;
        // const itemImage = e.target.value.itemImage;
        // setImageForm({itemName, itemImage});

        itemFormData.append("itemname",e.target.itemName.value);
        itemFormData.append("photo",e.target.itemImage.files[0]);
       const  axiosConfig = {
            headers: {
                'Content-Type': "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
            }
          }
        await axios.post('/lab/itemadd',itemFormData,axiosConfig)
        .then((it)=>{
            console.log("item added");

        })
        .catch((err)=>{
            console.log(err);
        })
        e.target.reset();
    }
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition( async function(position) {
       
       
            setlgt(position.coords.longitude);
        
            setlgn(position.coords.latitude);
          
        })
      },[])

    const onSubmit =async (data) => {

        console.log(data);
        let axiosConfig;
       
    
      bodyFormData.append('laboratoryImage',laboratoryImage)
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
      await axios.post('/lab/register' , bodyFormData ,axiosConfig)
      .then(dat=>{
        // use state to set form
        })
       .catch(err=>{
            status= (err.response.status);
        })
       if(status==200)
       {
        alert("laboratory added successfully")
       }
       else
       {
        alert("Internal server error");
       }
    }

    return (
    <>
        <section id="laboratory_page">
        <section id="lab_back">
        <div id="lab_form_cnt">
        <div id="lab_form_back">
        <h2>Register Laboratory</h2>
        <form action='' id='lab_form' onSubmit={handleSubmit(onSubmit)} className='myform'>
            <div className='attri'>
                <input type="text" placeholder='Enter Name of Laboratory' {...register("name")}/>
            </div>
            <div className='attri'>
                <input type='text' placeholder='Address of Laboratory' {...register('address')}/>
            </div>
            <div className='attri'>
                <input type="email" placeholder='Enter Contact-Email of Laboratory' {...register("email")}/>
            </div>
            <div className='attri'>
                <input type="text" placeholder='Enter Contact-Number of Laboratory' {...register("phone")}/>
            </div>
            <div id="lab_times" className='attri'>
                       <div>
                           <label for="lab_in_time">Opening Time</label>
                           <input type="time" id="lab_in_time"{...register("openTime")}/>
                           {/* <p>{errors.openTime?.message}</p> */}
                       </div>
                       <div>
                           <label for="lab_out_time">Closing Time</label>
                           <input type="time" id="lab_out_time" {...register("closeTime")}/>
                           {/* <p>{errors.closeTime?.message}</p> */}
                       </div>
                   </div>
            <div className='attri'>
                <input type="text" placeholder='Enter your Off-Day' {...register("offDay")}/>
            </div>
            <div className='attri'>
                <input type='file' id="lab_img_in" onChange={(e)=>{
                        setlaboratoryImage(e.target.files[0]);
                    }}>
                </input>
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

export default LaboratoryForm