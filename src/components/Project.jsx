import React from 'react'
import styled, {css} from 'styled-components';
import { useState } from 'react'

const defaultFontFamily = css`
    font-family: Noto Music, sans-serif; /* Vous pouvez remplacer 'Arial' par votre police de caractères par défaut */
`;


const StyledArrowIcon = styled.i `
width: 50px; /* Largeur du cercle */
height: 50px; /* Hauteur du cercle */
border-radius: 50%; /* Pour créer un cercle */
display: flex; /* Pour centrer le contenu */
align-items: center; /* Pour centrer le contenu verticalement */
justify-content: center; /* Pour centrer le contenu horizontalement */
color: white; /* Couleur de la flèche */
font-size: 24px; /* Taille de la flèche */
background-color: rgba(255, 255, 255, 0.1); /* Couleur de fond semi-transparente */
backdrop-filter: blur(10px); /* Effet de flou pour le verre */
box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Ombre pour le verre */
cursor: pointer;
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
const WrapperArrow = styled.div `
    display:flex;
    text-align:center;
    `
const ImageText = styled.p`

    ${defaultFontFamily}
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

const ProjectTechnology = styled.div `
    margin-left: 10px;
    display: flex;
    // background: rgba(255, 255, 255, 0.09);
    border-radius: 16px;
    // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    // backdrop-filter: blur(4.3px);
    // -webkit-backdrop-filter: blur(4.3px);
    // border: 1px solid rgba(255, 255, 255, 0.3);
    width: 90%;
`
const ImgStack = styled.img `
margin-left: 10px;
    width: 50px;
    height: 50px;
    ${(props) =>
        props.$invert &&
        `filter: invert(100%);`
    }
    display: ${(props) => props.src ? 'block' : 'none'};

`
export const Project = ({title, alt, description, src, stack1, stack2, stack3}) => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
                <ProjectsImageWrapper>
                    <ProjectsImage src={src} alt="Futur project"/>
                    <ImageText>{description}</ImageText>
                </ProjectsImageWrapper>
                <h2>{title}</h2><br/>

                <WrapperArrow>
                    {isOpen ? (
                    <>
                    
                        <div>
                            {/* <StyledArrowIcon className="bi bi-arrow-right" onClick={() => setIsOpen(false)}/> */}
                            <StyledArrowIcon onClick={() => setIsOpen(false)}> &gt; </StyledArrowIcon>
                        </div>
                        <ProjectTechnology>
                            <h3>Stack - </h3>
                            <ImgStack src={stack1} alt={alt} $invert/>
                            <ImgStack src={stack2} alt="logo symfony"/>
                            <ImgStack src={stack3} alt="logo symfony"/>
                        </ProjectTechnology>
                    </>
                ) : (
                    <>
                    <div>
                        <StyledArrowIcon onClick={() => setIsOpen(true)}> &gt; </StyledArrowIcon>
                    </div>
                    <div></div>
                </>
                )}

                </WrapperArrow>
            </div>
  )
}
