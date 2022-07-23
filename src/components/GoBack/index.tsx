import React from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import iconArrowLeft from '../../assets/icon-arrow-left.svg'
import { newInvoice } from '../../redux/invoice.store'

const GoBack = () => {
  const dispatch = useDispatch()

  function handleGoBack() {
    dispatch(newInvoice(false))
  }

  return (
    <S.Wrapper>
      <button onClick={handleGoBack}>
        {' '}
        <img src={iconArrowLeft} alt="Icon go back" /> Go back
      </button>
    </S.Wrapper>
  )
}

export default GoBack
