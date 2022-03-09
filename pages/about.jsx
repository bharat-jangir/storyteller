import Header from "../components/header"
import Footer from "../components/Footer"
import AffiliateProducts from "../components/AffiliateProducts"
import Image from "next/image"
import style from "../styles/about.module.css"
import OwnerImg from "../Images/owner.jpeg"
import Link from "next/link"
import Head from "next/head"

function about() {
  return (
    <div>
      <Head>
        <title>Story Teller</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Images/logo.png" />
         </Head>
      <Header />
      <div className={style.About_ContentContainer}>
        <div className={style.About_content}>
          <div style={{ display: "flex", padding: "10px", flexWrap: "wrap", wordWrap: "break-word" }}>
            <h3 style={{ textAlign: "center" }}>Welcome To <span id="W_Name1" style={{ color: "purple" }}>storyteller</span></h3>
            <p><span id="W_Name2">storyteller</span> is a Professional <span id="W_Type1">blog</span> Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of <span id="W_Type2">blog</span>, with a focus on dependability and <span id="W_Spec">education</span>. We're working to turn our passion for <span id="W_Type3">blog</span> into a booming <a href="https://www.blogearns.com" rel="do-follow" style={{ color: "inherit", textDecoration: "none" }} >online website</a>. We hope you enjoy our <span id="W_Type4">blog</span> as much as we enjoy offering them to you.</p>
          </div>
          <div className={style.About_OwnerImageConatiner}>
            <div>
              <h2 style={{ color: "purple" }}>
                About Owner
              </h2>
              <p style={{ fontSize: "30px", fontWeight: "bolder" }}>Bharat Jangir</p>
              <p>
                Bharat jangir is a web geek and loves making things on the Internet.
              </p>
              <p>
                Bharat jangir is fullstack web developer having good experience and skills to  develop amazing things. He helps people to grow on internet
              </p>
              <p>

              </p>

            </div>
            <div>
              <Image src={OwnerImg} alt="Owner" width="220px" height="337px" />
            </div>
            <div>
              <Link href="/contact" ><span style={{ color: "blue", borderBottom: "1px solid black" }}>Contact</span></Link>

              <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
              <p style={{ fontWeight: "bold", textAlign: "center" }}>Thanks For Visiting Our Site<br /><br />
                <span style={{ fontWeight: "bold", textAlign: "center", fontSize: "16px" }}>Have a nice day !</span>
              </p>

            </div>
            {/* <Link href="/contact">Contact</Link>
          <Link href="/">Home</Link> */}


          </div>

        </div>
      </div>
      <AffiliateProducts />
      <Footer />
    </div>
  )
}

export default about
