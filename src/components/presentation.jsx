import styled from "styled-components"
import Profil from '../assets/Remove-bg.ai_1710531677010.png'
import videoSrc from '../assets/video.mp4';


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
    color: grey;
    text-transform: uppercase;
    font-size: 20px;
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
const Blob = styled.svg `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Img = styled.img `
object-fit: cover;
height: 600px;
width: 400px;
// border-radius: 50%;
background: linear-gradient(45deg, #9edbff, #b3a0ff 50%, #f29dff);;
`
function Presentation () {
    return( 
    <WrapperFirstSection>
        <Img src={Profil}/>
        <Subtitle>Full Stack Developer</Subtitle>
        <Title>Hey i’m Joris Bertier<br></br>
I develop {'{things}'} for the web.</Title>
        <Blob viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="teal" d="M53.3,-19.8C59.8,2.8,49.5,28.3,29,44.3C8.4,60.2,-22.3,66.6,-40.9,53.6C-59.6,40.7,-66.3,8.5,-57.4,-17.3C-48.6,-43.1,-24.3,-62.4,-0.5,-62.3C23.4,-62.1,46.8,-42.5,53.3,-19.8Z" transform="translate(100 100)">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
        </path>
        </Blob>
        <Span>
            <StyledIcon className="bi bi-github"/>
            <StyledIcon className="bi bi-linkedin"/>
            <StyledIcon className="bi bi-twitter"/>
        </Span>
        {/* <video controls autoplay loop>
  <source src={videoSrc} type="video/mp4"></source>
</video> */}
    </WrapperFirstSection>)
}

export default Presentation