import React from "react";
import Grid from "@mui/material/Grid";
import AdvertisementCard from "./AdvertisementCard";
import addImage1 from "../static/images/add1.png";
import addImage2 from "../static/images/add2.png";
import addImage3 from "../static/images/add3.png";
import addImage4 from "../static/images/add4.png";
import logo1 from "../static/images/logo_1.png";
import logo2 from "../static/images/birks 2.png";
import { Box } from "@mui/material";

const SidePanel = () => {
  const adsData = [
    {
      image: addImage1,
      logo: logo1,
      header: "Make your funeral plans in advance",
      subtitle:
        "Venenatis, quis risus justo, nisl, lorem venenatis. Nunc, pulvinar amet in odio ac tellus",
    },
    {
      image: addImage2,
      header: "We are here for you...",
      subtitle: "Subtitle 2",
      logo: logo2,
    },
    {
      image: addImage3,
      header: "Find the best funeral directors",
      subtitle:
        "Venenatis, quis risus justo, nisl, lorem venenatis. Nunc, pulvinar amet in odio ac tellus",
    },
    {
      image: addImage4,
      header: "Header 4",
      subtitle:
        "Venenatis, quis risus justo, nisl, lorem venenatis. Nunc, pulvinar amet in odio ac tellus",
    },
  ];

  return (
    <Grid item xs={4}>
      <Box sx={{ py: 20 }}>
        {adsData.map((ad) => (
          <Box sx={{ paddingBottom: "30px" }}>
            <AdvertisementCard key={ad.header} {...ad} />
          </Box>
        ))}
      </Box>
    </Grid>
  );
};

export default SidePanel;
