import Header from "../components/header"
import Footer from "../components/Footer"
import AffiliateProducts from "../components/AffiliateProducts"
import Image from "next/image"
import style from "../styles/about.module.css"
import OwnerImg from "../Images/Logo.png"
import Link from "next/link"

function about() {
  return (
    <div>
      <Header/>
      <div className={style.About_ContentContainer}>
        <div className={style.About_OwnerImageConatiner}>
          <div>
            <Image src={OwnerImg} alt="Owner" width="200px" height="200px"/>
          </div>
          <div>

          </div>
          <Link href="/contact">Contact</Link>
          <Link href="/">Home</Link>


        </div>
      </div>
      <AffiliateProducts/>
      <Footer/>
    </div>
  )
}

export default about
