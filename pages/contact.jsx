import React from 'react'
import Header from '../components/header'
import AffiliateProducts from '../components/AffiliateProducts'
import Footer from '../components/Footer'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import style from "../styles/contact.module.css"


function contact() {
    return (
        <div>
            <Header />
            <div className={style.contact_waydecsrcibe}>
                <p>
                    There are many ways as given below to contact us. 
                    You can choose any one and contact us and can tell us Your
                    questions or anything that you want 
                </p>

            </div>
            <div className={style.contact_Options}>
                <div>

                <Link href="https://www.facebook.com/manish.jangir.16144/">
                    <div className={style.SocialIcon_container}>
                    <p>Contact us on Facebook by clicking on the Icon</p>
                    <a target="_blank">
                    Facebook
                        <FacebookIcon className={style.SocialIcon} fontSize="large" />
                    </a>
                    </div>
                </Link>
                </div>
                <div>
                <Link href="https://www.instagram.com/_bharatjangir_/">
                    <div className={style.SocialIcon_container}>
                        <p>Contact us on Instagram by clicking on the Icon</p>
                    <a target="_blank">
                    Instagram
                        <InstagramIcon className={style.SocialIcon} fontSize="large" />
                    </a>
                    </div>
                </Link>
                </div>
                <div>
                <Link href="https://api.whatsapp.com/send?phone=918058155647?text=Hi Sir">
                    <div className={style.SocialIcon_container}>
                    <p>Contact us on Whatsapp by clicking on the Icon</p>
                    <a target="_blank">
                    Whatsapp
                        <WhatsAppIcon className={style.SocialIcon} fontSize="large" />
                    </a>
                    </div>
                </Link>
                </div>
            </div>
            <AffiliateProducts />
            <Footer />

        </div>
    )
}

export default contact
