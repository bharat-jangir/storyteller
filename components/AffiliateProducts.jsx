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
      productName: "Dell MS116 1000DPI USB Wired Optical Mouse",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B01HJI0FS2&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: `Movement Detection: Optical, Resolution : 1000dpi
      Cable Length : 1.8 meter, Interface Type : USB
      Colour : Black, Weight : 413 Grams
      Great Aesthetics, Usage ideal for office, education sectors, designing, basic gaming etc
      Comfortable for use in longer periods with performance
      Warranty : 1 Year`,
      link:"https://www.amazon.in/gp/offer-listing/B01HJI0FS2/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B01HJI0FS2&linkCode=am2&tag=bharatjangir1-21&linkId=7e4b5fbf57e10344be4b51f1b6282316"
    },
    {
      productName: "Lenovo Ideapad 3 AMD",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B09MM58Y7Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: `Processor: 5th Gen AMD Ryzen 5 5500U | Speed: 2.1 GHz (Base) - 4.0 GHz (Max) | 6 Cores | 3MB L2 & 8MB L3 Cache
      OS: Pre-Loaded Windows 11 Home with Lifetime Validity
      Pre-Installed: MS Office Home and Student 2021
      Memory and Storage: 8GB RAM DDR4, Upgradable up to 12GB | 512 GB SSD
      Display: 15.6" FHD (1920x1080) | Brightness : 250nits | Anti-Glare
      Design: 4 side narrow bezel | 1.99 cm Thin and 1.65 kg Light | Narrow Bezel
      Battery Life: 3-Cell 45Wh | Upto 7 Hours | Rapid Charge (Up to 80% in 1 Hour)`,
      link:"https://www.amazon.in/gp/offer-listing/B09MM58Y7Q/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B09MM58Y7Q&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },
    {
      productName: "Northzone Lightweight School Bags",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B08678P2T7&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: `COMPATIBLE WITH 15.6 INCH LAPTOP”: The Northzone Backpack fits up to 15.6 inch laptop. Dimensions: 34cm x 15cm x 45.5cm; Weight: 499g; HIGH QUALITY, DURABLE AND WATER REPELLANT FABRIC”: This backpack features in durable snow yarn polyester fabric and streamlined design with a padded interior to protect notebooks and important items
      CONVENIENT TRAVEL" Adjustable shoulder strap and padded laptop compartment together with a quilted back panel make it comfortable for all-day use
      CONVENIENTLY PLACED PADDED LAPTOP COMPARTMENTS AND POCKETS: The padded interior helps protect notebooks and important items. Quick access zippered front pocket for added storage. A quilted back panel make it comfortable for all-day use.
      HIGH QUALITY, CASUAL YET STYLISH DESIGN": very attractive and perfect for school, travel and outdoor activities. The perfect backpack for those needing stylish all-day protection for their laptop.; Pattern Name: Solid; Closure Type: Zipper; Age Range Description: Kid; Pocket Description: Utility Pocket`,
      link:"https://www.amazon.in/gp/offer-listing/B08678P2T7/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B08678P2T7&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },
    {
      productName: "UrbanGabru Clay Hair Wax : Zero to Infinity",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B073XQ8QXK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description:`Now available in white colour: Effortless All-Day Style - UrbanGabru's Zero to infinity Clay Hair Wax is a strong formula designed to give you the hairstyle you want quickly and easily while making sure it sticks around all day. This wax gives strong hold to your hairs.
      Short to Medium Hair Types - You'll see awesome results when used on shorter to medium length hair. Whether the style you're looking for is classic, vintage, modern, messy, spiky or dapper, this wax makes it easy to get at home without worrying about needing salon or barber tools.
      Minimal to Matte Finish & Texture and easy to wash- UrbanGabru's hair wax leaves behind a classic matte finish in any style and texture without leaving behind excess oil. It's also easy to wash off, which means you can keep your style as long as you want but can easily rinse it out when you're done. You won't have to worry about lingering residue or having to rinse multiple times to clean your hair.
      Added Natural & Organic Ingredients - This styling Clay wax is filled with natural and organic ingredients Vitamin E & Earth Clay which adds fullness to hair fibres that is essential to nearly any hairstyle. It also includes Almond oil to restore the natural oils to your hair that can sometimes be lost with regular cleansing and styling.
      A Powerful Wax from a Brand You Can Depend On - With UrbanGabru, you won't need to worry about putting mystery ingredients in your hair and skin. This product is loaded with only the finest ingredients around to ensure you'll have your ideal hairstyle.`,
      link:"https://www.amazon.in/gp/offer-listing/B073XQ8QXK/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B073XQ8QXK&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },
    {
      productName: "blackberrys Men's Solid Slim T-Shirt",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B091TQHKH7&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: `blackberrys Men's Solid Slim T-Shirt`,
      link:"https://www.amazon.in/gp/offer-listing/B091TQHKH7/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B091TQHKH7&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },
    {
      productName: "Redux Analogue Black Dial Men's Watch",
      pic: `//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B0785JJF7L&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=bharatjangir1-21`,
      description: `Model number: Rws0130
      Strap Color: Blue
      Strap Material: Leather
      Watch Movement Type: Quartz
      Dial Color: Blue
      Dial Shape: Round`,
      link:"https://www.amazon.in/gp/offer-listing/B0785JJF7L/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B0785JJF7L&linkCode=am2&tag=bharatjangir1-21&linkId=bf0b8aaa3174c01e7c3c83ada906b422"
    },
    
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
                <Link href={product.link} key={index} >
                <a  target="_blank">
                  <Card className={styles.Affiliate_product} sx={{ maxWidth: 280, mx: 0.5, my: 0.5 }}>
                    <CardActionArea style={{ display: "flex", flexDirection: "column",}}>
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
                        <Typography variant="body2" color="text.secondary"style={{maxHeight:"130px",overflow:"hidden" }}>
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
