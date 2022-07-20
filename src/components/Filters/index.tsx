import React from 'react'

import iconPlus from '../../assets/icon-plus.svg'
import * as S from './styles'

const Filters = () => {
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
        <button>
          <img src={iconPlus} alt="Button add invoice" /> New
        </button>
      </S.RightSide>
    </S.Wrapper>
  )
}

export default Filters
