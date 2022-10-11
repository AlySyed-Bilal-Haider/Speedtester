import React from "react";
import { Button, Box, Container, Grid, Typography } from "@mui/material";
import cli from "../images/cli.png";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import iso from "../images/iso.png";
import WindowIcon from "@mui/icons-material/Window";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
function Applications() {
  const apps = [
    {
      link: "https://b.cdnst.net/images/icg_insights.svg",
      text: "Subscirbe",
      mainHeading: "OOKLA INSIGHTS™",
      subHeading:
        "Read the latest analyses of mobile and fixed network performance around the world.",
    },
    {
      link: "https://b.cdnst.net/images/icg_globalindex.svg",
      text: "See Ranking",
      mainHeading: "SPEEDTEST GLOBAL INDEX™",
      subHeading:
        "Find out how your country's internet ranks on the Speedtest Global Index.",
    },
    {
      link: "https://b.cdnst.net/images/icg_5g.svg",
      text: "View Map",
      mainHeading: "OOKLA 5G MAP™",
      subHeading: "Discover your nearest 5G deployment on the Ookla 5G Map.",
    },
    {
      link: "https://b.cdnst.net/images/icg_enterprise.svg",
      text: "see solutions",
      mainHeading: "ENTERPRISE SOLUTIONS",
      subHeading:
        "Learn how to benefit from enterprise-level data on network performance.",
    },
  ];

  const applist = [
    {
      text: "Android",
      icons: <ImportantDevicesIcon />,
    },
    {
      text: "CLI",
    },
    {
      text: "Windows",
      icons: <WindowIcon />,
    },
    {
      text: "Mac",
      icons: <LaptopMacIcon />,
    },
    {
      text: "Chrome",
      icons: <GoogleIcon />,
    },
    {
      text: "Apple TV",
      icons: <AppleIcon />,
    },
  ];
  return (
    <Box sx={{ py: 4 }}>
      <Typography
        align="center"
        sx={{ fontSize: { md: "18px", xs: "16px", p: { md: 6, xs: 4 } } }}
        color="white"
      >
        Use Speedtest® on all your devices with our free native apps.
        <br /> Download Speedtest apps for:
      </Typography>
      <Container maxWidth="lg" py={2}>
        <Grid container spacing={2} px={16}>
          {applist.map(({ text, icons }, i) => {
            return (
              <Grid item md={2} xs={4} key={i}>
                <Box sx={{ textAlign: "center", py: 2 }} key={i}>
                  {!icons ? (
                    <img
                      src={cli}
                      alt=""
                      style={{
                        width: "50px",
                        height: "30px",
                      }}
                    />
                  ) : (
                    <span
                      style={{
                        width: "60px",
                        height: "40px",
                        color: "#9191A4",
                      }}
                    >
                      {icons}
                    </span>
                  )}

                  <Typography sx={{ color: "white", py: 1 }}>{text}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <br />
      <Container maxWidth="lg" py={2}>
        <Grid container spacing={2}>
          {apps?.map(({ link, text, mainHeading, subHeading }, i) => {
            return (
              <Grid
                item
                md={3}
                key={i}
                sx={{ textAlign: "center", mt: { md: 1, xs: 2 } }}
              >
                <img
                  src={link}
                  alt=""
                  style={{
                    height: "64px",
                    margin: "5px",
                    position: "relative",
                    width: "100%",
                  }}
                />
                <Typography
                  variant="contained"
                  component="h2"
                  sx={{
                    fontSize: "15px",
                    fontWeight: 700,
                    py: 1,
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  {mainHeading}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#9191A4",
                    py: 2,
                    fontSize: "18px",
                  }}
                >
                  {subHeading}
                </Typography>
                <Button
                  sx={{
                    mt: 1,
                    width: "50%",
                    height: "39px",
                    border: "2px solid #9193a8",
                    borderRadius: "18px",
                    fontWeight: 700,
                    backgroundColor: "#141526",
                    "&:hover": {
                      backgroundColor: "#141526",
                      color: "white",
                      border: "2px solid white",
                    },
                  }}
                >
                  {text}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Applications;
