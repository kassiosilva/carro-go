import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  height: 113px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 32px 24px;
`
export const TitleLogo = styled.Text`
  font-size: 15px;
  color: #fff;
`

export const TotalCars = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    color: ${theme.colors.text};
  `}
  font-size: 15px;
`
