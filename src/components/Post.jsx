import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const Post = ({ title, publishedAt, body }) => {
  return (
    <Grid item xs={8}>
      <Paper sx={{ padding: (theme) => theme.spacing(2) }}>
        {" "}
        <Stack spacing={1}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "24px",
              fontFamily: "lato",
            }}
          >
            {title || "How to Deal with Loss in the Workplace"}
          </Typography>{" "}
          <Typography variant="body2" color="text.secondary">
            {publishedAt || "Published at: Unknown"}{" "}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Post;
