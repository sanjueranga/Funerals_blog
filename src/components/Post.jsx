import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

const Post = ({ title, publishedAt, body }) => {
  return (
    <Grid item xs={8}>
      <Box component="section" sx={{ py:5 }}>
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
          {publishedAt || "Posted on: 18.01.2022"}{" "}
        </Typography>
      </Box>

      <Paper sx={{ padding: (theme) => theme.spacing(2) }}>
        {" "}
        <Stack spacing={1}>
          <Typography variant="body1">{body}</Typography>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Post;
