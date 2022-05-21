import Card1 from "./componant/body/card1";
import Card2 from "./componant/body/card2";
import CircleImg from "./componant/body/circleImg";
import Footer1 from "./componant/footer/footer1";
import Footer2 from "./componant/footer/footer2";
import CustomeCarousel from "./componant/header/carousel";
import Navbar1 from "./componant/header/navbar1";
import Navbar2 from "./componant/header/navbar2";
import { Grid } from "@mui/material";
//images
import product from "../../asset/images/product.jpg";
import product2 from "../../asset/images/product2.jpg";
import product3 from "../../asset/images/product3.jpg";
import product4 from "../../asset/images/product4.jpg";

const data = [
  { title: "Mobile", img: product },
  { title: "Beauty", img: product2 },
  { title: "Accessories", img: product3 },
  { title: "Wooden Device", img: product4 },
];
const data2 = [
  {
    title: "All",
    img1: product,
    img2: product2,
    img3: product3,
    img4: product4,
  },
  {
    title: "All",
    img1: product,
    img2: product2,
    img3: product3,
    img4: product4,
  },
  {
    title: "All",
    img1: product,
    img2: product2,
    img3: product3,
    img4: product4,
  },
  {
    title: "All",
    img1: product,
    img2: product2,
    img3: product3,
    img4: product4,
  },
];
let AmazonMain = () => {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <CustomeCarousel />
      <Grid container spacing={2} justifyContent="center" sx={{ my: 2 }}>
        {data?.map((item, index) => (
          <Grid item xs={12} md={4} lg={3} key={index}>
            <Card1 img={item.img} title={item.title} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{ my: 2 }}>
        {data?.map((item, index) => (
          <>
            <Grid item xs={12} md={4} lg={3} key={index}>
              <CircleImg img={item.img} />
            </Grid>
            <Grid item xs={12} md={4} lg={3} key={index}>
              <CircleImg img={item.img} />
            </Grid>
          </>
        ))}
      </Grid>

      <Grid container spacing={2} justifyContent="center" sx={{ my: 2 }}>
        {data2?.map((item, index) => (
          <Grid item xs={12} md={4} lg={3} key={index}>
            <Card2 title={item.title} item={item} />
          </Grid>
        ))}
      </Grid>

      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default AmazonMain;
