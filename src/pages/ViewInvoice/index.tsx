import React from 'react'
import GoBack from '../../components/GoBack'

import NavBar from '../../components/NavBar'
import * as S from './styles'
import { Status } from '../../components/CardInvoice/styles'
import formatMoney from '../../utils/formatMoney'

const ViewInvoice = () => {
  return (
    <S.Wrapper>
      <NavBar />
      <GoBack route="/" />
      <S.StatusWrapper>
        <p>Status</p>
        <Status status="paid">Paid</Status>
      </S.StatusWrapper>
      <S.Content>
        <S.Block>
          <p className="text-highlights">
            <span>#</span>XM9141
          </p>
          <p className="text-low">Graphic Design</p>
        </S.Block>
        <S.Address>
          <p>19 Union</p>
          <p>19 Union</p>
          <p>19 Union</p>
          <p>19 Union</p>
        </S.Address>
        <S.InvoiceInformation>
          <S.Block>
            <p className="text-low">Invoice Date</p>
            <p className="text-highlights text-important date">21 Aug 2021</p>
            <p className="text-low">Payment Due</p>
            <p className="text-highlights text-important">20 Sep 2021</p>
          </S.Block>
          <S.Block>
            <p className="text-low">Bill To</p>
            <p className="text-highlights text-important">Alex Grim</p>
            <p className="text-small">84 Church</p>
            <p className="text-small">84 Church</p>
            <p className="text-small">84 Church</p>
            <p className="text-small">84 Church</p>
          </S.Block>
        </S.InvoiceInformation>
        <S.Block>
          <p className="text-low">Send to</p>
          <p className="text-highlights text-important">john@john.com</p>
        </S.Block>
        <S.PaymentInformation>
          <S.PaymentContent>
            <S.Block>
              <S.Item>
                <p className="item">Banner Design</p>
                <p className="item">{formatMoney(556)}</p>
              </S.Item>
              <p className="installments">1 x {formatMoney(556)}</p>
            </S.Block>
            <S.Block>
              <S.Item>
                <p className="item">Banner Design</p>
                <p className="item">{formatMoney(556)}</p>
              </S.Item>
              <p className="installments">1 x {formatMoney(556)}</p>
            </S.Block>
          </S.PaymentContent>
          <S.Total>
            <p>Grand Total</p>
            <p className="price">{formatMoney(556)}</p>
          </S.Total>
        </S.PaymentInformation>
      </S.Content>

      <S.Actions>
        <button className='btn-edit'>Edit</button>
        <button className='btn-delete'>Delete</button>
        <button className='btn-mark-as-paid'>Mark as Paid</button>
      </S.Actions>
    </S.Wrapper>
  )
}

export default ViewInvoice
