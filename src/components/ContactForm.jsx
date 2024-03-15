import React from 'react'
import styled from 'styled-components'

import Linkedin from '../assets/contact/icons8-linkedin-50.png'
import Git from '../assets/contact/icons8-github-60.png'
import Email from '../assets/contact/icons8-mail-48.png'

const ContactWrapper = styled.div `
    display: flex;
    max-width: 100%;
    border-radius: 15px;
    height: 70vh;
    margin-bottom: 100px;
    margin-top: 100px;

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

const WrapperContact = styled.a `
    width:80%;
    color: white;
    display: flex;
    border-radius:15px;
    padding: 16px;
    background: #1d1e30;
    text-decoration: none;
    gap: 25px;

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


`
export const ContactForm = () => {
  return (
    <div>
        <h2 style={{color: 'white'}}>Let's work together</h2>
        <ContactWrapper>
            <SectionContact>
                <Subtitle>Let's TALk<br></br> on something great <br/>together</Subtitle>
                <WrapperContact href="#">
                    <Img src={Email} alt="logo email"/>
                    <div>joris.bertier@gmail.com</div>
                </WrapperContact>
                <WrapperContact href="#">
                    <Img src={Git} alt="logo github"/>
                    <div>jorisbtr</div>
                </WrapperContact>
                <WrapperContact href="#">
                    <Img src={Linkedin} alt="logo linkedin"/>
                    <div>joris.bertier@gmail.com</div>
                </WrapperContact>
                
            </SectionContact>
            <SectionContact>
                <Form>
                    {/* <Label for="name">Name :</Label><br/> */}
                        <Input type="text" id="name" name="name" placeholder='Name...'/>
                    {/* <Label for="email">Email</Label><br/> */}
                        <Input type="email" id="email" name="email" placeholder='Email...'/>
                    {/* <Label for="object">Email</Label><br/> */}
                        <Input type="email" id="object" name="object" placeholder='Web site, contact, '/>
                    <TextArea id="subject" name="subject" rows="12" cols="60" placeholder="Hi, i think need information for a concept for my products of my company....."/><br/>
                    <Button>Send Message</Button>
                </Form>
            </SectionContact>
        </ContactWrapper>

    </div>
  )
}
