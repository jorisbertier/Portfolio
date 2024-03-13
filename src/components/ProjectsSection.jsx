import React from 'react'
import styled, {css} from 'styled-components'
import { Project } from './Project'
import Futur from '../assets/future.png'
import Entract from '../assets/entracte1.png'

import Symfony from '../assets/logoStack/symfony.png'
import Bootstrap from '../assets/logoStack/bootstrap-logo-shadow.png'
import Angular from '../assets/logoStack/angular_whiteTransparent.png'
import Scss from '../assets/logoStack/seal-color-reversed.png'
import Js from '../assets/logoStack/js.png'
import Php from '../assets/logoStack/php.png'


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



export const ProjectsSection = () => {

    
  return (
    <WrapperProjects>
        <Subtitle>Projects</Subtitle>
        <WrapperProject>

        <Project
        title="NFT Marketplace"
        alt="logo symfony"
        description="Projet futur"
        src={Futur}
        stack1={Symfony}
        stack2={Bootstrap}
        stack3={Angular}
        />

        <Project
        title="Entracte"
        alt="Site de bière"
        description="Site Vitrine Entracte"
        src={Entract}
        stack2={Scss}
        stack3={Js}
        />

        <Project
        title="NFT Marketplace"
        alt="logo symfony"
        description="Projet futur"
        src={Futur}
        stack2={Php}
        />

            {/* <div>
                <ProjectsImageWrapper>
                    <ProjectsImage src={Entract} alt="Entract project"/>
                    <ImageText>
                    Epic Workshop est une application bureau libre travaillant avec le jeu Rocket League. L’application a pour objectif de faciliter l’accès aux joueurs à des maps créé par la communauté, utilisant un système de “Swap” rapide et très simplifié.
                    </ImageText>
                </ProjectsImageWrapper>
                <div>
                    <p>Technologies</p>
                </div>
            </div>

            <div>
                <ProjectsImageWrapper>
                    <ProjectsImage src={Futur} alt="Futur project"/>
                    <ImageText>Projet Futur</ImageText>
                </ProjectsImageWrapper>
                <div>
                    <p>Technologies</p>
                </div>
            </div> */}

        </WrapperProject>
    </WrapperProjects>
  )
}
