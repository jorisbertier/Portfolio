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
    const [submitedValue, setSubmitedValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitedValue(inputValue);
        console.log(submitedValue)
    }
    
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <button type="submit">eNCRYPTER</button>
        </form>
        <div>
            <ResponseArea></ResponseArea>
            <ResponseContainer>{submitedValue}</ResponseContainer>
        </div>
    </div>
  )
}
