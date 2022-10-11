import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Grid,
} from "@mui/material";

function Footer() {
  return (
    <>
      <Box sx={{ pt: 8, pb: 2, background: "black" }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <Box sx={{ color: "#868c98" }}>
                <Typography sx={{ color: "white" }}> SPEEDTEST®</Typography>
                <Typography>Advertise</Typography>
                <Typography>Ookla 5G Map™</Typography>
                <Typography>Ookla Analysis</Typography>
                <Typography>Speedtest Awards™</Typography>
                <Typography>Speedtest Global Index™</Typography>
                <Typography>Performance Directory</Typography>
                <Typography>Speedtest Servers™</Typography>
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box sx={{ color: "#868c98" }}>
                <Typography sx={{ color: "white" }}>Apps</Typography>
                <Typography>Android</Typography>
                <Typography>Apple TV</Typography>
                <Typography>CLI</Typography>
                <Typography>Google Chrome</Typography>
                <Typography>iOS</Typography>
                <Typography>macOS</Typography>
                <Typography>Windows</Typography>
                <Typography>Speedtest VPN™</Typography>
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box sx={{ color: "#868c98" }}>
                <Typography sx={{ color: "white" }}> IMPORTANT LINK</Typography>
                <Typography>Contact us</Typography>
                <Typography>Signup up</Typography>
                <Typography>Login</Typography>
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box sx={{ color: "#868c98" }}>
                <Typography sx={{ color: "white" }}> IMPORTANT LINK</Typography>
                <Typography>Contact us</Typography>
                <Typography>Signup up</Typography>
                <Typography>Login</Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ p: 2, position: "relative", bottom: "0px" }}>
            <Typography sx={{ color: "#868c98" }}>
              Copyright ©2022 All rights reserved | Speed tester
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
