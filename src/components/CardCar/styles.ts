import styled, { css } from 'styled-components/native'

interface ValueProps {
  isMoney?: boolean
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 24px;
`

export const Details = styled.View`
  gap: 16px;
`

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 24px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.text_detail};
  `}
  font-size: 10px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`

export const Value = styled.Text<ValueProps>`
  ${({ theme, isMoney }) => css`
    font-family: ${isMoney
      ? theme.fonts.secondary_500
      : theme.fonts.secondary_400};
    color: ${isMoney ? theme.colors.main : theme.colors.title};
  `}
  font-size: 15px;
`

export const CarImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 167px;
  height: 85px;
`
