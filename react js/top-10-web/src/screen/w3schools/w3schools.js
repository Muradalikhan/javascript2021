import React from "react";
import CommonSections from "./components/CommonSections";
import Header from "./components/Header";
import Section1 from "./components/section1";
import { data } from "./mockup/commonSections";
import { Grid } from "@mui/material";
import {
  RectangaleCardData,
  RecSmCardData1,
  RecSmCardData2,
  RecXsCardData,
} from "./mockup/rectangleCard";
import RectangleCard from "./components/RectangleCard";
import RecSmCard from "./components/RecSmCard";

const W3schools = () => {
  return (
    <div>
      <Header />
      <Section1 />
      {data?.map((item, ind) => (
        <CommonSections
          key={ind}
          sectionColor={item.sectionColor}
          heading={item.heading}
          description={item.description}
          btn1Color={item.btn1Color}
          btn2Color={item.btn2Color}
          btn3Color={item.btn3Color}
          btn1Text={item.btn1Text}
          btn2Text={item.btn2Text}
          btn3Text={item.btn3Text}
          cardImg={item.cardImg}
          videoTutorial={item.videoTutorial}
        />
      ))}

      <Grid
        container
        spacing={8}
        px={6}
        py={12}
        sx={{ backgroundColor: "#282A35" }}
      >
        {RectangaleCardData?.map((item, ind) => (
          <Grid item xs={12} md={6} key={ind}>
            <RectangleCard item={item} />
          </Grid>
        ))}
        {RecSmCardData1?.map((item, ind) => (
          <Grid item xs={12} md={6} key={ind}>
            <RecSmCard item={item} />
          </Grid>
        ))}
        {RecXsCardData?.map((item, ind) => (
          <Grid item xs={6} md={3} key={ind}>
            <RecSmCard item={item} />
          </Grid>
        ))}
        {RecSmCardData2?.map((item, ind) => (
          <Grid item xs={12} md={6} key={ind}>
            <RecSmCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default W3schools;
