import React from 'react'
import styled, {css} from 'styled-components';

const defaultFontFamilyTitle = css`
    font-family: Inter, sans-serif; /* Vous pouvez remplacer 'Arial' par votre police de caractères par défaut */
`;

const Subtitle = styled.h2 `
    ${defaultFontFamilyTitle}
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 700;
    color: white;
`

export const SkillsSection = () => {
  return (
    <div>
        <Subtitle>{'< Skills />'}</Subtitle>
    </div>
  )
}
