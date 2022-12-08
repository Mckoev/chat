import React from "react";
import {Avatar, Grid, Typography} from "@mui/material";
import {USER_NAME} from "../constants/constants";

type Props = {
    author: string;
    text: string;
    name: string | null;
    hours: number;
    minutes: number;
};

const Message = (props: Props) => {

    const login = sessionStorage.getItem(USER_NAME)

    function getFlex(author: string) {
        return (author === login) ? 'flex' : ''
    }

    function getFlexEnd(author: string) {
        return (author === login) ? 'flex-end' : ''
    }

    function getJustifyContent(author: string) {
        return (author === login) ? 'flex-end' : ''
    }

    function getColor(author: string) {
        return (author === login) ? 'lightgreen' : 'white'
    }

    return (
        <Grid
            container
            sx={{
                display: "flex",
                margin: "10px",
                flexWrap: 'noWrap',
                width: "100%",
                maxWidth: "900px",
            }}
        >
                <Grid
                    container
                    sx={{
                        display: "flex",
                        justifyContent: getJustifyContent(props.author),
                        backgroundColor: "background.primary",
                        borderRadius: "0 5px 5px 5px",
                        marginLeft: "10px",
                        width: "100%"
                    }}
                >
                    {(props.author !== login) && <Grid
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                        <Avatar/>
                        <Typography>
                            {props.author}
                        </Typography>
                    </Grid>}
                    <Typography
                        color="text.primary"
                        padding={"10px"}
                        fontSize="12px"
                        noWrap={false}
                        sx={{
                            wordBreak: "break-all",
                            backgroundColor: getColor(props.author),
                            margin: '5px',
                            borderRadius: '10px',
                            fontSize: "16px"
                        }}
                        component="div"
                    >
                        {props.text}
                        <Typography
                            sx={{fontSize: "12px",
                            display: getFlex(props.author),
                            justifyContent: getFlexEnd(props.author)}}>
                            {props.hours}: {props.minutes}
                        </Typography>
                    </Typography>
                    {(props.author === login) && <Typography
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                        YOU
                    </Typography>}
                </Grid>
        </Grid>
    )
};

export default Message;
