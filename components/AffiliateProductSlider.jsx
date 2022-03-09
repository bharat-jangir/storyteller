import React from 'react'
import styles from "../styles/affiliateproductslider.module.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from "next/link"

function AffiliateProductSlider() {
  const Products = [
    {
      productName: "the king",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B093RXP69Y&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world ",
      link:"https://www.amazon.in/gp/offer-listing/B093RXP69Y/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B093RXP69Y&linkCode=am2&tag=bharatjangir1-21&linkId=d3a85cea1dd499b969c3df0d261fc5cc"
    },
    {
      productName: "Kraasa Sneakers for Men",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B07VTCB2NR&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world ",
      link:"https://www.amazon.in/gp/offer-listing/B07VTCB2NR/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07VTCB2NR&linkCode=am2&tag=bharatjangir1-21&linkId=12c53373164aa4db829addccffc91fd7"
    },
    {
      productName: "the king",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B08KDDDQVS&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world ",
      link:"https://www.amazon.in/gp/offer-listing/B08KDDDQVS/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B08KDDDQVS&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },
    {
      productName: "the king",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B094PQNN21&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world ",
      link:"https://www.amazon.in/gp/offer-listing/B094PQNN21/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B094PQNN21&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },
    {
      productName: "the king",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B094P3NSMJ&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world ",
      link:"https://www.amazon.in/gp/offer-listing/B094P3NSMJ/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B094P3NSMJ&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },
    {
      productName: "the king",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B077N7DDL1&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world ",
      link:"https://www.amazon.in/gp/offer-listing/B077N7DDL1/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B077N7DDL1&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },
    {
      productName: "the king",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B08GP7BP93&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world ",
      link:"https://www.amazon.in/gp/offer-listing/B08GP7BP93/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B08GP7BP93&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },
    {
      productName: "the king",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B098B4QSZL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world ",
      link:"https://www.amazon.in/gp/offer-listing/B098B4QSZL/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B098B4QSZL&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },
    {
      productName: "the king",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B019WGIAZE&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world ",
      link:"https://www.amazon.in/gp/offer-listing/B019WGIAZE/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B019WGIAZE&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },
    {
      productName: "the king",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B08JVZ7J11&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world ",
      link:"https://www.amazon.in/gp/offer-listing/B08JVZ7J11/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B08JVZ7J11&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },
    {
      productName: "the king",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B0995P8VJJ&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: "this is a brand new  product launched by Bharat jangir the no. 1 devloper in this world ",
      link:"https://www.amazon.in/gp/offer-listing/B0995P8VJJ/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B0995P8VJJ&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },

  ]
  return (
    <div className={styles.AffiliateProductSlider_container}>
      {
            Products.map((product, index) => {
              return (
                <Link href={product.link} key={index} >
                <a  target="_blank">
                  <Card className={styles.Affiliate_product} sx={{ maxWidth: 280, mx: 0.5, my: 0.5 }}>
                    <CardActionArea style={{ display: "flex", flexDirection: "column",width:"150px" }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={product.pic}
                        alt={product.productName}
                        style={{objectFit:"contain"}}
                      />
                      
                      {/* <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.productName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {
                            product.description
                          }
                        </Typography>
                      </CardContent> */}
                    </CardActionArea>
                  </Card>
                </a>
                </Link>
              )
            })
          }
    </div>
  )
}

export default AffiliateProductSlider
