import React, { useState } from 'react'
import styled from 'styled-components'
import {Logos} from '../../datas/LogoDatas'

const EncryptContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const WrapperResponse = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // text-align: center;
`


const ResponseArea = styled.div `
    background: linear-gradient(45deg, #9edbff, #b3a0ff 50%, #f29dff);
    border-radius: 20px 20px 0 0;
    padding: 10px 20px;
    // position: relative;
    width: 70%;
    margin-left: 15%;
    margin-top: 20px;
`
const ResponseContainer = styled.div `
    height: 5rem;
    background: blue;
    width: 70%;
    margin-left: 15%;
    padding: 10px 20px; 
    border-radius: 0 0 20px 20px;
`

const InputEncrypt = styled.input `
width: 70%;
    border: none;
    padding: 1rem;
    border-radius: 1rem;
    background: #e8e8e8;
    // box-shadow: 20px 20px 60px #c5c5c5,
        // -20px -20px 60px #ffffff;
    transition: 0.3s;
        width: 100px;
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
            <form onSubmit={isOpen ? handleSubmitDecrypt : handleSubmit}>
                <InputEncrypt type="text" onChange={handleChange}/>
                <ButtonSubmit type="submit"><LogoSend src={Logos.Send} alt="logo send" /></ButtonSubmit>
                <SwitchButton onClick={() => setIsOpen(!isOpen)}>
                    <Indicator encrypt={isOpen} />
                    {isOpen ? <LogoSend src={Logos.LockClose} alt="logo send" $isLeft/> : <LogoSend src={Logos.LockOpen} alt="logo send" $isRight/>}
                </SwitchButton>
                {/* <img src={Logos.LockClose} /> */}
            </form>
            <WrapperResponse>
                <ResponseArea></ResponseArea>
                <ResponseContainer>{encryptValue}</ResponseContainer>
            </WrapperResponse>
        </EncryptContainer>
    )
}
