import React from 'react'

import logo from '../../../assets/logo.svg'
import iconMoon from '../../../assets/icon-moon.svg'
import imgAvatar from '../../../assets/image-avatar.jpg'
import * as S from './styles'

const NavBar = () => {
  return (
    <S.Wrapper>
      <img src={logo} alt="Logo" />
      <S.RightSide>
        <img className='icon-change-theme' src={iconMoon} alt="Icon to change theme" />
        <S.AvatarWrapper>
          <img src={imgAvatar} alt="Avatar" />
        </S.AvatarWrapper>
      </S.RightSide>
    </S.Wrapper>
  )
}

export default NavBar
