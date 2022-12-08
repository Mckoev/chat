import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {USER_NAME} from "../constants/constants";

const Login = () => {

    const [login, setLogin] = useState("");
    const navigate = useNavigate();

    function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            addLogin()
        }
    }

    function addLogin() {
        if (login) {
            sessionStorage.setItem(USER_NAME, login)
            navigate("home")
        }
    }

    return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        width={"100%"}
        height={"600px"}
      >
        <Grid
          container
          sx={{
            display: "flex",
            backgroundColor: "background.paper",
            borderRadius: "5px",
          }}
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          width={"80%"}
          maxWidth={"370px"}
          height={"200px"}
        >
          <Typography color="text.primary" variant="h4" component="div">
            Enter your name
          </Typography>
            <TextField
                focused
                color="primary"
                id="textForMessage"
                label="Type your login"
                variant="outlined"
                autoComplete="false"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                onKeyDown={ onKeyDown}
            ></TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={ addLogin}
          >
            Sign in
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
