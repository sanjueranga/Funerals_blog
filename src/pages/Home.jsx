import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Grid from "@mui/material/Grid";
import Post from "../components/Post";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Post />
        </Grid>
      </Container>
    </>
  );
};

export default Home;
