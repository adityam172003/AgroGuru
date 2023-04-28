import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'
import * as yup from 'yup'
import '../../Styles/Register.css'
import { redirect } from 'react-router-dom';





const Register = () => {
   
    const schema = yup.object().shape({
        name: yup.string().required("Your full name is required !"),
        email: yup.string().email().required(),
        phone: yup.number().positive().integer().required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords Don't Match !")
    })
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });





    const onSubmit =async (data) => {
        

        // taking longitude and lattitude 
      




    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
      let response;
        let status=200;
         await axios.post('/user/register' , {data} ,axiosConfig)
                .then(data=>{
                    response=data;
                    

                })
                .catch(err=>{
                   
                    status= (err.response.status);
        
                })

       
         
                

    if(status ==200)
    {
        alert("Account is created please login");
        return redirect('/user/login')
    }
    else if(status==409)
    {
        alert("Account is already created please login");
        return redirect('/user/login')
    }
    else
    {
        alert("Server error please try anagin letter ");
        return redirect('/use/err');
    }
  
   
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Enter your Full Name' {...register("name")}/>
        <p>{errors.name?.message}</p>
        <input type="email" placeholder='Enter your Email' {...register("email")}/>
        <p>{errors.email?.message}</p>
        <input type="text" placeholder='Enter your phone Number' {...register("phone")}/>
        <p>{errors.age?.message}</p>
        <input type="password" placeholder='Enter Password' {...register("password")}/>
        <p>{errors.password?.message}</p>
        <input type="password" placeholder='Confirm Password' {...register("confirmPassword")}/>
        <p>{errors.confirmPassword?.message}</p>
        <input type="submit"/>
    </form>
  )
}

export default Register