import * as React from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Searchbar = () => {
  return (
    <Toolbar disableGutters sx={{ backgroundColor: "#5A189A" }}>
      <Container maxWidth="xl">
        <Box>
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
              fontSize: "30.56px",
              color: "white",
              py: 3,
            }}
          >
            Blog
          </Typography>
        </Box>
      </Container>
    </Toolbar>
  );
};

export default Searchbar;
