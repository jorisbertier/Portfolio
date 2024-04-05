import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
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
const LoaderAnimation = keyframes`
    0%,
    10% {background-position: 0 0,0 0,0 0,0 0}
    33% {background-position: 0 0,calc(100%/3) 0,calc(100%/3) 0,calc(100%/3) 0}
    66% {background-position: 0 0,calc(100%/3) 0,calc(2*100%/3) 0,calc(2*100%/3) 0}
    90%,
    100% {background-position: 0 0,calc(100%/3) 0,calc(2*100%/3) 0,100% 0}
`;

const LoaderScaleAnimation = keyframes`
    0%,49.99% {transform: scale( 1)}
    50%,100%  {transform: scale(-1)}
`;

const LoaderContainer = styled.div`
    height: 15px;
    aspect-ratio: 5;
    --_g:no-repeat radial-gradient(farthest-side,#008080 94%,#0000);
    background: var(--_g),var(--_g),var(--_g),var(--_g);
    background-size: 20% 100%;
    animation: ${LoaderAnimation} 0.75s infinite alternate, ${LoaderScaleAnimation} 1.5s infinite alternate;
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
        { sender: 'interlocutor', content: `Hi there! I'm Claptrap your Chatbot personal 🤖 I need your personal information which I will then encrypt to show you the extent of the possibilities offered by the web !! Are you ready to discover the universe? Write 'yes' when you are ready` },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [questions, setQuestions] = useState([
        "First all, what's your first name? (1 word)",
    ]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        if (currentQuestionIndex === 1) {
            setQuestions([
                `Hi, nice to meet you! How can I help you?`,
                `Hi ${inputValue}, nice to meet you. What is your lastName? (1 word)`,
                `Well done, what is your email?`,
                `Well done, what is your password?`,
                `😈 thank you for your personal information, I am in the process of finding a buyer`,
                "Just kidding, I'm a caring bot 😇! Never trust anyone, no matter how friendly they are. You never know who is hiding behind the screen, ready to take advantage of your naivety for their own benefit. Don't be easy prey in this digital jungle",
            ]);
        }
    }, [inputValue, currentQuestionIndex]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            const newMessages = [...messages, { sender: 'user', content: inputValue }];
            setMessages(newMessages);
            setInputValue('');
    
            if (messages[messages.length - 1].sender === 'interlocutor') {
                setIsTyping(true);
                setTimeout(() => {
                    let newMessagesWithBotReply = [...newMessages];
                    if (currentQuestionIndex === 0) {
                        if (inputValue.trim() !== "yes") {
                            newMessagesWithBotReply.push({ sender: 'interlocutor', content: "Please enter 'yes' for play the game !!!" });
                            setMessages(newMessagesWithBotReply);
                            setIsTyping(false);
                            return;
                        }
                    }
                    if (currentQuestionIndex === 1) {
                        // Validation pour le nombre de mots dans la réponse
                        const words = inputValue.trim().split(' ');
                        if (words.length !== 1) {
                            newMessagesWithBotReply.push({ sender: 'interlocutor', content: "Please enter only one word for your first name." });
                            setMessages(newMessagesWithBotReply);
                            setIsTyping(false);
                            return;
                        }
                    }
                    if (currentQuestionIndex === 2) {
                        const words = inputValue.trim().split(' ');
                        if (words.length !== 1) {
                            newMessagesWithBotReply.push({ sender: 'interlocutor', content: "Please enter only one word for your last name." });
                            setMessages(newMessagesWithBotReply);
                            setIsTyping(false);
                            return;
                        }
                    }
                    if (currentQuestionIndex === 3) {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRegex.test(inputValue.trim())) {
                            newMessagesWithBotReply.push({ sender: 'interlocutor', content: "Please enter a email valid." });
                            setMessages(newMessagesWithBotReply);
                            setIsTyping(false);
                            return;
                        }
                    }
    
                    newMessagesWithBotReply.push({ sender: 'interlocutor', content: questions[currentQuestionIndex] });
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setMessages(newMessagesWithBotReply);
                    setIsTyping(false);
                }, 2000);
            }
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
                {isTyping && <LoaderContainer />}
            </MessageList>
            <MessageInputContainer>
                <MessageInput
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                />
                <SendButton onClick={handleSendMessage}>
                    <LogoStack logo={Logos.Send} size={'20'} />
                </SendButton>
            </MessageInputContainer>
        </ChatContainer>
    );
};