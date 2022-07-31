import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import iconPlus from '../../assets/icon-plus.svg'
import { useWindowSizeHook } from '../../hooks/useWindowHooks'
import { newInvoice } from '../../redux/invoice.store'
import * as S from './styles'

const Filters = () => {
  const dispatch = useDispatch()
  const { isMobile } = useWindowSizeHook()
  const { invoices } = useSelector((state: any) => state)

  function handleNewInvoice() {
    dispatch(newInvoice(true))
  }

  return (
    <S.Wrapper>
      <S.LeftSide>
        <h1>Invoices</h1>
        <span>
          {invoices.totalInvoices !== 0
            ? `There are ${invoices.totalInvoices} total invoices`
            : 'No invoices'}
        </span>
      </S.LeftSide>
      <S.RightSide>
        <select name="filter" id="filter">
          <option>Filter by status</option>
        </select>
        <button onClick={handleNewInvoice}>
          <img src={iconPlus} alt="Button add invoice" />
          {isMobile ? 'New' : 'New Invoice'}
        </button>
      </S.RightSide>
    </S.Wrapper>
  )
}

export default Filters
