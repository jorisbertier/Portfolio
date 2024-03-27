import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Logos} from '../../datas/LogoDatas'
import { LogoStack } from '../LogoStack';

const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const MessageList = styled.div`
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    margin-left: 20px;
`;

const Message = styled.div`
    background-color: ${(props) => (props.sender === 'interlocutor' ? '#e0e0e0' : 'teal')};
    margin: 25px 10px;
    padding: 10px;
    border-radius: 5px;
    width: 60%;
    height: auto;
    word-wrap: break-word;
    left: ${(props) => (props.sender === 'interlocutor' ? '0px' : '70px')};
    position: relative;
`;

const MessageInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 0px;
`;

const MessageInput = styled.input`
    flex: 1;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 15px;
    outline: none;
    background: #CBCBC8;
    color: black;
    font-weight: 500;

`;

const SendButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    padding: 10px;
    border: none;
    border-radius: 50%;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

export const ChatBox = () => {
    const [messages, setMessages] = useState([
        { sender: 'interlocutor', content: `Hi there! I'm Claptrap your Chatbot personal 🤖` },
    ]);
    const [inputValue, setInputValue] = useState('');

    // const [userName, setUserName] = useState('');

    // const handleNameChange = (event) => {
    //     setUserName(event.target.value);
    //   };

    const [questions, setQuestions] = useState([
        "What's your name?",
        `How can I assist you further?`,
        "How can I assist you further?",
        "How can I assist you further?",
    ]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//
    useEffect(() => {
        if (currentQuestionIndex === 1) {
            setQuestions([
            `Hi, nice to meet you ! How help you?`,
            ` Hi ${inputValue}, nice too meet you`,
            "tell me something I don't know",
            "Thank you for chatting with us today! If you have any more questions in the future, don't hesitate to reach out. Have a great day",
        ]);
        }
    }, [inputValue, currentQuestionIndex]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
        // Add the user's message to the list of messages
        const newMessages = [...messages, { sender: 'user', content: inputValue }];

        // If there are more questions to ask, add the next question to the list of messages
        if (currentQuestionIndex < questions.length) {
            newMessages.push({ sender: 'interlocutor', content: questions[currentQuestionIndex] });
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }

        setMessages(newMessages);
        setInputValue('');
        }
    };

    return (
        <ChatContainer>
            <MessageList>
            {messages.map((message, index) => (
                <Message key={index} sender={message.sender}>
                {message.content}
                </Message>
            ))}
            </MessageList>
            <MessageInputContainer>
                <MessageInput
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                />
                <SendButton onClick={handleSendMessage}>
                    <LogoStack logo={Logos.Send} size={'20'}/>
                </SendButton>
            </MessageInputContainer>
        </ChatContainer>
        );
    };