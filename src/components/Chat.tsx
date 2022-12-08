import {Button, Container, Grid, TextField,} from "@mui/material";
import React from "react";
import Message from "./Message";
import useChatLogic from "../hooks/useChatLogic";


const Chat = () => {

    const {
        messages,
        textMessage,
        setTextMessage,
        login,
        sendMessage,
        messagesEndRef,
        onKeyDown,
    } = useChatLogic()

    return (
        <Container>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                width={"100%"}
                height={"90vh"}
                sx={{
                    backgroundColor: "lightGreen",
                }}
            >
                <Grid
                    container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "5px",
                        borderRadius: "5px",
                        overflow: "auto",
                        backgroundColor: "#fff3e0",
                        width: "100%",
                        maxWidth: "1000px",
                        padding: "10px"
                    }}
                    direction="column"
                    justifyContent="flex-start"
                    alignContent="flex-start"
                    flexWrap="nowrap"
                    alignItems="flex-start"
                    width="100%"
                    height="80%"
                >
                    {messages?.map((item, key) => {
                        return (
                            <Message
                                key={key}
                                author={item?.author}
                                text={item?.text}
                                name={login}
                                hours={item?.hours}
                                minutes={item?.minutes}
                            />
                        );
                    })}
                    <Grid ref={messagesEndRef}/>
                </Grid>
                <Grid
                    container
                    sx={{
                        display: "flex",
                        backgroundColor: "background.paper",
                        borderRadius: "5px",
                    }}
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    width={"100%"}
                    maxWidth={"1000px"}
                    height={"100px"}
                >
                    <TextField
                        focused
                        sx={{width: "70%"}}
                        color="secondary"
                        id="textForMessage"
                        label="Type your message"
                        variant="outlined"
                        autoComplete="false"
                        value={textMessage}
                        onChange={(e) => setTextMessage(e.target.value)}
                        onKeyDown={onKeyDown}
                    ></TextField>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        onClick={() => {
                            sendMessage();
                        }}
                    >
                        Send
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;
