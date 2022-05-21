import React from "react";
import { Grid, Box } from "@mui/material";

const Card2 = ({ title, item }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          margin: "10px auto",
          padding: "20px",
          height: "450px",
          minWidth: "300px",
          maxWidth: "350px",
          border: "1px solid lightgrey",
          textAlign: "left",
        }}
      >
        <h2>{title}</h2>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <img src={item.img1} alt="product" height="150" width="100%" />
          </Grid>
          <Grid item xs={6}>
            <img src={item.img2} alt="product" height="150" width="100%" />
          </Grid>
          <Grid item xs={6}>
            <img src={item.img3} alt="product" height="150" width="100%" />
          </Grid>
          <Grid item xs={6}>
            <img src={item.img4} alt="product" height="150" width="100%" />
          </Grid>
        </Grid>

        <p style={{ margin: "10px 0" }}>shop now</p>
      </Box>
    </>
  );
};

export default Card2;
