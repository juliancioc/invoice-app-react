import React from 'react'
import { useHistory } from 'react-router-dom'

import formatDate from '../../utils/formatDate'
import formatMoney from '../../utils/formatMoney'

import * as S from './styles'

export type InvoiceProps = {
  id: string
  paymentDue: string
  total: number
  clientName: string
  status: string
}

const CardInvoice = ({
  id,
  paymentDue,
  total,
  clientName,
  status
}: InvoiceProps) => {
  const history = useHistory()

  function handleClickInvoice(id: string) {
    history.push(`invoice/${id}`)
  }

  return (
    <S.Wrapper onClick={() => handleClickInvoice(id)}>
      <S.LeftSide>
        <p className="invoice-id">
          <span>#</span>
          {id}
        </p>
        <p className="date">Due {formatDate(new Date(paymentDue))}</p>
        <p className="total">{formatMoney(total)}</p>
      </S.LeftSide>
      <S.RightSide>
        <p className="client-name">{clientName}</p>
        <S.Status status={status}>
          <p>{status}</p>
        </S.Status>
      </S.RightSide>
    </S.Wrapper>
  )
}

export default CardInvoice
