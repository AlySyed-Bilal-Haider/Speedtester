import React from "react";
import { Box, Typography } from "@mui/material";
function Netissue() {
  return (
    <Box
      sx={{
        p: { md: 5, xs: 2 },
        width: { md: "60%", xs: "99%" },
        height: "40%",
        border: "1px solid #FF3366 ",
      }}
    >
      <Typography variant="h3" textAlign="center" color="#FF3366" py={2}>
        DOWNLOAD TEST ERROR
      </Typography>
      <Typography
        sx={{ fontSize: "16px", p: { md: 2, xs: 1 }, color: "white" }}
      >
        A socket error occurred during the download test. A firewall could be
        blocking the connection or the server might be having some issues.
        Please try again later.
      </Typography>
      <Typography
        sx={{ fontSize: "16px", p: { md: 2, xs: 1 }, color: "white" }}
      >
        Alternatively, check out our free Speedtest for Desktop apps for more
        reliable testing.
      </Typography>
    </Box>
  );
}

export default Netissue;
