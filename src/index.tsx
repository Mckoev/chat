import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {blue, green} from "@mui/material/colors";


const router = createBrowserRouter([
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
        primary: blue,
        secondary: green
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

