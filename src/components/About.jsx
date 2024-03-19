import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Profil from '../assets/Remove-bg.ai_1710531677010.png'
import { LogoStack } from './LogoStack'

import {Logos} from '../datas/LogoDatas'


const ParentWrapperContact = styled.div `
    display: flex;
    justify-content: center;

`
const WrapperContacts = styled.div `
    display: flex;
    max-width: 100vw;
    height: 100vh;
    width: 90%;
    margin: 0;
    gap: 10px;
`
const WrapperContact = styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;

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
        width: 90%;
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
    `}
`

const SectionContent = styled.div `
border-radius: 10px;
height: 100%;
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

`

const Subtitle = styled.h2 `
    text-transform: uppercase;
    font-weight: 700;
    font-size: 35px;
    color: white;
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
`

const SocialWrapper = styled.div `
display: flex;
    margin-right: 20px;
    background-color: #CBCBC8;
    border-radius: 10px;
    padding: 10px;
    margin-top: -80px;
    height: 3rem;
    width: 3rem;

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
            <SectionContact $80><Img src={Profil}/></SectionContact>
            <SectionContact $20 $grey>
                <Subtitle>Aka</Subtitle>
                <TextAbout>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </TextAbout>
            </SectionContact>
        </WrapperContact>

        <WrapperContact $50>
            <SectionContact $30>
                <Subtitle>I'M JORIS</Subtitle>
                <TextAbout>I'm passionate developer, know for technical expertise. I'm building websites, designing user interfaces, or optimizing user experiences<br/>i can do anything any time and not wait for the right moment</TextAbout>
            </SectionContact>

            <SectionContact $40 $flex>
                <SectionContent $70>
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
                <SectionContent $30 $separateContent>
                    <Subtitle>{parisTime.hours}:{parisTime.minutes}<br/>{parisTime.hours <= 12 ? <span>AM</span> : <span>PM</span>}</Subtitle>
                    <TextAbout>Current local time Paris</TextAbout>
                </SectionContent>
            </SectionContact>

            <SectionContact $30></SectionContact>
        </WrapperContact>

        <WrapperContact $20>
            <SectionContact $20 $grey>
                <Subtitle>Social Networks - </Subtitle><br/>
                    <SocialWrapper>
                        <LogoStack logo={Logos.GitDark} size={'45'}/>
                    </SocialWrapper>
                    <SocialWrapper>
                        <LogoStack logo={Logos.LinkedinDark} size={'45'}/>
                    </SocialWrapper>
            </SectionContact>
            <SectionContact $50>
                
                    
                        <Subtitle>
                        Futur <br/> Projects -</Subtitle>
                        <TextAbout>Dating website <br/> App Desktop manage stock</TextAbout>
                    
            </SectionContact>
            <SectionContact $30></SectionContact>
        </WrapperContact>
    </WrapperContacts>
    </ParentWrapperContact>
  )
}
