import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../components/header'
import Logo from "../../Images/Logo.png"
import styles from "../../styles/postpage.module.css"
import Footer from '../../components/Footer'
import AffiliateProducts from '../../components/AffiliateProducts'
import { useState, useEffect } from "react";
import axios from 'axios'

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

function Post() {
    const router = useRouter()
    var { id } = router.query

    

    const [post, setPost] = useState([])

    useEffect(() => {
        const getPost = async () => {
            const post = await axios.get(`/api/post/${id}`)
            setPost(post.data)
        }
        getPost()
    },[])

  
 console.log(typeof(post.content));

    return (
        <div className={styles.postPageContainer}>
            <Head>
                <title>Story Teller</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" type="image/jpg" href={Logo} />
            </Head>
            <Header />
            <div className={styles.postContainer}>
                <div className={styles.postContainer_postHeading}>
                    <div>
                        <h1>{post.heading}</h1>
                    </div>
                    <div>
                        <h3>{post.subheading}</h3>
                    </div>
                </div>
                <div className={styles.postContainer_postContent}>
                    <div>
                   
                    {
                       post.content !== undefined && JSON.parse(post.content).map((post,index)=>{
                            return(
                                <p style={{backgroundColor:"pink"}}>{post.heading+"  "+index}</p>,
                                <p style={{backgroundColor:"green"}}>{post.content+"  "+index}</p>

                                
                            )
                        })
                    }
                    </div>
                </div>

            </div>
            <AffiliateProducts />
            <Footer />
        </div>
    )
}

export default Post
