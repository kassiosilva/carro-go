import React from 'react'

import { HeaderHome } from '../../components/HeaderHome'
import { CardCar } from '../../components/CardCar'

import { Container, CarList } from './styles'

export function Home() {
  return (
    <Container>
      <HeaderHome />

      <CarList
        data={[1, 2, 3, 4]}
        // keyExtractor={(item) => String(item)}
        renderItem={CardCar}
      />
    </Container>
  )
}
