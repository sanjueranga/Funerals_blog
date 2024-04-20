import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import headerImage from "../static/images/unsplash_7RWBSYA9Rro.jpg";
import avatarImage from "../static/images/avatar.jpg";

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

      <Paper sx={{ padding: (theme) => theme.spacing(2) }}>
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
            <Typography>{body || "Post content"}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Post;
