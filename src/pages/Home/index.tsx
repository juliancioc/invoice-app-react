import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import CardInvoice, { InvoiceProps } from '../../components/CardInvoice'
import Filters from '../../components/Filters'
import NavBar from '../../components/NavBar'
import NoInvoices from '../../components/NoInvoices'
import { loadInvoices } from '../../redux/invoice.store'

import * as S from './styles'

type AddressProps = {
  street: string
  city: string
  postCode: string
  country: string
}
export interface InvoicesCompleteProps extends InvoiceProps {
  paymentTerms: number
  clientEmail: string
  createdAt: string
  senderAddress: AddressProps
  clientAddress: AddressProps
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
  const dispatch = useDispatch()
  const { invoices } = useSelector((state: any) => state)

  useEffect(() => {
    dispatch(loadInvoices())
  }, [dispatch])

  return (
    <S.Wrapper>
      <NavBar />
      <Filters />
      {invoices.invoiceData.length === 0 ? (
        <NoInvoices />
      ) : (
        invoices.invoiceData.map((invoice: InvoiceProps) => (
          <CardInvoice key={invoice.id} {...invoice} />
        ))
      )}
    </S.Wrapper>
  )
}

export default Home
