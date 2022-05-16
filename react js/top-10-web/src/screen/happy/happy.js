import React from "react";
import Card from "./componant/card/Card";
import Carosol from "./componant/carousel/Carosol";
import { Grid, Box } from "@mui/material";
//images
import product1 from "./asset/images/newArrival/product1.jpg";
import product2 from "./asset/images/newArrival/product2.jpg";
import product3 from "./asset/images/newArrival/product3.jpg";
import product4 from "./asset/images/newArrival/product4.jpg";
import product5 from "./asset/images/newArrival/product5.jpg";
import product6 from "./asset/images/newArrival/product6.jpg";
import product7 from "./asset/images/newArrival/product7.jpg";
import product8 from "./asset/images/newArrival/product8.jpg";
import product9 from "./asset/images/newArrival/product9.jpg";
import product10 from "./asset/images/newArrival/product10.jpg";
import product11 from "./asset/images/newArrival/product11.jpg";
import product12 from "./asset/images/newArrival/product12.jpg";
import "./happy.css";

const data = [
  { title: "title", des: "a delicious yummy cake", img: product1 },
  { title: "title", des: "a delicious yummy cake", img: product2 },
  { title: "title", des: "a delicious yummy cake", img: product3 },
  { title: "title", des: "a delicious yummy cake", img: product4 },
  { title: "title", des: "a delicious yummy cake", img: product5 },
  { title: "title", des: "a delicious yummy cake", img: product6 },
  { title: "title", des: "a delicious yummy cake", img: product7 },
  { title: "title", des: "a delicious yummy cake", img: product8 },
  { title: "title", des: "a delicious yummy cake", img: product9 },
  { title: "title", des: "a delicious yummy cake", img: product10 },
  { title: "title", des: "a delicious yummy cake", img: product11 },
  { title: "title", des: "a delicious yummy cake", img: product12 },
];
export default function Happy() {
  return (
    <Box sx={{ backgroundColor: "#fde700" }}>
      <Carosol />
      <Box p={3}>
        <Grid container spacing={2} justifyContent="center">
          {data?.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3.5} key={index}>
              <Card item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
