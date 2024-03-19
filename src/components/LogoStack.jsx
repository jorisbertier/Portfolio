import React from 'react'
import styled from 'styled-components'

const Logo = styled.img `
    padding-right: 5px;
    padding-left: 5px;
    height: 30px;
    width: 30px;
`

export const LogoStack = ({logo}) => {

console.log(logo)
  return (
    <Logo src={logo} />
  )
}
