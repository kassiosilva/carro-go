import React from 'react'
import { Container, TitleLogo, TotalCars } from './styles'

export function HeaderHome() {
  return (
    <Container>
      <TitleLogo>CarroGO</TitleLogo>

      <TotalCars>Total de 12 carros</TotalCars>
    </Container>
  )
}
