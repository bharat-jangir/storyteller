import React from 'react'
import Header from "../components/header"
import styles from '../styles/Home.module.css'
import axios from "axios"
import { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';
import AffiliateProducts from '../components/AffiliateProducts'
import Footer from '../components/Footer'
import Link from "next/link"

function englishstories() {
    const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const posts = await axios.get("/api/post")
      const post = posts.data
      setPosts(post.reverse())
    }

    getPosts()
  }, [])

  const date=(date)=>{
    var _date=date.split("-"&&"T")
    return _date[0]
  }

  return (
    <div>
    <Header/>
    <div className={styles.Content_container}>
        <div className={styles.Home_Container_HindiStories}>
          <div className={styles.Home_Container_HindiStories_heading}>
            <h1>English Stories</h1>
          </div>
          <div className={styles.Allposts_or_contents}>
            {
              posts.map(data => {
                  if(data.language==="English")
                return (
                  <Link href={`/post/${data._id}`} key={data._id}>
                  <div className={styles.HindiStories_Content} >
                    <div className={styles.Content_heading}>
                      <h1>{data.heading}</h1>
                    </div>
                    <div className={styles.Content_subheading}>
                      <h2>
                        {data.subheading}
                      </h2>
                    </div>
                    <div className={styles.Content_content}>
                      <pre>
                        {data.content}
                      </pre>
                    </div>
                    <div className={styles.Content_date}>
                      <p>
                        Published At:
                        {date(data.createdAt)}
                      </p>
                    </div>
                  </div>
                  </Link>


                )
              })
            }
          </div>
          {/* <div className={styles.Seemore_btn}>
            <Button variant="contained" >सभी देखें</Button>
          </div> */}
        </div>
        </div>
        <AffiliateProducts/>
        <Footer/>

    </div>
  )
}

export default englishstories
