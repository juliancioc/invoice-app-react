import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import * as S from './styles'
import iconArrowLeft from '../../assets/icon-arrow-left.svg'
import { newInvoice } from '../../redux/invoice.store'

type GoBackProps = {
  route?: string
}

const GoBack = ({ route }: GoBackProps) => {
  const dispatch = useDispatch()
  const history = useHistory()

  function handleGoBack() {
    if (route) {
      history.push(route)
    } else {
      dispatch(newInvoice(false))
    }
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
