import React from 'react'
import { View } from 'react-native'

import GasolineSvg from '../../assets/gasoline.svg'

import { Container, Details, About, Label, Value, CarImage } from './styles'

export function CardCar() {
  return (
    <Container>
      <Details>
        <View>
          <Label>Audi</Label>
          <Value>RS 5 Coupé</Value>
        </View>

        <About>
          <View>
            <Label>Ao dia</Label>
            <Value isMoney>R$ 340</Value>
          </View>

          <GasolineSvg />
        </About>
      </Details>

      <CarImage
        source={{
          uri: 'https://p7.hiclipart.com/preview/262/890/378/audi-a5-2013-audi-rs-5-2014-audi-rs-5-sports-car-audi.jpg',
        }}
      />
    </Container>
  )
}
