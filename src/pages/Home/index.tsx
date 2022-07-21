import React, { useEffect, useState } from 'react'

import CardInvoice, { InvoiceProps } from '../../components/CardInvoice'
import Filters from '../../components/Filters'
import NavBar from '../../components/NavBar'
import NoInvoices from '../../components/NoInvoices'
import { getDataInvoices } from '../../services/invoices'

import * as S from './styles'

export interface InvoicesCompleteProps extends InvoiceProps {
  paymentTerms: number
  clientEmail: string
  senderAddress: {
    street: string
    city: string
    postCode: string
    country: string
  }
  clientAddress: object
  paymentDue: string
  description: string
  items: {
    name: string
    quantity: number
    price: number
    total: number
  }[]
}

const Home = () => {
  const [invoices, setInvoices] = useState<InvoicesCompleteProps[]>([])

  useEffect(() => {
    const data = getDataInvoices()
    setInvoices(data)
  }, [])
  
  return (
    <S.Wrapper>
      <NavBar />
      <Filters />
      {/* <NoInvoices /> */}
      {invoices.map((invoice: InvoiceProps) => (
        <CardInvoice {...invoice} />
      ))}
    </S.Wrapper>
  )
}

export default Home
