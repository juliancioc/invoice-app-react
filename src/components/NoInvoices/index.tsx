import React from 'react'

import illustrationEmpty from '../../assets/illustration-empty.svg'
import * as S from './styles'

const NoInvoices = () => {
  return (
    <S.Wrapper>
      <img src={illustrationEmpty} alt="No invoices" />
      <h3>The is nothing here</h3>
      <p>Create an invoice by clicking the<br /> <b>New</b> button and get started</p>
    </S.Wrapper>
  )
}

export default NoInvoices
