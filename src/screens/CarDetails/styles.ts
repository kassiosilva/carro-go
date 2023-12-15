import styled, { css } from 'styled-components/native'

interface ValueProps {
  isMoney?: boolean
}

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background-color: ${({ theme }) => theme.colors.background_secondary};
`
export const Header = styled.View`
  width: 100%;
  height: 200px;
`

export const Content = styled.View`
  flex: 1;
  margin-top: 36px;
  padding: 0 24px;
`

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
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
    font-family: ${theme.fonts.secondary_500};
    color: ${isMoney ? theme.colors.main : theme.colors.title};
  `}
  font-size: 25px;
`

export const Accessories = styled.View`
  width: 100%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const About = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    color: ${theme.colors.text};
  `}
  font-size: 15px;
  line-height: 25px;
  margin-top: 24px;
`

export const Footer = styled.View``
