import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Grid from "@mui/material/Grid";
import Post from "../components/Post";
import Container from "@mui/material/Container";
import SidePanel from "../components/SidePanel";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Post />
          <SidePanel />
        </Grid>
      </Container>
    </>
  );
};

export default Home;
