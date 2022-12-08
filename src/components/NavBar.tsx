import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";
import {USER_NAME} from "../constants/constants";
import {Link, useNavigate} from "react-router-dom";


const NavBar = () => {
    const navigate = useNavigate();

    const login = sessionStorage.getItem(USER_NAME)

    function goToLoginPage() {
        sessionStorage.clear()
        navigate("login")
    }

    return (
        <Container sx={{
            flexGrow: 1,
            paddingTop: "10px"
        }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        color="secondary"
                        variant="h6"
                        component="div"
                        onClick={goToLoginPage}
                        sx={{flexGrow: 1}}
                    >
                        Live Chat
                    </Typography>
                    <Typography
                        color="yellow"
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1}}
                    >
                        Your login: {login}
                    </Typography>
                    <Button
                        className="link"
                        variant="outlined"
                        color="secondary"
                        onClick={goToLoginPage}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default NavBar;
