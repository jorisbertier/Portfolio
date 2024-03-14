import styled from "styled-components"

const WrapperFirstSection = styled.div `
    margin-top: 20vh;
    height: 80vh;
`

const Title = styled.h1 `
    font-weight: 800;
    font-size: 50px;
    color:white;
`
const Subtitle = styled.h2 `
    color:white;
`
const Span = styled.span `
    display:flex;
    justify-content: center;
`

const StyledIcon  = styled.i `
    font-size: 30px;
    // background-color: red;
    border-radius: 15px;
    padding: 10px;
    width: 25px;
    display:flex;
    justify-content:center;
    align-items: center;
    margin-left:10px;
    margin-right:10px;
    cursor: pointer;
    color: white;

    &:hover {
        transition: .25s;
        background: linear-gradient(45deg, #9edbff, #b3a0ff 50%, #f29dff);
    }
`
function Presentation () {
    return( 
    <WrapperFirstSection>
        <Subtitle>Full Stack Developer</Subtitle>
        <Title>Hey i’m Joris Bertier<br></br>
I develope things for the web.</Title>
        <Span>
            <StyledIcon className="bi bi-github"/>
            <StyledIcon className="bi bi-linkedin"/>
            <StyledIcon className="bi bi-twitter"/>
        </Span>
    </WrapperFirstSection>)
}

export default Presentation