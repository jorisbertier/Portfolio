import React from 'react'
import styled from 'styled-components'

const ContactWrapper = styled.div `
    display: flex;
    max-width: 100%;
    height: 70vh;


`

const SectionContact = styled.div `
height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => 
    props.$test &&
    `background: red;`}
`

const Form = styled.form `
text-align: start;
        width: 80%;
        border-radius: 15px;
        box-shadow: 8px 6px 0 2px #1d1e30;
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
`
export const ContactForm = () => {
  return (
    <div>
        <h2 style={{color: 'white'}}>Let's work together</h2>
        <ContactWrapper>
            <SectionContact>
                <Form>
                    {/* <Label for="name">Name :</Label><br/> */}
                        <Input type="text" id="name" name="name" placeholder='Name...'/><br/><br/>
                    {/* <Label for="email">Email</Label><br/> */}
                        <Input type="email" id="email" name="email" placeholder='Email...'/><br/><br/>
                    {/* <Label for="object">Email</Label><br/> */}
                        <Input type="email" id="object" name="object" placeholder='Web site, contact, '/><br/><br/>
                    <TextArea id="w3review" name="w3review" rows="10" cols="60" placeholder="Write here your message..."/>
                </Form>
            </SectionContact>
            <SectionContact $test>tt</SectionContact>
        </ContactWrapper>

    </div>
  )
}
