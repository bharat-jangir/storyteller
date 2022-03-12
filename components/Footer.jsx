import React from 'react'
import Link from 'next/link'
import styles from "../styles/footer.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
    return (
        <div className={styles.FooterContainer}>
            <div className={styles.FooterContent}>
                <div className={styles.FooterNavigationLinks}>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/privacy">Privacy</Link>
                </div>
                <div className={styles.SocialmediaContainer}>
                    <div className={styles.Socialmedia_content}>
                        <Link href="https://www.facebook.com/manish.jangir.16144/">
                            <a target="_blank">
                        <FacebookIcon  className={styles.socialIcons} fontSize="large"/>
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/_bharatjangir_/">
                            <a target="_blank">
                        <InstagramIcon className={styles.socialIcons} fontSize="large"/>
                            </a>
                        </Link>
                        <Link href="https://api.whatsapp.com/send?phone=918058155647?text=Hi Sir">
                        <a target="_blank">
                        <WhatsAppIcon  className={styles.socialIcons} fontSize="large"/>
                        </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.CopyRightClaim}>
                    <p>© 2022-23 Article Writer</p>
                </div>

            </div>


        </div>
    )
}

export default Footer
