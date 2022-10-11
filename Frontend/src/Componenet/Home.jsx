import React from "react";
import {
  Container,
  Button,
  Box,
  useMediaQuery,
  Paper,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Go from "./Go";
function Home() {
  return (
    <Box sx={{ background: "#141526", py: 2 }}>
      <Container>
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
            textTransform: "uppercase",
            color: "white",
            fontSize: "12px",
            py: 4,
          }}
        >
          <Button
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "none",
                color: "#1CBFFF",
              },
            }}
            startIcon={
              <CheckCircleIcon
                sx={{
                  color: "#9193a8",
                  "&:hover": {
                    color: "#1CBFFF",
                  },
                }}
              />
            }
          >
            results
          </Button>
          <Button
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "none",
                color: "#1CBFFF",
              },
            }}
            startIcon={
              <SettingsIcon
                sx={{
                  color: "#9193a8",
                  "&:hover": {
                    color: "#1CBFFF",
                  },
                }}
              />
            }
          >
            setting
          </Button>
        </Box>
        <Go />
      </Container>
    </Box>
  );
}

export default Home;
