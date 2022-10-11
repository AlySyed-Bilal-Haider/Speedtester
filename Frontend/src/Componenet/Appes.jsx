import React from "react";
import { Box, Container, Grid, Button, Typography } from "@mui/material";
const Appes = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#0B0C1B" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={6} sx={{ color: "white" }}>
              <Box py={5}>
                <Typography
                  variant="h3"
                  sx={{ display: { md: "block", xs: "none" } }}
                >
                  SPEEDTEST® APPS
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ display: { md: "none", xs: "block" } }}
                >
                  SPEEDTEST® APPS
                </Typography>
                <Typography variant="h5" sx={{ padding: "1rem 0rem" }}>
                  Test your internet speed at any time, on any device
                </Typography>
                <Typography variant="p">
                  You connect to the internet using all kinds of devices. But
                  are you getting the speeds you deserve? Find out with free
                  native apps that measure the speed of your broadband, cellular
                  or Wi-Fi connection on each device.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <img
                width="100%"
                src="https://www.speedtest.net/s/images/speedtest/apps/hero-phone-1x.png"
                alt="Speed test"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#141526" }} py={10}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Box>
                <Typography style={{ color: "#1CBFFF" }} variant="h4">
                  Mobile App
                </Typography>
                <Typography
                  color="white"
                  sx={{
                    padding: "1.5rem 0rem",
                    fontSize: "1.2rem",
                    color: "white",
                  }}
                >
                  Discover the speed of your mobile connection with easy,
                  one-tap testing—accurate anywhere thanks to our massive global
                  server network.
                </Typography>
                <Button
                  style={{
                    padding: "1rem 1rem",
                    border: "2px solid #1CBFFF",
                    borderRadius: "3rem",
                    fontSize: "1.2rem",
                    color: "#1CBFFF",
                    background: "transparent",
                    cursor: "pointer",
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                >
                  SpeedTest for Chrome
                </Button>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box>
                <img
                  width="100%"
                  src="https://www.speedtest.net/s/images/shared/apps/mobile-1x.png"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#0B0C1B" }} py={10}>
        <Container>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Box>
                <img
                  width="100%"
                  src="https://www.speedtest.net/s/images/shared/apps/desktop-1x.png"
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box>
                <Typography sx={{ color: "#1CBFFF" }} variant="h4">
                  Dextop App
                </Typography>
                <Typography
                  variant="h5"
                  color="white"
                  sx={{ padding: "1.5rem 0rem", fontSize: "1.2rem" }}
                >
                  Now there’s no need to fire up your browser to take a
                  Speedtest. Instead, check your connection straight from your
                  desktop with the touch of a button.
                </Typography>
                <Button
                  sx={{
                    padding: "1rem 1rem",
                    border: "2px solid #1CBFFF",
                    borderRadius: "3rem",
                    fontSize: "1rem",
                    color: "#1CBFFF",
                    background: "transparent",
                    cursor: "pointer",
                    marginRight: "2rem",
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                >
                  SpeedTest for Window
                </Button>
                <Button
                  sx={{
                    padding: "1rem 1rem",
                    border: "2px solid #1CBFFF",
                    borderRadius: "3rem",
                    fontSize: "1rem",
                    color: "#1CBFFF",
                    background: "transparent",
                    cursor: "pointer",
                    marginTop: { md: "0rem", xs: "2rem" },
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                >
                  SpeedTest for macOS
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#141526" }} py={10}>
        <Container>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Box>
                <Typography variant="h4" sx={{ color: "#1CBFFF" }}>
                  Browser extension
                </Typography>
                <Typography
                  variant="h3"
                  color="white"
                  sx={{ padding: "1.5rem 0rem", fontSize: "1.2rem" }}
                >
                  Speedtest is now available for Chrome. Launch the app from
                  your toolbar to quickly test your internet performance without
                  interrupting your web experience.
                </Typography>
                <button
                  style={{
                    padding: "1rem 1rem",
                    border: "2px solid #1CBFFF",
                    borderRadius: "3rem",
                    fontSize: "1.2rem",
                    color: "#1CBFFF",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  SpeedTest for Chrome
                </button>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box>
                <img
                  width="100%"
                  src="https://www.speedtest.net/s/images/shared/apps/chrome-1x.png"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#0B0C1B" }} py={10}>
        <Container>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Box>
                <img
                  width="100%"
                  src="https://www.speedtest.net/s/images/shared/apps/appleTV-1x.png"
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box>
                <Typography sx={{ color: "#1CBFFF" }} variant="h4">
                  Tv App
                </Typography>
                <Typography
                  color="white"
                  sx={{ padding: "1.5rem 0rem", fontSize: "1.2rem" }}
                >
                  Find out if your internet connection is slow or your shows are
                  just slow to load with the free Speedtest Apple TV app. You’ll
                  uncover interesting stats like your download and upload speeds
                  whenever you’re ready to watch.
                </Typography>
                <Button
                  sx={{
                    padding: "1rem 1rem",
                    border: "2px solid #1CBFFF",
                    borderRadius: "3rem",
                    fontSize: "1rem",
                    color: "#1CBFFF",
                    background: "transparent",
                    cursor: "pointer",
                    marginRight: "2rem",
                  }}
                >
                  SpeedTest for AppleTv
                </Button>
                <Button
                  sx={{
                    padding: "1rem 1rem",
                    border: "2px solid #1CBFFF",
                    borderRadius: "3rem",
                    fontSize: "1rem",
                    color: "#1CBFFF",
                    background: "transparent",
                    cursor: "pointer",
                    marginTop: { md: "0rem", xs: "2rem" },
                  }}
                >
                  SpeedTest for macOS
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#141526" }} py={10}>
        <Container>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Box>
                <Typography variant="h4" sx={{ color: "#1CBFFF" }}>
                  Command line interface app
                </Typography>
                <Typography
                  variant="h5"
                  color="white"
                  style={{ padding: "1.5rem 0rem", fontSize: "1.2rem" }}
                >
                  Speedtest CLI brings the trusted technology and global server
                  network behind Speedtest to the command line.
                </Typography>
                <Button
                  sx={{
                    padding: "1rem 1rem",
                    border: "2px solid #1CBFFF",
                    borderRadius: "3rem",
                    fontSize: "1.2rem",
                    color: "#1CBFFF",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  SpeedTest for Cli
                </Button>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box>
                <img
                  width="100%"
                  src="https://www.speedtest.net/s/images/shared/apps/cli-1x.png"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#0B0C1B" }} py={10}>
        <Container>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  width="50%"
                  src="https://www.speedtest.net/s/images/shared/apps/vpn-1x.png"
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box>
                <Typography sx={{ color: "#1CBFFF" }} variant="h4">
                  Speedtest VPN™
                </Typography>
                <Typography
                  variant="h5"
                  color="white"
                  style={{ padding: "1.5rem 0rem", fontSize: "1.2rem" }}
                >
                  Speedtest VPN ensures your online privacy and security from
                  the convenience of your Speedtest® mobile application.
                </Typography>
                <Button
                  sx={{
                    padding: "1rem 1rem",
                    border: "2px solid #1CBFFF",
                    borderRadius: "3rem",
                    fontSize: "1.2rem",
                    color: "#1CBFFF",
                    background: "transparent",
                    cursor: "pointer",
                    marginRight: "2rem",
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                >
                  SpeedTest Vpn
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Appes;
