import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box, Button, Typography } from "@mui/material";
import ChangingProgressProvider from "./ChangingprocessProvider";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const DownloadUpload = ({ value, text }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          py: { md: 2, xs: 0 },
          mt: { md: 0, xs: 2 },
        }}
      >
        <Button
          startIcon={
            text == "download" ? (
              <ArrowCircleDownIcon color="#1428A2" />
            ) : (
              <ArrowCircleUpIcon color="#1428A2" />
            )
          }
          sx={{ color: "white" }}
        >
          {text} <span style={{ margin: "5px" }}>mbps</span>
        </Button>
      </Box>
      <Typography sx={{ color: "white" }}>{value ? value : "0"}</Typography>
    </>
  );
};
function Speedmeter({ upload, download }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <DownloadUpload text="download" value={download} />
        <DownloadUpload text="Upload" value={upload} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { md: "55%", xs: "100%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography color="white">
            Pings <span>ms</span>
          </Typography>
          <Button startIcon={<ArrowCircleDownIcon />}>Download --</Button>
          <Button startIcon={<ArrowCircleUpIcon />}>Upload --</Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          py: 1,
        }}
      >
        <Box m={2}>
          <ChangingProgressProvider values={[0, download]}>
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`${percentage ? percentage : 0} MB`}
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  strokeLinecap: "round",
                  trailColor: "#eee",
                  pathColor: "#1cbfff",
                })}
              />
            )}
          </ChangingProgressProvider>
        </Box>
        <Box m={2}>
          <ChangingProgressProvider values={[0, upload]}>
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`${percentage ? percentage : 0} MB`}
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  strokeLinecap: "round",
                  trailColor: "#eee",
                  pathColor: "#1cbfff",
                })}
              />
            )}
          </ChangingProgressProvider>
        </Box>
      </Box>
    </>
  );
}

export default Speedmeter;
