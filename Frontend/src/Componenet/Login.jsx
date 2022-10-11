import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { app } from "../Componenet/Firebase/Firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
const Login = () => {
  const navigate = useNavigate();
  const [emailstate, setEmailstate] = useState("");
  const [passwordstate, setPassword] = useState("");
  const inputStyled = {
    border: "1px solid white",
    borderRadius: "5px",
    height: "40px",
    color: "white",
  };
  const isSubmithandle = async () => {
    const auth = getAuth(app);
    try {
      await signInWithEmailAndPassword(auth, emailstate, passwordstate);
    } catch (error) {
      const errorMessage = error.message;
      alert(`${errorMessage}`);
      // console.log("errorMessage", errorMessage);
    }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  };

  return (
    <Box sx={{ background: "#26273B", py: 3 }}>
      <Container>
        <Grid container spacing={4} pt={5}>
          <Grid item md={6} xs={12}>
            <Typography
              sx={{ color: "white", textAlign: { md: "left", xs: "center" } }}
              variant="h4"
            >
              CREATE AN ACCOUNT
            </Typography>
            <Typography
              sx={{
                color: "#8A8BA1",
                margin: "2rem 0rem",
                textAlign: "justify",
              }}
            >
              Join the millions of other people helping us to accelerate the
              Internet! By creating an account, you’ll be able to access your
              historical results anywhere and manage your Speedtest preferences.
            </Typography>
            <Typography sx={{ margin: "2rem 0rem", color: "#8A8BA1" }}>
              Do you already have an account, but you forgot your password?
              <br />
              <span style={{ color: "#1CBFFF" }}>You can reset it here.</span>
            </Typography>
            <Typography sx={{ margin: "2rem 0rem", color: "#8A8BA1" }}>
              Need a new confirmation email?
              <span style={{ color: "#1CBFFF" }}>
                <br />
                You can resend it here.
              </span>
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box sx={{ pt: { md: 10, xs: 0 } }}>
              <Typography
                sx={{ color: "white", fontSize: "1.5rem" }}
                variant="h4"
              >
                Login Here !
              </Typography>
              <Typography
                sx={{
                  color: "#8A8BA1",
                  margin: "2rem 0rem",
                  textAlign: "justify",
                }}
              >
                Fill out the form to create your account. We'll complete your
                registration by sending a confirmation email to the address
                provided.
              </Typography>
              <Typography sx={{ color: "#8A8BA1", marginBottom: "0.5rem" }}>
                Email address (this will be your login)
              </Typography>
              <TextField
                type="email"
                value={emailstate}
                onChange={(e) => {
                  setEmailstate(e.target.value);
                }}
                inputProps={{ style: { fontFamily: "Arial", color: "white" } }}
                id="outlined-basic"
                style={inputStyled}
                sx={{
                  width: { md: "50%", xs: "100%" },
                  "& fieldset": { border: "none", outline: "none" },
                }}
                variant="outlined"
                required
              />

              <Typography
                sx={{
                  color: "#8A8BA1",
                  marginBottom: "0.5rem",
                  marginTop: "1.5rem",
                }}
              >
                Choose a password
              </Typography>
              <TextField
                type="password"
                value={passwordstate}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                inputProps={{ style: { fontFamily: "Arial", color: "white" } }}
                id="outlined-basic"
                style={inputStyled}
                sx={{
                  width: { md: "50%", xs: "100%" },
                  "& fieldset": { border: "none", outline: "none" },
                }}
                variant="outlined"
                required
              />

              <Box py={4}>
                <FormControlLabel
                  sx={{
                    color: "#8A8BA1",
                    marginBottom: "0.5rem",
                  }}
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      style={{ color: "white" }}
                    />
                  }
                  label="Please send me newsletters, offers and other updates from Ookla.."
                />
                <Typography
                  sx={{
                    color: "#8A8BA1",
                    marginBottom: "1rem",
                  }}
                >
                  {" "}
                  You may unsubscribe from the newsletters at any time.
                </Typography>
              </Box>
              <Button
                onClick={isSubmithandle}
                sx={{
                  borderRadius: "3rem",
                  color: "#0B0C1B",
                  background: "#1CBFFF",
                  padding: "0.5rem 1rem",
                  fontSize: "1.2rem",
                  "&:hover": {
                    background: "#1CBFFF",
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
