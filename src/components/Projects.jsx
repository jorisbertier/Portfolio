import React from 'react'
import styled from 'styled-components'

const WrapperProjects = styled.div `
color: white;
height: 100vh;
`

export const Projects = () => {
  return (
    <WrapperProjects>
        <h2>Projects</h2>
        <div>
            <div>
                <div>
                    <img></img>
                </div>
                <div>
                    <p>Technologies</p>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    </WrapperProjects>
  )
}
