import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import AffiliateProducts from '../components/AffiliateProducts'

export default function Custom404() {
    return(
        <div>
            <Header/>
            <div style={{width:"100%",height:"300px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"whitesmoke"}}>
                <h1><span style={{color:"gray"}}>404</span>This Page Is Not Found</h1>
            </div>
            <AffiliateProducts/>
            <Footer/>
        </div>
    )
  }
