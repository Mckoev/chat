import {Avatar, Grid, Typography} from "@mui/material";
import {USER_NAME} from "constants/constants";

type Props = {
    author: string;
    text: string;
    hours: number;
    minutes: number;
};

const Message = ({author, text, hours, minutes}: Props) => {

    const login = sessionStorage.getItem(USER_NAME)

    function getAuthorValue(author: string, authorValue: string, anotherValue = '') {
        return (author === login) ? authorValue : anotherValue
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
                        justifyContent: getAuthorValue(author, 'flex-end'),
                        backgroundColor: "background.primary",
                        borderRadius: "0 5px 5px 5px",
                        marginLeft: "10px",
                        width: "100%"
                    }}
                >
                    {(author !== login) && <Grid
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                        <Avatar/>
                        <Typography>
                            {author}
                        </Typography>
                    </Grid>}
                    <Typography
                        color="text.primary"
                        padding={"10px"}
                        fontSize="12px"
                        noWrap={false}
                        sx={{
                            wordBreak: "break-all",
                            backgroundColor: getAuthorValue(author, "lightgreen", 'white'),
                            margin: '5px',
                            borderRadius: '10px',
                            fontSize: "16px"
                        }}
                        component="div"
                    >
                        {text}
                        <Typography
                            sx={{fontSize: "12px",
                            display: getAuthorValue(author, "flex"),
                            justifyContent: getAuthorValue(author, 'flex-end')}}>
                            {hours}: {minutes}
                        </Typography>
                    </Typography>
                    {(author === login) && <Typography
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
