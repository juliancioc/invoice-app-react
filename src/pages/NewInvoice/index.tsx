import React from 'react'

import GoBack from '../../components/GoBack'
import NavBar from '../../components/NavBar'

import * as S from './styles'

const NewInvoice = () => {
  return (
    <S.Wrapper>
      <NavBar />
      <GoBack route="/" />
      <S.Content>
        <h1>New Invoice</h1>
        <p className='title'>Bill From</p>
      </S.Content>
    </S.Wrapper>
  )
}

export default NewInvoice
