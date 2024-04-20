import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import avatarImage from "../static/images/avatar.jpg";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "transparent", boxShadow: "none" }}
      sx={{ py: 2 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container spacing={2}>
            <Grid item xs={7}>
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
                    letterSpacing: -1,
                    textDecoration: "none",
                    fontSize: "30.56px",
                    color: "#5A189A",
                  }}
                >
                  Funerals
                  <span style={{ color: "#120534", marginLeft: "6px" }}>
                    Page
                  </span>
                  .
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    fontFamily: "lato",
                    fontWeight: 400,
                    color: "black",
                  }}
                >
                  Making Memories Live
                </Typography>
              </Box>
            </Grid>
            <Grid item container xs={5}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <IconButton
                    aria-label="heart"
                    sx={{
                      color: "#5A189A",
                    }}
                  >
                    <FavoriteBorderIcon fontSize="large" />
                  </IconButton>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#5A189A",
                      fontSize: "12px",
                      padding: "5px 30px",
                      marginLeft: "20px",
                    }}
                  >
                    LIST YOUR BUISNESS
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "50px",
                      borderColor: "#5A189A",
                      color: "#5A189A",
                      fontSize: "12px",
                      padding: "5px 30px",
                      marginLeft: "30px",
                    }}
                  >
                    NEWS FEED
                  </Button>
                </Box>
                <Box sx={{ flexGrow: 0, marginLeft: "25px" }}>
                  <IconButton
                    sx={{
                      "&:hover": {
                        borderColor: "#5A189A",
                      },
                    }}
                  >
                    <Avatar
                      alt="Avatar"
                      src={avatarImage}
                      sx={{ width: 60, height: 60 }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
