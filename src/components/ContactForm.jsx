import React, { useState } from 'react'
import styled from 'styled-components'

import Linkedin from '../assets/contact/icons8-linkedin-50.png'
import Git from '../assets/contact/icons8-github-60.png'
import Email from '../assets/contact/icons8-mail-48.png'


const Title = styled.h2 `
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 700;
    color: white;
`
const ContactWrapper = styled.div `
    display: flex;
    max-width: 100%;
    border-radius: 15px;
    height: 70vh;
    margin-bottom: 100px;

`

const SectionContact = styled.div `
    height: 100%;
    width: 50%;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`

const Subtitle = styled.h2 `
    color: white;
    font-size: 35px;
    line-height: 1.5em;
    margin-top: 2rem;
`

const Span = styled.span `
    color: teal;    
`

const WrapperContact = styled.a `
    width:80%;
    color: white;
    display: flex;
    align-items: center;
    border-radius:15px;
    padding: 16px;
    // background: #1d1e30;
    background-color: #1e1e1e;
    text-decoration: none;
    gap: 25px;
    transition: 0.2s;

    &:hover {
        opacity: 0.7;
        box-shadow: 8px 6px 0 2px #1d1e30;
        transform : translateY(-10px);
    }
`

const TextContact = styled.div `
    font-weight: 500;
    font-size: 18px;
`

const Img = styled.img `
    height: 2.6rem;
    width: 2.6rem;
`

const Form = styled.form `
    text-align: start;
    width: 80%;
    border-radius: 15px;
    padding: 15px;
`
const Label = styled.label `
        color: white;
`
const Input = styled.input `
    background-color: #1e1e1e;
    font-weight: 600;
    color: white;
    width: 80%;
    border: none;
    border-radius: 15px;
    font-size: 1rem;
    padding: 15px 25px;
    opacity: 0.75;
    margin-top: 2rem;

`
const TextArea = styled.textarea `
    background-color: #1e1e1e;
    color: white;
    width: 85%;
    border: none;
    border-radius: 15px;
    font-weight: 600;
    font-size: 1rem;
    padding-left:20px;
    margin-top: 2rem;
`

const Button = styled.button `
margin-top: 2rem;
    width: 87%;
    padding: 13px;
    border-radius: 20px;
    border: 0;
    outline: 0;
    background: teal;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    box-shadow: 8px 6px 0 2px #1d1e30;
    transition: 0.2s;

    &:hover {
        opacity: 0.7;
    }
`

const Success = styled.div `

    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    background-color: white;
    font-weight: 600;
    font-size: 1rem;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
`

const Svg = styled.svg `
    width: 2.6rem;
    height: 2.6rem;
`
export const ContactForm = () => {

    const [messageSuccess, setMessageSuccess] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "979b0b7e-3e07-40e5-8175-642d2b9d1811");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());
    
        if (res.success) {
            setMessageSuccess(true)
            console.log("Success", res);
        }
    };


    return (
        <div>
            <Title>{'< CONTACT />'}</Title>
                <ContactWrapper>
                    <SectionContact>
                        <Subtitle>Let's Talk<br></br> on something <Span>great</Span> <br/>together ☕</Subtitle>
                        <WrapperContact href="mailto:joris.bertier@gmail.com">
                            <Img src={Email} alt="logo email"/>
                            <TextContact>joris.bertier@gmail.com</TextContact>
                        </WrapperContact>
                        <WrapperContact href="https://github.com/jorisbertier" target="_blank">
                            <Img src={Git} alt="logo github"/>
                            <TextContact>Joris Bertier</TextContact>
                        </WrapperContact>
                        <WrapperContact href="https://www.linkedin.com/in/joris-bertier-505369260/" target="_blank">
                            <Img src={Linkedin} alt="logo linkedin"/>
                            <TextContact>Joris Bertier</TextContact>
                        </WrapperContact>
                        
                    </SectionContact>
                    <SectionContact>
                        <Form onSubmit={onSubmit}>
                            {/* <Label for="name">Name :</Label><br/> */}
                                <Input type="text" id="name" name="name" placeholder='Name...'/>
                            {/* <Label for="email">Email</Label><br/> */}
                                <Input type="email" id="email" name="email" placeholder='Email...'/>
                            {/* <Label for="object">Email</Label><br/> */}
                                <Input type="text" id="object" name="object" placeholder='Web site, contact, '/>
                            <TextArea id="subject" name="subject" rows="10" cols="60" placeholder="Hi, i think need information for a concept for my products of my company....."/><br/>
                            <Button type="submit" onClick={() => setMessageSuccess(false)}>Send Message</Button><br/>
                            { messageSuccess ? (
                            <Success>Your message has been sent successfully
                            <Svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                <g fill="#008080" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-2.17938 -0.59,-4.21686 -1.60547,-5.97852l-11.24805,11.24609c-0.187,0.187 -0.44103,0.29297 -0.70703,0.29297c-0.265,0 -0.52003,-0.10497 -0.70703,-0.29297l-4.45313,-4.45312c-0.391,-0.391 -0.391,-1.02306 0,-1.41406c0.391,-0.391 1.02306,-0.391 1.41406,0l3.74609,3.74609l10.80078,-10.80078c-2.201,-2.655 -5.52223,-4.3457 -9.24023,-4.3457zM24.24023,7.3457c0.43165,0.52058 0.81351,1.08435 1.1543,1.67383l2.3125,-2.3125c0.391,-0.392 0.391,-1.02306 0,-1.41406c-0.391,-0.391 -1.02306,-0.391 -1.41406,0z"></path></g></g>
                            </Svg>
                            </Success>
                            ) : null}
                        </Form>
                    </SectionContact>
                </ContactWrapper>

        </div>
    )
}
