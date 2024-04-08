import React, { useState } from 'react'
import styled from 'styled-components'

const ResponseArea = styled.div `
    background: linear-gradient(45deg, #9edbff, #b3a0ff 50%, #f29dff);
    border-radius: 20px 20px 0 0;
    padding: 10px 20px;
    // position: relative;
`
const ResponseContainer = styled.div `
    height: 5rem;
    background: blue;

`
export const Encrypt = () => {
    
    const [inputValue, setInputValue] = useState('')
    // const [submitedValue, setSubmitedValue] = useState('')
    const [encryptValue, setEncryptValue] = useState('')

    const [isOpen, setIsOpen] = useState(false)

    const encryptData = (data) => {
        let encryptedData = '';
    
        for (let i = 0; i < data.length; i++) {
            const char = data[i];
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
            const char = encryptedData[i];
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
        // ser
        // setEncryptValue(encryptData(inputValue));
        // console.log(textEncrypted)
    }
    const handleSubmitDecrypt = (event) => {
        event.preventDefault();
        const textEncrypted = decryptData(inputValue)
        setEncryptValue(textEncrypted)
    }

    return (
    <div>
        {isOpen ? 
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <button type="submit">Encrypter</button>
            <button onClick={() => setIsOpen(false)}>change</button>
        </form>
        :
        <form onSubmit={handleSubmitDecrypt}>
            <input type="text" onChange={handleChange}/>
            <button type="submit">Decrypter</button>
            <button onClick={() => setIsOpen(true)}>change</button>
        </form>
        }
        <div>
            
            <ResponseArea></ResponseArea>
            <ResponseContainer>{encryptValue}</ResponseContainer>
        </div>
    </div>
  )
}
