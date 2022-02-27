import styles from "../styles/header.module.css"
import Link from "next/link"
import Image from "next/image"
import Logo from "../Images/Logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import Router from "next/router"
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';


function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className={styles.header}>
      {
      drawerOpen &&
        <div className={styles.Drawer_container} onClick={() => setDrawerOpen(false)}>
          {
            <React.Fragment>
              <div className={styles.Drawer}>
                <div className={styles.Drawer_CloseIcon}>
                  <CloseIcon color="error" onClick={() => setDrawerOpen(false)}/>
                </div>
                <div className={styles.Drawer_menue}>
                  <Link href="/about">
                  About
                  </Link>
                  <Link href="/contact">
                  Contact
                  </Link>
                </div>
                

              </div>
            </React.Fragment>
          }

        </div>
      }

      <div className={styles.Logo_container} onClick={() => Router.push({
        pathname: '/'
      })}>
        <div className={styles.Logo}>
          <Image src={Logo} alt="logo"></Image>
        </div>
        <h1>Story Teller</h1>
      </div>

      <div className={styles.Links_container}>
        <Link href="/about">
          About
        </Link>
        <Link href="/contact">
          Contact
        </Link>
        {/* <Link href="/">
          More
        </Link> */}
      </div>
      <div className={styles.HamburgerIcon} onClick={()=>setDrawerOpen(true)}>
        <MenuIcon fontSize="large" />
      </div>


    </div>
  )
}

export default Header
