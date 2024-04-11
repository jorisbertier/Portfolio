import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Profil from '../assets/Remove-bg.ai_1710531677010.png'
import { LogoStack } from './LogoStack'

import {Logos} from '../datas/LogoDatas'
import { ChatBox } from './chatbox/ChatBox'
// import { Game } from './game/Game'
import { Encrypt } from './Encrypt/Encrypt'


const ParentWrapperContact = styled.div `
    display: flex;
    justify-content: center;

`
const WrapperContacts = styled.div `
    display: flex;
    max-width: 100vw;
    height: 100vh;
    width: 90%;
    // margin: 10px;
    gap: 15px;
`
const WrapperContact = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;

${(props) => 
    props.$50 && `
        height:100%;
        width: 50%;
    `}
    ${(props) => 
    props.$30 && `
        height:100%;
        width: 30%;
    `}
    ${(props) => 
    props.$20 && `
        height:100%;
        width: 30%;
    `}
    
`
const SectionContact = styled.div `
    background: #1e1e1e;
    border-radius: 10px;
    text-align: start;

    ${(props) => 
    props.$70 && `
        height:70%;
        width: 100%;
    `}
    ${(props) => 
    props.$80 && `
    display: flex;
    justify-content: center;
    align-items: center;
    height:80%;
    width: 100%;

    `}
    ${(props) => 
    props.$30 && `
        height:30%;
        width: 100%;
    `}
    ${(props) => 
    props.$20 && `
        height:20%;
        width: 100%;
    `}
    ${(props) => 
    props.$40 && `
        height:40%;
        width: 100%;
    `}
    ${(props) => 
    props.$50 && `
        height:50%;
        width: 100%;
    `}
    ${(props) => 
    props.$black && `
        background: #000;
    `}
    ${(props) => 
    props.$grey && `
        background: #0D0D0D;
    `}
    ${(props) => 
        props.$flex && `
        display: flex;
        gap: 10px;
        background: none;
    `}
    transition: 0.2s;

    ${(props) => 
        props.$hover && `
        &:hover {
            opacity: 0.7;
            box-shadow: 8px 6px 0 2px #1d1e30;
            transform : translateY(-10px);
        }
    `}
`

const SectionContent = styled.div `
    border-radius: 10px;
    height: 100%;
    padding-left: 10px;
    transition: 0.2s;

    ${(props) => 
    props.$70 && `
        width: 70%;
        background: teal;
    `}
    ${(props) => 
    props.$30 && `
        width: 30%;
        background: #0D0D0D;
    `}
    ${(props) => 
        props.$separateContent && `
            display: flex;
            justify-content: space-between;
            flex-direction: column;
    `}

    ${(props) => 
        props.$hover && `
        &:hover {
            opacity: 0.7;
            box-shadow: 8px 6px 0 2px #1d1e30;
            transform : translateY(-10px);
        }
    `}
`

const Subtitle = styled.h2 `
    text-transform: uppercase;
    font-weight: 700;
    font-size: 35px;
    color: white;
    padding-left: 10px;
`
const Img = styled.img `
    // filter: grayscale(100%);
    background: #1e1e1e;
    border: 1px solid black;
    border-radius: 10px;
    object-fit: cover;
    height: 95%;
    width: 95%;
`

const TextAbout = styled.p `
    color: white;
    font-size: 0.8rem;
    padding-left: 10px;
`

const SocialWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    background-color: #CBCBC8;
    border-radius: 10px;
    padding: 10px;
    // margin-top: -80px;
    height: 3rem;
    width: 3rem;
`

const SocialDiv = styled.div`
    display: flex;
    // margin-top: 120px;
    padding-left: 10px;
`

export const About = () => {

    const [parisTime, setParisTime] = useState(getTimeParis())

    function getTimeParis() {
        let date = new Date();
        let parisOffset = 1;
        let parisHours = (date.getUTCHours() + parisOffset) % 24;
        let parisMin = (date.getUTCMinutes());
        if(parisMin < 10) {
            parisMin = '0'+ parisMin;
        }
        return {hours: parisHours, minutes: parisMin}
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setParisTime(getTimeParis());
        }, 1000);

        return () => clearInterval(interval);
    
    }, [])

    return (

    <ParentWrapperContact>
    <WrapperContacts>

        <WrapperContact $30>
            <SectionContact $80 $hover><Img src={Profil}/></SectionContact>
            <SectionContact $20 $grey $hover>
                <Subtitle>Aka</Subtitle>
                <TextAbout>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </TextAbout>
            </SectionContact>
        </WrapperContact>

        <WrapperContact $50>
            <SectionContact $30 $hover>
                <Subtitle>I'M JORIS</Subtitle>
                <TextAbout>I'm passionate developer, know for technical expertise. I'm building websites, designing user interfaces, or optimizing user experiences<br/>i can do anything any time and not wait for the right moment</TextAbout>
            </SectionContact>

            <SectionContact $40 $flex>
                <SectionContent $70 $hover>
                    <Subtitle>Skills</Subtitle>
                    <LogoStack logo={Logos.SymfonyLight} size={'45'}/>
                    <LogoStack logo={Logos.AngularLight} size={'45'}/>
                    <LogoStack logo={Logos.ReactLight} size={'45'}/><br/>
                    <LogoStack logo={Logos.BootstrapLight} size={'45'}/>
                    <LogoStack logo={Logos.SassLight} size={'45'}/><br/>
                    <LogoStack logo={Logos.MysqlLight} size={'45'}/>
                    <LogoStack logo={Logos.GitLight} size={'45'}/>
                    <LogoStack logo={Logos.FigmaLight} size={'45'}/>
                </SectionContent>
                <SectionContent $30 $separateContent $hover>
                    <Subtitle>{parisTime.hours}:{parisTime.minutes}<br/>{parisTime.hours <= 12 ? <span>AM</span> : <span>PM</span>}</Subtitle>
                    <TextAbout>Current local time Paris</TextAbout>
                </SectionContent>
            </SectionContact>

            <SectionContact $30><Encrypt /></SectionContact>
        </WrapperContact>

        <WrapperContact $20>
            <SectionContact $30 $grey>
                <Subtitle>Social Networks - </Subtitle>
                    <SocialDiv>
                        <SocialWrapper>
                            <LogoStack logo={Logos.GitDark} size={'45'}/>
                        </SocialWrapper>
                        <SocialWrapper>
                            <LogoStack logo={Logos.LinkedinDark} size={'45'}/>
                        </SocialWrapper>
                    </SocialDiv>
            </SectionContact>

            <SectionContact $70>
                <ChatBox />
            </SectionContact>

        </WrapperContact>
    </WrapperContacts>
    </ParentWrapperContact>
    )
}
