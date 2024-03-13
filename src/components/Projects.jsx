import React from 'react'
import styled from 'styled-components'
import Futur from '../assets/future.png'
import Entract from '../assets/entracte1.png'

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

const ProjectsImageWrapper = styled.div`
    position: relative;
    height: 200px;
    width: 400px;
    border-radius: 20px;
    overflow: hidden;
`;

const ProjectsImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
`;

const ImageText = styled.p`
    position: absolute;
    // border-radius: 20px;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1rem;
    font-weight: 100;
    line-height: 1.1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    width: 400px;
    height: 202px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        opacity: 1;
        backdrop-filter: blur(10px);
    }
`;


export const Projects = () => {
  return (
    <WrapperProjects>
        <h2>Projects</h2>
        <WrapperProject>

        <div>
                <ProjectsImageWrapper>
                    <ProjectsImage src={Futur} alt="Futur project"/>
                    <ImageText>Projet Futur</ImageText>
                </ProjectsImageWrapper>
                <div>
                    <p>Technologies</p>
                </div>
            </div>

            <div>
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
            </div>

        </WrapperProject>
    </WrapperProjects>
  )
}
