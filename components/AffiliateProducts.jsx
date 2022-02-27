import Link from 'next/link'
import React from 'react'
import styles from "../styles/AffiliateProduct.module.css"
import Logo from "../Images/Logo.png"
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function AffiliateProducts() {
  const Products = [
    {
      productName: "the king",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B07P898VNR&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world ",
      link:"https://www.amazon.in/gp/offer-listing/B07P898VNR/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07P898VNR&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },
    // {
    //   productName: "the king",
    //   pic: Logo,
    //   description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world "

    // },
    // {
    //   productName: "the king",
    //   pic: Logo,
    //   description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world "

    // },
    // {
    //   productName: "the king",
    //   pic: Logo,
    //   description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world "

    // },
    // {
    //   productName: "the king",
    //   pic: Logo,
    //   description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world this is a brand new  product launched by Bharat jangir the no. 1 devloper in this worldthis is a brand new  product launched by Bharat jangir the no. 1 devloper in this worldthis is a brand new  product launched by Bharat jangir the no. 1 devloper in this world "
    // },
    // {
    //   productName: "the king",
    //   pic: Logo,
    //   description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world "

    // },
    // {
    //   productName: "the king",
    //   pic: Logo,
    //   description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world "

    // },
    // {
    //   productName: "the king",
    //   pic: Logo,
    //   description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world "

    // }
  ]

  // <a target="_blank"  href="https://www.amazon.in/gp/offer-listing/B07P898VNR/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07P898VNR&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B07P898VNR&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21" ></a>
  return (
    <div className={styles.AffiliateProducts_container}>
      <div className={styles.AffiliateProducts_heading}>
        <p>Amazing Products For Our Favourite One</p>
      </div>
      <div className={styles.AffiliateProducts_Content_container}>
        <div className={styles.Affiliate_poducts_wraper}>
          {
            Products.map((product, index) => {
              return (
                <Link href={product.link} >
                <a  target="_blank">
                  <Card className={styles.Affiliate_product} sx={{ maxWidth: 280, mx: 0.5, my: 0.5 }} key={index}>
                    <CardActionArea style={{ display: "flex", flexDirection: "column" }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={product.pic}
                        alt={product.productName}
                        style={{objectFit:"contain"}}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.productName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {
                            product.description
                          }
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </a>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default AffiliateProducts
