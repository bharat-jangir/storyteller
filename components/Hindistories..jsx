import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import style from "../styles/hindistories.module.css"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react"
import axios from "axios"
import EditPost from './EditPost';
import CreateNewPost from './CreateNewPost';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Alert from "@mui/material/Alert"
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';


function Englishstories() {
  const [allPosts, setAllPosts] = useState([])
  const [edit, setEdit] = useState(false)
  const [createNewPost, setCreateNewPost] = useState(false)
  const [editPost, setEditPost] = useState({})
  const [postDeleted, setPostDeleted] = useState(false)
  const [deletedOrNot,setDeletedOrNot]=useState(false)

  const User=useSelector(selectUser)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/post")
      setAllPosts(data)
    }
    fetchData()
  }, [])

  const Editpost = async (post) => {
    setEdit(!edit)
    setEditPost(post)

  }
  const CreatePost = async () => {
    setCreateNewPost(!createNewPost)
  }

  const DeletePost = async (post) => {
    setDeletedOrNot(true)
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${User.token}`
      }
    }
    const deletedPost=await axios.delete(`/api/post/${post._id}`,config)

    if (deletedPost) {
      setPostDeleted(true)
      setDeletedOrNot(false)
    }

    setTimeout(() => {
      setPostDeleted(false)
    }, 3000);
  }

 

  return (
    <div className={style.container}>
      <div className={style.container_createNewPostButton} onClick={() => CreatePost()}>
        <h2>create new post</h2>
      </div>
      <div className={style.container_posts}>
        {
          postDeleted &&
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">Post Deleted SuccessFully...!</Alert>
          </Stack>
        }
        {
          allPosts.length == 0 ? (
            <Box sx={{ width: 300 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton />
              <Skeleton animation="wave" />
            </Box>

          ) : (allPosts.map(data => {
            if(data.language=="Hindi")
            return (
              <div key={data._id} className={style.container_posts_post}>
                <div>
                  <h1>{data.heading}</h1>
                  <h3>{data.subheading}</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                  <p>{data.createdAt}</p>
                  <div style={{ margin: "auto 2px auto  auto" }}>
                    <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => DeletePost(data)}>
                      {deletedOrNot?<CircularProgress/>:"Delete"}
                    </Button>
                    <Button onClick={() => Editpost(data)} variant="contained" color="success" startIcon={<EditIcon />}>
                      Edit
                    </Button>
                  </div>
                </div>

              </div>
            )
          }))
        }

      </div>
      {
        edit && <EditPost editPost={editPost} Editpost={Editpost} /> ||
        createNewPost && <CreateNewPost CreatePost={CreatePost} />
      }
    </div>



  )
}

export default Englishstories
