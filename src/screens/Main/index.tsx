import { useState } from 'react'
import { Tela1 } from '../Tela1'
import { Tela2 } from '../Tela2'
import { Tela3 } from '../Tela3'

import * as S from './styles'


export function Main() {
  const [currentScreen, setCurrentScreen] = useState('Tela1')

  const selectedScreen = (screen: string) => {
    switch(screen) {
      case 'Tela1':
        return <Tela1 />
      case 'Tela2':
        return <Tela2 />
      case 'Tela3':
        return <Tela3 />
      default:
        return <Tela1 />
    }
  }

  function Screen({screen}: {screen: string}) {
    return selectedScreen(screen)
  }

  function handleSelectScreen(screen: string) {
    setCurrentScreen(screen)
  }

  return(
    <S.Container>
      <S.Content>
        <Screen screen={currentScreen}/> 
      </S.Content>
      <S.TabBar>
        <S.TabButton isActive={currentScreen === 'Tela1'} onPress={() => handleSelectScreen('Tela1')}>
          <S.Icon name='menu' size={30} color='#000' />
          <S.TextButton>Tela 1</S.TextButton>
        </S.TabButton>
        <S.TabButton isActive={currentScreen === 'Tela2'} onPress={() => handleSelectScreen('Tela2')}>
          <S.Icon name='menu' size={30} color='#000' />
          <S.TextButton>Tela 2</S.TextButton>
        </S.TabButton>
        <S.TabButton isActive={currentScreen === 'Tela3'} onPress={() => handleSelectScreen('Tela3')}>
          <S.Icon name='menu' size={30} color='#000' />
          <S.TextButton>Tela 3</S.TextButton>
        </S.TabButton>
      </S.TabBar>
    </S.Container>
  )
}