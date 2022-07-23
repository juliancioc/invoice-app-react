import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'
import iconArrowLeft from '../../assets/icon-arrow-left.svg'

type GoBackProps = {
  route: string
}

const GoBack = ({ route }: GoBackProps) => {
  return (
    <S.Wrapper>
      <img src={iconArrowLeft} alt="Icon go back" />
      <Link to={route}>Go back</Link>
    </S.Wrapper>
  )
}

export default GoBack
