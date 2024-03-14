import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import { Project } from './Project'
import Futur from '../assets/future.png'
import Entract from '../assets/entracte1.png'

import Symfony from '../assets/logoStack/symfony.png'
import Bootstrap from '../assets/logoStack/bootstrap-logo-shadow.png'
import Angular from '../assets/logoStack/angular_whiteTransparent.png'
import Scss from '../assets/logoStack/seal-color-reversed.png'
import Js from '../assets/logoStack/js.png'
import Jquery from '../assets/logoStack/jquery.gif'
import Google from '../assets/logoStack/google.png'
import Explore from '../assets/calendarAPI1.png'


const defaultFontFamilyTitle = css`
    font-family: Inter, sans-serif; /* Vous pouvez remplacer 'Arial' par votre police de caractères par défaut */
`;

const Subtitle = styled.h2 `
    ${defaultFontFamilyTitle}
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 700;
`

const WrapperProjects = styled.div `
color: white;
height: 100vh;
`

const WrapperProject = styled.div `
    // align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    transition: .25s;
    width: 100%;
`

const ButtonLoad = styled.button `

    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    border: 2px solid #007bff;
    color: #007bff;
    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 8px 6px 0 2px #1d1e30;

    &:hover {
        background-color: #007bff; /* Couleur de fond au survol */
        color: #fff; /* Couleur du texte au survol */
    }
`



export const ProjectsSection = () => {

    const [addProject, setAddProject] = useState(false)

  
  return (
    <WrapperProjects>
        <Subtitle>{`< Projects />`}</Subtitle>
        <WrapperProject>

        <Project
        title="NFT Marketplace"
        alt="logo symfony"
        description="Future est une plateforme combinant cryptomonnaies et NFTs qui offre aux utilisateurs la possibilité de découvrir, acheter, créer et suivre la valeur des NFTs."
        src={Futur}
        stack1={Symfony}
        stack2={Bootstrap}
        stack3={Angular}
        />

        <Project
        title="Entracte"
        alt="Site de bière Entracte"
        description="Entracte est un site vitrine d'une brasserie et bar en ligne. Le site à pour objectif de présenter la brasserie ainsi que les bières artisanales qui sont proposés par le commerçant."
        src={Entract}
        stack2={Scss}
        stack3={Js}
        />

        <Project
        title="Explore Calendar"
        alt="Calendrier prise de rendez-vous"
        description="Explore est une application qui permet la mutualisation de prise de rende-vous en fonction des créneaux de disponibilités du collaborateur. L'application est connecté à l'API Google Calendar afin de synchroniser les données. (Projet confidientiel)"
        src={Explore}
        stack1={Symfony}
        stack2={Jquery}
        stack3={Google}
        />

        </WrapperProject>
        <br/><br/>
        
        {addProject ?
        (
            <>
            <Project
            title="Explore Calendar"
            alt="Calendrier prise de rendez-vous"
            description="Explore est une application qui permet la mutualisation de prise de rende-vous en fonction des créneaux de disponibilités du collaborateur. L'application est connecté à l'API Google Calendar afin de synchroniser les données. (Projet confidientiel)"
            src={Explore}
            stack1={Symfony}
            stack2={Jquery}
            stack3={Google}
            />
        
        <div><ButtonLoad onClick={() => setAddProject(false)}>Load close</ButtonLoad></div>
        </>
        ): (
        <div><ButtonLoad onClick={() => setAddProject(true)}>Load more</ButtonLoad></div>
        )}
    </WrapperProjects>
  )
}
