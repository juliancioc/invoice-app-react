import React from 'react'
import { useHistory } from 'react-router-dom'

import iconPlus from '../../assets/icon-plus.svg'
import * as S from './styles'

const Filters = () => {
  const history = useHistory()

  function handleNewInvoice() {
    history.push('/new-invoice')
  }
  return (
    <S.Wrapper>
      <S.LeftSide>
        <h1>Invoices</h1>
        <span>No invoices</span>
      </S.LeftSide>
      <S.RightSide>
        <select name="filter" id="filter">
          <option>Filter</option>
        </select>
        <button onClick={handleNewInvoice}>
          <img src={iconPlus} alt="Button add invoice" /> New
        </button>
      </S.RightSide>
    </S.Wrapper>
  )
}

export default Filters
