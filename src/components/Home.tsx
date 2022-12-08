import NavBar from "./NavBar";
import Chat from "./Chat";
import {Grid} from "@mui/material";

const Home = () => {
    return (
        <Grid sx={{
            backgroundColor: "lightgrey",
            height: "100vh",
        }}>
            <NavBar/>
            <Chat/>
        </Grid>
    );
};

export default Home;