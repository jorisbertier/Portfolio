import React, { useState } from 'react'
import styled from 'styled-components'
import {Logos} from '../../datas/LogoDatas'

const EncryptContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Form = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 70%;
    // margin-left: 15%;
`
const WrapperResponse = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // text-align: center;
`


const ResponseArea = styled.div `
    background: linear-gradient(90deg, rgba(0,128,128,1) 0%, rgba(60,171,171,1) 100%);
    border-radius: 20px 20px 0 0;
    padding: 10px 20px;
    // position: relative;
    width: 70%;
    margin-left: 15%;
    margin-top: 20px;
`
const ResponseContainer = styled.div `
    height: 5rem;
    background-color: #e0e0e0;
    width: 70%;
    margin-left: 15%;
    padding: 10px 20px; 
    border-radius: 0 0 20px 20px;
`

const InputEncrypt = styled.input `
    padding: 15px 70px 15px 25px;
    width: 100%;
    border: none;
    padding: 1rem;
    border-radius: 1rem;
    background: #e8e8e8;
    transition: 0.3s;
        // width: 100px;
        &:focus {
            outline-color: #e8e8e8;
            background: #e8e8e8;
            box-shadow: inset 20px 20px 60px #c5c5c5,
                inset -20px -20px 60px #ffffff;
            transition: 0.3s;
        }
`

const ButtonSubmit = styled.button `
    padding: 10px;
    background: teal;
    border: none;
    border-radius: 50%;
    margin-left: -60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

`
const LogoSend = styled.img `
    width: 20px;
    height: 20px;
    transition: 0.25s;
    ${(props) => 
        props.$isLeft &&
        `margin-left: 23px;`
    }
    ${(props) => 
        props.$isRight &&
        `margin-right: 23px;`
    }
`

const SwitchButton = styled.button`
    position: relative;
    // padding: 5px 10px;
    height: 30px;
    // background-color: #eee;
    background: teal;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 20px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center
`;

const Indicator = styled.div`
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: #ccc;
    transition: transform 0.3s ease;
    transform: ${({ encrypt }) => encrypt ? 'translateX(0)' : 'translateX(100%)'};
`;


export const Encrypt = () => {
    
    const [inputValue, setInputValue] = useState('')
    const [encryptValue, setEncryptValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const encryptData = (data) => {
        let encryptedData = '';
    
        for (let i = 0; i < data.length; i++) {
            const charCode = data.charCodeAt(i);
            const shift = i + 1;
    
            const encryptedCharCode = charCode + shift;
    
            if (encryptedCharCode > 126) {
                encryptedData += String.fromCharCode(32 + (encryptedCharCode - 126));
            } else {
                encryptedData += String.fromCharCode(encryptedCharCode);
            }
        }
    
        return encryptedData;
    };
    const decryptData = (encryptedData) => {
        let decryptedData = '';
    
        for (let i = 0; i < encryptedData.length; i++) {

            const charCode = encryptedData.charCodeAt(i);
            const shift = i + 1;

            let decryptedCharCode = charCode - shift;
            while (decryptedCharCode < 32) {
                decryptedCharCode += 95;
            }

            decryptedData += String.fromCharCode(decryptedCharCode);
        }
    
        return decryptedData;
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const textEncrypted = encryptData(inputValue)
        setEncryptValue(textEncrypted)
    }

    const handleSubmitDecrypt = (event) => {
        event.preventDefault();
        const textEncrypted = decryptData(inputValue)
        setEncryptValue(textEncrypted)
    }

    return (
        <EncryptContainer>
            <Form onSubmit={isOpen ? handleSubmitDecrypt : handleSubmit}>
                <InputEncrypt type="text" onChange={handleChange} placeholder="Write your word to encrypt " />
                <ButtonSubmit type="submit"><LogoSend src={Logos.Send} alt="logo send" /></ButtonSubmit>
                <SwitchButton onClick={() => setIsOpen(!isOpen)}>
                    <Indicator encrypt={isOpen} />
                    {isOpen ? <LogoSend src={Logos.LockClose} alt="logo send" $isLeft/> : <LogoSend src={Logos.LockOpen} alt="logo send" $isRight/>}
                </SwitchButton>
                {/* <img src={Logos.LockClose} /> */}
            </Form>
            <WrapperResponse>
                <ResponseArea>Response Area {isOpen ? "Encrypt": "Decrypt"}</ResponseArea>
                <ResponseContainer>{encryptValue}</ResponseContainer>
            </WrapperResponse>
        </EncryptContainer>
    )
}
