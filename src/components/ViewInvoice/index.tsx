import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import GoBack from '../GoBack'
import NavBar from '../NavBar'
import * as S from './styles'
import { Status } from '../CardInvoice/styles'
import formatMoney from '../../utils/formatMoney'
import { InvoicesCompleteProps } from '../../pages/Home'
import formatDate from '../../utils/formatDate'
import { getInvoiceById } from '../../redux/invoice.store'
import ActionsInvoice from './ActionsInvoice'
import { useWindowSizeHook } from '../../hooks/useWindowHooks'

type InvoiceReduxDataProps = {
  invoices: {
    invoice: InvoicesCompleteProps
  }
}

type ParamsProps = {
  id: string
}

const ViewInvoice = () => {
  const dispatch = useDispatch()
  const { isMobile } = useWindowSizeHook()
  const { id }: ParamsProps = useParams()

  const { invoice } = useSelector(
    (state: InvoiceReduxDataProps) => state.invoices
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getInvoiceById(id))
  }, [dispatch, id])

  return (
    <S.Wrapper>
      <NavBar />
      <GoBack route='/' />
      {invoice.hasOwnProperty('status') && (
        <>
          <S.StatusWrapper>
            <p>Status</p>
            <Status className='status-invoice' status={invoice.status}>{invoice.status}</Status>
            {!isMobile && <ActionsInvoice />}
          </S.StatusWrapper>
          <S.Content>
            <S.Block>
              <p className="text-highlights">
                <span>#</span>
                {invoice.id}
              </p>
              <p className="text-low">{invoice.description}</p>
            </S.Block>
            <S.Address>
              <p>{invoice.senderAddress.street}</p>
              <p>{invoice.senderAddress.city}</p>
              <p>{invoice.senderAddress.postCode}</p>
              <p>{invoice.senderAddress.country}</p>
            </S.Address>
            <S.InvoiceInformation>
              <S.Block>
                <p className="text-low">Invoice Date</p>
                <p className="text-highlights text-important date">
                  {formatDate(new Date(invoice.createdAt))}
                </p>
                <p className="text-low">Payment Due</p>
                <p className="text-highlights text-important">
                  {formatDate(new Date(invoice.paymentDue))}
                </p>
              </S.Block>
              <S.Block>
                <p className="text-low">Bill To</p>
                <p className="text-highlights text-important">
                  {invoice.clientName}
                </p>
                <p className="text-small">{invoice.clientAddress.street}</p>
                <p className="text-small">{invoice.clientAddress.city}</p>
                <p className="text-small">{invoice.clientAddress.postCode}</p>
                <p className="text-small">{invoice.clientAddress.country}</p>
              </S.Block>
            </S.InvoiceInformation>
            <S.Block>
              <p className="text-low">Send to</p>
              <p className="text-highlights text-important">
                {invoice.clientEmail}
              </p>
            </S.Block>
            <S.PaymentInformation>
              <S.PaymentContent>
                {invoice.items.map((item, idx) => (
                  <S.Block key={idx}>
                    <S.Item>
                      <p className="item">{item.name}</p>
                      <p className="item">{formatMoney(item.price)}</p>
                    </S.Item>
                    <p className="installments">
                      {item.quantity} x {formatMoney(item.total)}
                    </p>
                  </S.Block>
                ))}
              </S.PaymentContent>
              <S.Total>
                <p>Grand Total</p>
                <p className="price">{formatMoney(invoice.total)}</p>
              </S.Total>
            </S.PaymentInformation>
          </S.Content>
          {isMobile && <ActionsInvoice />}
        </>
      )}
    </S.Wrapper>
  )
}

export default ViewInvoice
