import React from 'react'
import { View } from 'react-native'

import { Accessory } from '../../components/Accessory'

import speedSvg from '../../assets/speed.svg'
import forceSvg from '../../assets/force.svg'
import peopleSvg from '../../assets/people.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'

import {
  Container,
  Header,
  Content,
  Details,
  Label,
  Value,
  Accessories,
  About,
  Footer,
} from './styles'

export function CarDetails() {
  return (
    <Container>
      <Header />

      <Content>
        <Details>
          <View>
            <Label>Audi</Label>
            <Value>RS 5 Coupé</Value>
          </View>

          <View>
            <Label>Ao dia</Label>
            <Value isMoney>R$ 340</Value>
          </View>
        </Details>

        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Accessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>

      <Footer />
    </Container>
  )
}
