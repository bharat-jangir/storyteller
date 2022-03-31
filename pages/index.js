import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from "../components/header"
import Logo from '../public/Images/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import axios from "axios"
import { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';
import AffiliateProducts from '../components/AffiliateProducts'
import Footer from '../components/Footer'
import Search from "../components/search"
import CloseIcon from '@mui/icons-material/Close';
import Script from 'next/script'
import AffiliateProductSlider from "../components/AffiliateProductSlider"


export default function Home() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState(false)

  useEffect(() => {
    const getPosts = async () => {
      const posts = await axios.get("/api/post")
      const post = posts.data
      setPosts(post.reverse())
    }

    getPosts()
  }, [])


  const date = (date) => {
    var _date = date.split("-" && "T")
    return _date[0]
  }
  return (

    <div className={styles.Home_Container}>
      <Head>
        <title>ArticleWriter</title>
        <meta name="keywords" content="blogging,article writing,amit agrwal,website,information,knowledge,details" />
        <meta name="description" content="This site provides wonderfull and valuable content with simplicity to understand "/>
        <link rel="icon" type="image/png" sizes="16x16" href="/Images/logo.png" />
          <meta name="google-site-verification" content="nmc4bHIn9cm7aEBWXqy-8sDo8d_wjwNJw2SQK1TdK-M" />
         </Head>
      <Header />
      <div>
        <AffiliateProductSlider/>
      </div>
      <div className={styles.Home_Container_SearchBar}>
        <div className={styles.Home_Container_SearchBar_content}>
          <input type="text" className={styles.SearchInput} placeholder="Search" onClick={() => setSearch(true)} />
          <SearchIcon className={styles.searchIcon} />
        </div>
      </div>
      <div className={styles.Content_container}>
        <div className={styles.Home_Container_HindiStories}>
          <div className={styles.Home_Container_HindiStories_heading}>
            <h1>हिंदी आर्टिकल</h1>
          </div>
          <div className={styles.Allposts_or_contents}>
            {
              posts.slice(0, 6).map(data => {
                if (data.language === "Hindi")
                  return (
                    <Link href={`/post/${data._id}`} key={data._id}>
                      <div className={styles.HindiStories_Content}>
                        <div className={styles.Content_heading}>
                          <h1>{data.heading}</h1>
                        </div>
                        <div className={styles.Content_subheading}>
                          <h2>
                            {data.subheading}
                          </h2>
                        </div>
                        {/* <div className={styles.Content_content}>
                          <pre>
                            {data.content[0].content}
                          </pre>
                        </div> */}
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
          <div className={styles.Seemore_btn}>
            <Link href="/hindistories">
              <Button variant="contained" >सभी देखें</Button>
            </Link>
          </div>
        </div>

        <div className={styles.Home_Container_HindiStories}>
          <div className={styles.Home_Container_HindiStories_heading}>
            <h1>English Article</h1>
          </div>
          <div className={styles.Allposts_or_contents}>
            {
              posts.slice(0, 6).map(data => {
                if (data.language === "English")
                  return (
                    <Link href={`/post/${data._id}`} key={data._id}>
                      <div className={styles.HindiStories_Content} key={data._id}>
                        <div className={styles.Content_heading}>
                          <h1>{data.heading}</h1>
                        </div>
                        <div className={styles.Content_subheading}>
                          <h2>
                            {data.subheading}
                          </h2>
                        </div>
                        {/* <div className={styles.Content_content}>
                          <pre>
                            {data.content}
                          </pre>
                        </div> */}
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
          <div className={styles.Seemore_btn}>
            <Link href="/englishstories">
              <Button variant="contained">See More</Button>
            </Link>
          </div>
        </div>

      </div>

      <AffiliateProducts />
      <Footer />
      {
        search &&
        <div className={styles.SearchItems_Component_container}>
          <CloseIcon onClick={() => setSearch(false)} style={{ color: "red", position: "absolute" }} />
          <Search />
        </div>

      }

    </div>
  )
}
