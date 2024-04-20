import React from "react";
import { Typography, Grid } from "@mui/material";
import { post } from "../data/post";

const PostBody = () => {
  return (
    <Grid container spacing={1}>
      {post.body.map((option, index) => (
        <Grid item xs={12} key={index}>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "Inter",
              fontWeight: "400",
              alignContent: "center",
              paddingTop: 2,
              paddingBottom: 3,
            }}
          >
            {post.intro}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              fontFamily: "Inter",
              py: 2,
            }}
          >
            {option.title}
          </Typography>
          <Typography
            sx={{ fontFamily: "Inter", fontSize: "16px", textAlign: "justify" }}
          >
            {option.description}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostBody;
