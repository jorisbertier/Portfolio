import React from 'react'
import styled from 'styled-components'
import Futur from '../assets/future.png'
import Explore from '../assets/calendarAPI1.png'
import Entracte from '../assets/entracte1.png'
import Wallpaper from '../assets/pexels-adrien-olichon-2387793.jpg'

const Wrapper = styled.div  `
// width: 100vw;
height: 100vh;
max-width: 100vw;
background: url(${Wallpaper}) center/cover;
// opacity: 0.9;
object-fit: cover;
cursor: pointer;

&::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Couleur semi-transparente */
    z-index: 1; /* Pour placer la superposition au-dessus de l'image */
  }

`

const Content = styled.div `
flex: none;
    height: 240px;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    width: 100%;
    z-index: 1;
    border-top: 1px solid rgba(0, 0, 0, 0.8);
    // border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    position: relative;

    &:hover img {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }

`

const Title = styled.h2 `
color: white;
font-size: 60px;
position: absolute;
z-index: 1;
// text-align: center;
// visibility: hidden;
margin-left: 5%;

`
const Img = styled.img `
position: absolute;
height: 80%;
width: 30%;
border-radius: 10px;
top: 10%;
left: 60%;
opacity: 0;
object-fit: fill;
`
export const Test = () => {
  return (
    <Wrapper>
        <Content>
            <Title>FUTUR <br /> NFT Marketplace</Title>
            <Img src={Futur}/>
        </Content>
        <Content>
            <Title>EXPLORE <br /> Gestion plannig</Title>
            <Img src={Explore}/>
        </Content>
        <Content>
            <Title>ENTRACTE <br /> Site vitrine Brasserie</Title>
            <Img src={Entracte}/>
        </Content>

    </Wrapper>
  )
}
