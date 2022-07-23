import React from 'react'
import { useDispatch } from 'react-redux'

import iconPlus from '../../assets/icon-plus.svg'
import { newInvoice } from '../../redux/invoice.store'
import * as S from './styles'

const Filters = () => {
  const dispatch = useDispatch()

  function handleNewInvoice() {
    dispatch(newInvoice(true))
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
