import {CHAT, USER_NAME} from "../constants/constants";
import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

interface IMessage {
    author: string
    hours: number
    minutes: number
    text: string
}

const initialMessage = [{author: "TEST", hours: 0, minutes: 0, text: "test message"}]

const useChatLogic = () => {
    const navigate = useNavigate();
    const login = sessionStorage.getItem(USER_NAME)

    const [textMessage, setTextMessage] = useState("");

    // this is for the initial value of messages
    let initialValue: IMessage[] = initialMessage
    const localStorageValue = localStorage.getItem(CHAT)
    if (typeof localStorageValue === 'string') {                 // For typescript
        initialValue = JSON.parse(localStorageValue)
    }

    const [messages, setMessages] = useState<IMessage[]>(initialValue);

    const sendMessage = () => {
        if (textMessage) {
            const newMessage = [{
                author: login,
                hours: new Date().getHours(),
                minutes: new Date().getMinutes(),
                text: textMessage,
            }]
            const oldMessages = localStorage.getItem(CHAT)
            let newAddMessage
            if (oldMessages) {
                newAddMessage = JSON.stringify([...JSON.parse(oldMessages), ...newMessage])
                localStorage.setItem(CHAT, newAddMessage)
            } else {
                newAddMessage = JSON.stringify([...newMessage])
                localStorage.setItem(CHAT, newAddMessage)
            }
            setMessages(JSON.parse(newAddMessage))
        }
        setTextMessage("");
    };

    function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            sendMessage()
        }
    }

    // this is for scroll down when new messages are received
    const messagesEndRef: any = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth"});
    };
    useEffect(scrollToBottom, [messages]);

    onstorage = (event) => {
        const locValue = localStorage.getItem(CHAT)
        if (typeof locValue === 'string') {                               // For Typescript
            setMessages(JSON.parse(locValue))
        }
    };

    return {
        messages,
        setMessages,
        textMessage,
        setTextMessage,
        login,
        sendMessage,
        messagesEndRef,
        onKeyDown,
    }
};

export default useChatLogic;