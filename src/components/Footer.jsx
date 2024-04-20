import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import facebookIcon from "../static/images/facebook.png";
import twitterIcon from "../static/images/twitter.png";
import youtubeIcon from "../static/images/youtube.png";
import instagramIcon from "../static/images/insta.png";

const socialLinks = [
  { icon: facebookIcon, link: "https://www.facebook.com/", name: "facebook" },
  { icon: twitterIcon, link: "https://www.twitter.com/", name: "facebook" },
  {
    icon: instagramIcon,
    link: "https://www.instagram.com/",
    name: "facebook",
  },
  { icon: youtubeIcon, link: "https://www.youtube.com/", name: "facebook" },
];

const websiteLinks = [
  { title: "Blog", link: "#" },
  { title: "Help/ FAQ", link: "#" },
  { title: "Contact Us", link: "#" },
  { title: "Privacy Policy", link: "#" },
  { title: "Cookie Policy", link: "#" },
  { title: "Terms & Conditions", link: "#" },
];

const websiteLinksFirstRow = websiteLinks.slice(0, 3);
const websiteLinksSecondRow = websiteLinks.slice(3, 6);

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", mt: "auto", py: 6 }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {socialLinks.map((socialLink) => (
              <IconButton size="small" href={socialLink.link}>
                <img
                  src={socialLink.icon}
                  alt={socialLink.name}
                  width="24"
                  height="24"
                />
              </IconButton>
            ))}
          </Grid>
          <Grid item xs={6} align="right">
            {websiteLinksFirstRow.map((link) => (
              <Link key={link.title} underline="none" color="text.secondary">
                {link.title}
              </Link>
            ))}
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              ©2021 www.funreralspage.com. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={6} align="right">
            {websiteLinksSecondRow.map((link) => (
              <Link key={link.title} underline="none" color="text.secondary">
                {link.title}
              </Link>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
