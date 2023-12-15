import styled, { css } from 'styled-components/native'

interface ContainerProps {
  type: 'main' | 'positive'
}

export const Container = styled.Pressable.attrs(({ theme }) => ({
  android_ripple: {
    color: theme.colors.ripple,
  },
}))<ContainerProps>`
  width: 100%;
  padding: 19px;

  align-items: center;

  ${({ disabled, theme, type }) => css`
    opacity: ${disabled ? 0.5 : 1};
    background-color: ${type === 'main'
      ? theme.colors.main
      : theme.colors.success};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.background_secondary};
  `}
  font-size: 15px;
`
