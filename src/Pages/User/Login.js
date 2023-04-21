import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../../Styles/Register.css'

const Login = () => {

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(4).max(20).required(),
    })
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
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