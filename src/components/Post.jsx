import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import headerImage from "../static/images/unsplash_7RWBSYA9Rro.jpg";
import avatarImage from "../static/images/avatar.jpg";
import PostBody from "./PostBody";
import IconButton from "@material-ui/core/IconButton";
import facebookIcon from "../static/images/facebook.png";
import twitterIcon from "../static/images/twitter.png";
import youtubeIcon from "../static/images/youtube.png";
import instagramIcon from "../static/images/insta.png";

const Post = ({ title, publishedAt, body }) => {
  return (
    <Grid item xs={8}>
      <Box component="section" sx={{ py: 5 }}>
        <Typography
          sx={{
            fontSize: "24px",
            fontFamily: "lato",
            fontWeight: "900",
          }}
        >
          {title || "How to Deal with Loss in the Workplace"}
        </Typography>{" "}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "16px",
            fontFamily: "lato",
            fontWeight: "400",
          }}
        >
          {publishedAt || "Posted on: 18.01.2022"}
        </Typography>
      </Box>

      <Paper sx={{ padding: (theme) => theme.spacing(5) }}>
        <Stack spacing={2} direction="column">
          {" "}
          <Box component="section">
            <img src={headerImage} alt="Post header" width="98%" />
          </Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              alt="Avatar"
              src={avatarImage}
              sx={{ width: 60, height: 60 }}
            />

            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "lato",
                  fontWeight: "800",
                }}
              >
                Cameron Williamson
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: "16px",
                  fontFamily: "lato",
                  fontWeight: "400",
                }}
              >
                Community Writer
              </Typography>
            </Box>
          </Stack>
          <Stack spacing={2} alignItems="center">
            <PostBody />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
              padding: (theme) => theme.spacing(2),
              "&:hover": {
                backgroundColor: (theme) => theme.palette.action.hover,
              }, // Add hover effect
            }}
          >
            <IconButton aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" width="36" height="36" />
            </IconButton>
            <IconButton aria-label="Twitter">
              {" "}
              <img src={twitterIcon} alt="Twitter" width="36" height="36" />
            </IconButton>
            <IconButton aria-label="YouTube">
              <img src={youtubeIcon} alt="YouTube" width="36" height="36" />
            </IconButton>
            <IconButton aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" width="36" height="36" />
            </IconButton>
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Post;
