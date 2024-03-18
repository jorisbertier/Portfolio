import React, { useEffect, useState } from 'react'
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
const SvgWrapper = styled.div `
    height: 80px;
    width: 80px;
    border-radius: 20px;
    background: blue;
`

const SvgBackground = styled.svg `
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
                    <SvgBackground xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 24.929688 2.0019531 C 24.819813 2.0024531 24.709016 2.0206406 24.603516 2.0566406 L 3.671875 9.3417969 C 3.227875 9.4957969 2.9498125 9.93925 3.0078125 10.40625 L 6.3164062 37.529297 C 6.3554062 37.850297 6.5450781 38.133109 6.8300781 38.287109 L 24.478516 47.878906 C 24.626516 47.959906 24.791078 48 24.955078 48 C 25.120078 48 25.286547 47.958953 25.435547 47.876953 L 43.173828 38.154297 C 43.455828 37.999297 43.647547 37.717438 43.685547 37.398438 L 46.992188 10.277344 C 47.050187 9.8083437 46.769312 9.3609844 46.320312 9.2089844 L 25.253906 2.0527344 C 25.148906 2.0177344 25.039562 2.0014531 24.929688 2.0019531 z M 25 7 L 38 35 L 33.5625 35 L 30.78125 29.007812 L 19.21875 29.007812 L 16.4375 35 L 12 35 L 25 7 z M 25 16.5 L 21.080078 25 L 28.919922 25 L 25 16.5 z"></path>
                    </SvgBackground>
                    <SvgBackground xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 24.929688 2.0019531 C 24.819813 2.0024531 24.709016 2.0206406 24.603516 2.0566406 L 3.671875 9.3417969 C 3.227875 9.4957969 2.9498125 9.93925 3.0078125 10.40625 L 6.3164062 37.529297 C 6.3554062 37.850297 6.5450781 38.133109 6.8300781 38.287109 L 24.478516 47.878906 C 24.626516 47.959906 24.791078 48 24.955078 48 C 25.120078 48 25.286547 47.958953 25.435547 47.876953 L 43.173828 38.154297 C 43.455828 37.999297 43.647547 37.717438 43.685547 37.398438 L 46.992188 10.277344 C 47.050187 9.8083437 46.769312 9.3609844 46.320312 9.2089844 L 25.253906 2.0527344 C 25.148906 2.0177344 25.039562 2.0014531 24.929688 2.0019531 z M 25 7 L 38 35 L 33.5625 35 L 30.78125 29.007812 L 19.21875 29.007812 L 16.4375 35 L 12 35 L 25 7 z M 25 16.5 L 21.080078 25 L 28.919922 25 L 25 16.5 z"></path>
                    </SvgBackground>
                    <SvgBackground xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 24.929688 2.0019531 C 24.819813 2.0024531 24.709016 2.0206406 24.603516 2.0566406 L 3.671875 9.3417969 C 3.227875 9.4957969 2.9498125 9.93925 3.0078125 10.40625 L 6.3164062 37.529297 C 6.3554062 37.850297 6.5450781 38.133109 6.8300781 38.287109 L 24.478516 47.878906 C 24.626516 47.959906 24.791078 48 24.955078 48 C 25.120078 48 25.286547 47.958953 25.435547 47.876953 L 43.173828 38.154297 C 43.455828 37.999297 43.647547 37.717438 43.685547 37.398438 L 46.992188 10.277344 C 47.050187 9.8083437 46.769312 9.3609844 46.320312 9.2089844 L 25.253906 2.0527344 C 25.148906 2.0177344 25.039562 2.0014531 24.929688 2.0019531 z M 25 7 L 38 35 L 33.5625 35 L 30.78125 29.007812 L 19.21875 29.007812 L 16.4375 35 L 12 35 L 25 7 z M 25 16.5 L 21.080078 25 L 28.919922 25 L 25 16.5 z"></path>
                    </SvgBackground>
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
