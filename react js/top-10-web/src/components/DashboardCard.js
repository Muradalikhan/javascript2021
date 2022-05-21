import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function DashboardCard({ img, title, onClick }) {
  return (
    <Card
      sx={{
        maxWidth: 445,
        cursor: "pointer",
        "&:hover": { boxShadow: "4px 4px 8px #444" },
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height="280"
        width="100%"
        image={img}
        alt="cardimg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#000">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
