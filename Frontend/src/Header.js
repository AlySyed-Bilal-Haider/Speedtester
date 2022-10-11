import React from "react";
import {
  Container,
  Button,
  Box,
  useMediaQuery,
  Paper,
  Typography,
} from "@mui/material";
import Hidden from "@mui/material/Hidden";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import clsx from "clsx";
const useStyles = makeStyles({
  list: {
    width: 260,
  },
  fullList: {
    width: "auto",
  },
});
const links = [
  { title: "Apps", link: "/apps" },
  { title: "Analysis" },
  { title: "Network" },
  { title: "Developers" },
  { title: "Enterprise" },
  { title: "About" },
  { title: "Register", link: "/register" },
  { title: "login", link: "/login" },
];

export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box mt={10} mb={5} textAlign="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: " 100px",
              height: " 40px",
              background: " #D9D4D5",
              borderRadius: " 24px",
              fontWeight: "bold",
              "&:hover": {
                background: "#D9D4D5",
              },
            }}
          >
            Logo
          </Button>
        </Link>
      </Box>
      <List>
        {links?.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText
              sx={{
                textTransform: "capitalize",
                textAlign: "center",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  background: "#1cbfff",
                },
              }}
              primary={text}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          background: "#141526",
          zIndex: "100px",
          color: "white",
          py: 2,
        }}
        height="80px"
        width="100%"
      >
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            // pl={matches ? 0 : 5}
            // pr={matches ? 0 : 5}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              // flexBasis="20%"
            >
              <Box
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                <Button
                  sx={{
                    width: " 100px",
                    height: " 40px",
                    background: " #D9D4D5",
                    borderRadius: " 24px",
                    fontweight: "bold",
                    "&:hover": {
                      background: "#D9D4D5",
                    },
                  }}
                >
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Logo
                  </Link>
                </Button>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent={matches1 ? "end" : "space-between"}
              alignItems="center"
              // flexBasis={matches1 ? "45px" : "78%"}
            >
              <Box
                display="flex"
                justifyContent="space-around"
                // flexBasis={matches1 ? "0px" : "70%"}
                alignItems="center"
              >
                <Hidden mdDown>
                  {links?.map(({ title, link }, index) => {
                    return (
                      <Box
                        key={index}
                        mr={2}
                        p={1}
                        fontSize="16px"
                        style={{
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                        sx={{
                          "&:hover": {
                            color: "#1CBFFF",
                          },
                        }}
                      >
                        <Link
                          to={link}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <Typography
                            sx={{
                              "&:hover": {
                                color: "#1cbfff",
                              },
                            }}
                          >
                            {title}
                          </Typography>
                        </Link>
                      </Box>
                    );
                  })}{" "}
                </Hidden>
              </Box>

              <Hidden mdUp>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        style={{
                          fontSize: "38px",
                          cursor: "pointer",
                        }}
                      ></MenuIcon>
                    </Button>
                    <Paper>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Hidden>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
