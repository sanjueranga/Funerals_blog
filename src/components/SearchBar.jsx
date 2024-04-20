import * as React from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SearchField from "./SearchField";
import { Box } from "@mui/material";

const SearchBar = () => {
  return (
    <Toolbar disableGutters sx={{ backgroundColor: "#5A189A" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Typography
              variant="h2"
              noWrap
              component="a"
              href=""
              sx={{
                display: { md: "flex" },
                fontFamily: "lato",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "24px",
                color: "white",
                py: 3,
              }}
            >
              Blog
            </Typography>
          </Grid>
          <Grid item container xs={5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <SearchField />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Toolbar>
  );
};

export default SearchBar;
