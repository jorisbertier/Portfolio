import React from 'react'
import styled from 'styled-components'
import Profil from '../assets/Remove-bg.ai_1710531677010.png'


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


export const About = () => {

    let date = new Date();

    let parisOffset = 1;
    let parisHours = (date.getUTCHours() + parisOffset) % 24;
    let parisMin = (date.getUTCMinutes());

    console.log(typeof(parisHours));
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
                <TextAbout>Passionate developer, i build things for people.</TextAbout>
            </SectionContact>

            <SectionContact $40 $flex>
                <SectionContent $70>
                    <Subtitle>Skills</Subtitle>
                </SectionContent>
                <SectionContent $30 $separateContent>
                    <Subtitle>{parisHours}:{parisMin}<br/>{parisHours <= 12 ? <span>AM</span> : <span>PM</span>}</Subtitle>
                    <TextAbout>Current local time Paris</TextAbout>
                </SectionContent>
            </SectionContact>

            <SectionContact $30></SectionContact>
        </WrapperContact>

        <WrapperContact $20>
            <SectionContact $20 $grey>
            <Subtitle>Aka</Subtitle>
            </SectionContact>
            <SectionContact $50>
                
                    
                        <Subtitle>
                        Futur <br/> Stack</Subtitle>

                    
            </SectionContact>
            <SectionContact $30></SectionContact>
        </WrapperContact>
    </WrapperContacts>
    </ParentWrapperContact>
  )
}
