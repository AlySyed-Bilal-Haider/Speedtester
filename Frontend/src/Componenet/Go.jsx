import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Applications from "./Applications";
import { Hidden } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Gostyle.css";
import Speedmeter from "./Speedmeter";
import { useState } from "react";
import Netissue from "./Netissue";
import axios from "axios";
const url = "http://localhost:8080";
function Go() {
  const [speedMeterState, setSpeedmeterstate] = useState(false);
  const [downspeed, setSpeedState] = useState("");
  const [uploadspeed, setUploadnetstate] = useState();
  const [errorsstate, setErrorstate] = useState(true);
  const fetchdownload = async () => {
    try {
      const { data } = await axios.get(`${url}/downloadspeed`);
      console.log("download ", data);
      setSpeedState(data?.data);
    } catch (error) {
      setErrorstate(false);
      setSpeedmeterstate(false);
      console.log("download error", error);
    }
  };
  const getUploadspeed = async () => {
    try {
      const { data } = await axios.get(`${url}/uploadspeed`);
      console.log("Upload ", data);
      setUploadnetstate(data?.data);
    } catch (error) {
      setErrorstate(false);
      setSpeedmeterstate(false);
      console.log("download error", error);
    }
  };

  useEffect(() => {
    fetchdownload();
  }, []);
  useEffect(() => {
    downspeed?.mbps && getUploadspeed();
  }, [downspeed?.mbps]);
  return (
    <>
      <Box sx={{ py: 2 }}>
        <Box
          sx={{
            py: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {errorsstate == false ? <Netissue /> : ""}
          {speedMeterState === true ? (
            <Box
              sx={{
                width: { md: "50%", xs: "80%" },
                height: "350px",
                backgroundColor: "none",
                cursor: "pointer",
                borderRadius: "50%",
                py: 1,
              }}
            >
              <Speedmeter
                upload={uploadspeed?.mbps}
                download={downspeed?.mbps}
              />
            </Box>
          ) : (
            <>
              {errorsstate == true && (
                <Box
                  onClick={() => {
                    setSpeedmeterstate(true);
                  }}
                  className="cirle"
                  sx={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "none",
                    border: "1px solid #1cbfff",
                    cursor: "pointer",
                    borderRadius: "50%",
                    "&:hover": {
                      backgroundColor: "#151F2F",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      textAlign: "center",
                      position: "relative",
                      top: "32%",
                      fontSize: "50px",
                      fontWeight: 700,
                    }}
                  >
                    Go
                  </Typography>
                </Box>
              )}
            </>
          )}
        </Box>

        {/* zong telenore sections */}
        {errorsstate == true && (
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: { md: "center", xs: "space-around" },
              textTransform: "uppercase",
              color: "white",
              fontSize: "12px",
              width: "100%",
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                width: { md: "30%", xs: "100%" },
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  sx={{ display: "block", fontSize: "20px" }}
                >
                  Zong Telecom{" "}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ fontSize: "12px" }}
                >
                  111.119.187.14
                </Typography>
              </Box>
              <CheckCircleIcon
                sx={{
                  border: "2px solid rgba(145,147,168,.5)",
                  p: 1,
                  borderRadius: "50%",
                  ml: 1,
                  color: "#9193a8",
                }}
              />
            </Box>
            <Box
              sx={{
                display: { md: "flex", xs: "none" },
                alignItems: "flex-start",
                justifyContent: "center",
                width: "25%",
              }}
            >
              <SettingsIcon
                sx={{
                  border: "2px solid rgba(145,147,168,.5)",
                  p: 1,
                  borderRadius: "50%",
                  color: "#9193a8",
                  mr: 1,
                }}
              />
              <Box>
                <Typography sx={{ fontSize: "20px" }}>
                  KK Networks (PVT) LTD{" "}
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  111.119.187.14
                </Typography>
                <Typography sx={{ fontSize: "16px", color: "#1CBFFF" }}>
                  Change Server
                </Typography>
              </Box>
            </Box>
          </Box>
        )}

        {/* start connection and Muti code */}
        <br />
        <Typography
          sx={{
            textAlign: "center",
            color: "#9193a8",
            display: { md: "block", xs: "none" },
          }}
        >
          Connections
        </Typography>
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
            pb: 1,
            color: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ m: 2 }}>Multi</Typography>
            <SettingsIcon
              sx={{
                color: "#9193a8",
                "&:hover": {
                  color: "#1CBFFF",
                  cursor: "pointer",
                },
              }}
            />
            <Typography sx={{ m: 2, color: "#9193a8" }}>Setting</Typography>
          </Box>
        </Box>
        <Hidden mdDown={true}>
          {" "}
          <Applications />
        </Hidden>
      </Box>
    </>
  );
}

export default Go;
