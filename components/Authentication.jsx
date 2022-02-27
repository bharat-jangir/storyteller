import React from "react"
import style from "../styles/authentication.module.css"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Image from "next/image"
import Logo from "../Images/Logo.png"
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

function Authentication() {
    const [alignment, setAlignment] = React.useState('Login');
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const dispatch=useDispatch()

    useEffect(()=>{
        var user =localStorage.getItem("S_T_U")
        const parsedUSer=JSON.parse(user)
        dispatch(login(parsedUSer))
    },[])

    const Login=async()=>{
        const {data}=await axios.post("/api/login",{
            email:email,
            password:password
        })

        if (data) {
            localStorage.setItem("S_T_U",JSON.stringify(data))
            location.href="/adminlogin1680"
        }
    }


    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    }
        return (
            <div className={style.Authentication_container} >
                <div className={style.Authentication_container_Login_and_Signup_Toggle}>
                    <div style={{width:"40px",height:"40px",borderRadius:"20px",marginLeft:"0px"}}>
                        <Image src={Logo}/>
                    </div>
                    Login
                </div>
                <div className={style.Authentication_container_Content}>
                    <div>
                    <TextField id="standard-basic" label="Email" variant="standard" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                    <TextField id="standard-basic" label="Password" variant="standard" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <Button 
                        variant="contained" 
                        color="success"
                        onClick={()=>Login()} 
                        >Login</Button>
                    </div>

                </div>


            </div>
        )
    }

    export default Authentication
