import React  from 'react'
import Box from '@mui/material/Box';
import style from "../styles/EditPost.module.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material'; 
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';

function EditPost({editPost,Editpost}) {
    const [heading, setHeading] = useState("")
    const [subheading, setSubheading] = useState("")
    const [content, setContent] = useState("")
    const [language, setLanguage] = useState("")
    const [postUpdated, setPostUpdated] = useState(false)
    const [postEditedOrNot,setPostEditedOrNot]=useState(false)

    const User=useSelector(selectUser)

    const updatePost = async () => {
        setPostEditedOrNot(true)
        const config={
            headers:{
                "Content-type":"application/json",
                Authorization:`Bearer ${User.token}`
            }
        }
        const updatedPost=await axios.put("/api/post",{
            postId:editPost._id,
            heading:heading,
            
        },config)
        if(updatedPost){
            setPostEditedOrNot(false)
            setPostUpdated(true)
        }
        setTimeout(() => {
            setPostUpdated(false)
        }, 3000);
    }


  return (
    <div className={style.EditPost_container}>
        <div className={style.EditPost_container_header}>
            <div className={style.backIcon}>
                <ArrowBackIcon  onClick={()=>Editpost()}/>
            </div>
            <h2>Edit Your Post</h2>
        </div>
        <div className={style.EditPost_container_form}>
            <div className={style.EditPost_container_form_form}>
            {
                      postUpdated &&  
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="success">Post Updated SuccessFully...!</Alert>
                    </Stack>
                    }
                <div>
                <label htmlFor="heading">Heading</label>
                <input type="text" name='heading' defaultValue={editPost.heading} onChange={(e)=>setHeading(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="">SubHeading</label>
                <input type="text" defaultValue={editPost.subheading} onChange={(e)=>setSubheading(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="">Content</label>
                <textarea  defaultValue={editPost.content} onChange={(e)=>setContent(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="">Language</label>
                <input type="text" defaultValue={editPost.language} onChange={(e)=>setLanguage(e.target.value)}/>
                </div>
                <div className={style.EditPost_container_form_form_footer}>
                    <div>
                    <Button variant="contained" color="success" onClick={()=>updatePost()}>
                    {postEditedOrNot?<CircularProgress/>:"Save"}
                    </Button>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default EditPost
