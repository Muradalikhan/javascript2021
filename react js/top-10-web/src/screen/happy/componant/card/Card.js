import React from "react";
import { Grid } from "@mui/material";

export default function Card({ item }) {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#fff",
        p: 2,
        boxShadow: "4px 4px 8px #4546467d",
        "&:hover": { boxShadow: "none" },
      }}
    >
      <Grid item xs={6}>
        <img
          src={item.img}
          class="img-fluid rounded-start"
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid item xs={6}>
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">{item.des}</p>
          <button class="btn btn-dark">Add to card</button>
        </div>
      </Grid>
    </Grid>
  );
}
