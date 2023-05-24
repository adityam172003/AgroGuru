import React, { useContext,useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../../Styles/login_page_ui.css";
import axios from "axios";
// import { redirect } from 'react-router-dom'
import { Link, useNavigate } from "react-router-dom";
import { MainContext } from "../../context/agroguru_context";
import Spinner from "../../Component/Spinner";

const Login = () => {

  const [lgt ,setlgt] = useState(0.0);
    const [lgn ,setlgn] = useState(0.0);
  const { spin,setSpin } = useContext(MainContext);
  const nevigate = useNavigate();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Enter valid Email")
      .required("Email is required"),
    password: yup.string().min(4).max(20).required("Password is must"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(()=>{
    
    navigator.geolocation.getCurrentPosition( async function(position) { 
      setlgt(position.coords.longitude);
      setlgn(position.coords.latitude);
    })
  

    },[]) 
  const onSubmit = async (data) => {
    console.log(lgn,"---",lgt);
    setSpin(true);
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      params:{
        lng:JSON.stringify(lgn),
        lat:JSON.stringify(lgt)
      }
    };
   

    let status = 200;

  
    
    await axios
      .post("/user/login", { data} , axiosConfig)
      .then((dat) => {
        // alert("logged in");
        setSpin(false);
      })
      .catch((err) => {
        status = err.response.status;
      });

    if (status == 200) {
      nevigate("/main");
    } else {
      alert("register first");
      nevigate("/regi");
    }
    
  };

  return (
    <>
    {spin && <Spinner />}
        <section id="login_page">
        <div id="login_page_wp"><div id="lgn_cover">
          <h2><span id="spn1">Agro</span ><span id="spn2" >Guru</span></h2>
        </div></div>
        <div id="login_page_dtl">
          <div id="login_cnt">
            <p id="wel_msg">Welcome Back!</p>
            <h3>Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="dv">
                <label for="login-email">Email</label>
                <br />
                <input type="email" id="login-email" {...register("email")} />
                <p className="err">{errors.email?.message}</p>
              </div>
              <div class="dv">
                <label for="login-password">Password</label>
                <br />
                <input
                  type="password"
                  id="login-password"
                  {...register("password")}
                />
                <p className="err">{errors.password?.message}</p>
              </div>
              <div>
                <button>Log In</button>
              </div>
            </form>
            <p id="reg_redir">
              Don't have an account yet ?<Link to="/regi"> Register</Link>
            </p>
          </div>
        </div>
      </section>
      

    </>
  );
};

export default Login;
