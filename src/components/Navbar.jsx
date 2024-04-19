import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h2"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "sans",
              fontWeight: 700,
              letterSpacing: -3,
              textDecoration: "none",
              fontSize: "30.56px",
              color: "#5A189A",
            }}
          >
            Funerals
            <span style={{ color: "#120534", marginLeft: "6px" }}>Page</span>.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "black",
            }}
          >
            Making Memories Live
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
