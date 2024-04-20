import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function AdvertisementCard({ image, logo, header, subtitle }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: 1,
        height: 500,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Removed unnecessary height from CardContent */}

      <CardContent
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)", height: "100%" }}
      >
        <Box sx={{ paddingTop: "200px" }}>
          <img src={logo} alt="Company Logo" />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "white" }}
          >
            {header}
          </Typography>
          <Typography variant="body2" sx={{ color: "#d7d7d7" }}>
            {subtitle}
          </Typography>
          <CardActions>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "50px",
                color: "#5A189A",
                backgroundColor: "white",
                fontSize: "14px",
                padding: "10px 40px",
                marginLeft: "30px",
              }}
            >
              CALL US NOW
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}
