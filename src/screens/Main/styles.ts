import styled, { css } from 'styled-components/native'

import { Feather } from '@expo/vector-icons'

interface TabButtonProps {
  isActive: boolean
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`

export const Content = styled.View`
  padding: 50px;
  flex: 1;
`

export const TabBar = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;

  background-color: #ccc;
`

export const Icon = styled(Feather as any)``

export const TabButton = styled.TouchableOpacity<TabButtonProps>`
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${props => props.isActive && css`
    background-color: #f8f8f8;
  `}
`

export const TextButton = styled.Text`
  margin-left: 10px;
  font-size: 15px;
  color: #000;
`