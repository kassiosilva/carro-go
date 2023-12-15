import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 109px;
  height: 92px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: 16px;
  gap: 8px;
`

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.text};
  `}
  font-size: 13px;
`
