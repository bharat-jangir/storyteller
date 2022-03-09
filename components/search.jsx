import React from 'react'
import style from "../styles/search.module.css"
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

function Search() {
  const [searchedPost, setSearchedPost] = useState([])

  const searchPost = async (query) => {
    try {
      if(query.length>0){
        const Post = await axios.get(`/api/post/query/${query}`)
        if (Post) {
          setSearchedPost(Post.data)
        }
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  const date = (date) => {
    var _date = date.split("-" && "T")
    return _date[0]
  }

  return (
    <div className={style.SearchComponent_container}>
      <div className={style.SearchComponent_container_content}>
        <div className={style.Home_Container_SearchBar}>
          <div className={style.Home_Container_SearchBar_content}>
            <input type="text" className={style.SearchInput} placeholder="Search" onChange={(e) => searchPost(e.target.value)} />
            <SearchIcon className={style.searchIcon} />
          </div>
        </div>
        <div className={style.SearchedItem_container}>
          {
            searchedPost.map(data => {
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
            }
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Search
