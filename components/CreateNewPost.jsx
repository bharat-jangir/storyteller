import React from 'react'
import style from "../styles/EditPost.module.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from "axios"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import CircularProgress from '@mui/material/CircularProgress';


function CreateNewPost({ CreatePost }) {
    const [heading, setHeading] = useState("")
    const [subheading, setSubheading] = useState("")
    const [content, setContent] = useState([])
    const [language, setLanguage] = useState("")
    const [postCreated, setPostCreated] = useState(false)
    const [postCreatedOrNot,setPostCreatedOrNot]=useState(false)
    const [paraHeading,setParaHeading]=useState('')
    const [paraContent,setParaContent]=useState('')

    

    const User=useSelector(selectUser)

    const createNewPost = async () => {
        setPostCreatedOrNot(true)
        const config={
            headers:{
                "Content-type":"application/json",
                Authorization:`Bearer ${User.token}`
            }
        }
        const newPost=await axios.post("/api/post",{
            heading:heading,
            subheading:subheading,
            content:JSON.stringify(content),
            language:language
        },config)
        console.log(typeof(content));
        if(newPost){
            setPostCreatedOrNot(false)
            setPostCreated(true)
        }
        setTimeout(() => {
            setPostCreated(false)
        }, 3000);
    }

    const addContent=()=>{
        var Content={
            heading:paraHeading,
            content:paraContent
        }
        setContent([...content,Content])

        // var content:JSON.stringify(content.map(u))


    }
    return (
        <div className={style.EditPost_container}>
            <div className={style.EditPost_container_header}>
                <div className={style.backIcon}>
                    <ArrowBackIcon onClick={() => CreatePost()} />
                </div>
                <h2>Create New Post</h2>
            </div>
            <div className={style.EditPost_container_form}>

                <div className={style.EditPost_container_form_form}>
                    {
                      postCreated &&  
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="success">Post Has Created Succefully...!</Alert>
                    </Stack>
                    }
                    <div>
                        <label htmlFor="heading">Heading</label>
                        <input type="text" name='heading' onChange={(e) => setHeading(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">SubHeading</label>
                        <input type="text" onChange={(e) => setSubheading(e.target.value)} />
                    </div>
                    <div className={style.Post_Content}>
                        <label htmlFor="">Content</label>
                        {
                            content.map((content,index)=>{
                                return(
                                    <p>
                                    <p>{content.heading}</p>,
                                    <p>{content.content}</p>
                                    </p>

                                )
                            })
                        }
                    <div>
                    <label htmlFor="">para heading</label>
                    <input type="text" onChange={(e)=>setParaHeading(e.target.value)} />
                    <label htmlFor="">para Content</label>
                        <textarea onChange={(e) => setParaContent(e.target.value)} />
                        <Button variant="contained" color="success" onClick={()=>addContent()}>Add Para</Button>
                    </div>
                       
                    </div>
                    <div>
                        <label htmlFor="">Language</label>
                        <input type="text" onChange={(e) => setLanguage(e.target.value)} />
                    </div>
                    <div className={style.EditPost_container_form_form_footer}>
                        <div>
                            <Button variant="contained" color="success" onClick={()=>createNewPost()}>
                                {postCreatedOrNot?<CircularProgress/>:"Post"}
                            </Button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default CreateNewPost
