import React from 'react'
import { ActivityIndicator, PressableProps } from 'react-native'

import { Container, Title } from './styles'
import { useTheme } from 'styled-components/native'

interface ButtonProps extends PressableProps {
  title: string
  type?: 'main' | 'positive'
  loading?: boolean
}

export function Button({
  title,
  type = 'main',
  loading = false,
  ...rest
}: ButtonProps) {
  const theme = useTheme()

  return (
    <Container type={type} {...rest}>
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  )
}
