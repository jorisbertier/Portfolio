import React from 'react'
import styled, {css} from 'styled-components';
import { LogoStack } from './LogoStack';

const defaultFontFamily = css`
    font-family: Noto Music, sans-serif;
`;

const ProjectsImageWrapper = styled.div`
    position: relative;
    height: 200px;
    width: 400px;
    border-radius: 20px;
    overflow: hidden;

    &:hover > div {
        opacity: 1;
    }
`;

const ProjectsImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
`;

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

const Logo = styled.div `
    border-radius: 50px;
    backdrop-filter: blur(10px);
    position: absolute;
    left: 1.2rem;
    top: 0.5rem;
    opacity: 0;
    padding: 5px;


    &:hover {
        opacity: 0.8;
    }
`
export const Project = ({title, alt, description, src, stack1, stack2, stack3, stack4}) => {

  return (
    <div>
                <ProjectsImageWrapper>
                    <ProjectsImage src={src} alt="Futur project"/>
                    <ImageText>{description}</ImageText>
                    <Logo>
                        <LogoStack logo={stack1}></LogoStack>
                        <LogoStack logo={stack2}></LogoStack>
                        {stack3 ? <LogoStack logo={stack3}></LogoStack>: null}
                        {stack4 ? <LogoStack logo={stack4}></LogoStack>: null}
                    </Logo>
                </ProjectsImageWrapper>
                <h2>{title}</h2><br/>
            </div>
  )
}
