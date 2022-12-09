import ReactDOM from 'react-dom/client';
import './index.css';
import {createHashRouter, RouterProvider,} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {blue, green, orange} from "@mui/material/colors";


const router = createHashRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "login",
        element: <Login/>,
    },
    {
        path: "home",
        element: <Home/>,
    },
    {
        path: "*",
        element: <Login/>
    }
]);

const theme = createTheme({
    palette: {
        primary: {
            main: '#1e88e5',
            light: '#fff3e0'
        },
        secondary: {
            main: '#90ee90',
            light: "#9ad29c"
        },
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
    </ThemeProvider>
);

