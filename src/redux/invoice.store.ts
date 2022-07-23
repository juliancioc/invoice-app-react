import { createSlice } from '@reduxjs/toolkit'

import { getDataInvoices } from '../services/invoices'
import { AppDispatch } from '.'

const invoice = createSlice({
  name: 'invoices',
  initialState: {
    invoiceData: [],
    invoice: {}
  },
  reducers: {
    listInvoicesReducer(state, { payload }) {
      return { ...state, invoiceData: payload }
    },
    getInvoiceByIdReducer(state, { payload }) {
      return { ...state, invoice: payload }
    }
  }
})

export const { listInvoicesReducer, getInvoiceByIdReducer } = invoice.actions
export default invoice.reducer

export function loadInvoices(): any {
  return async function (dispatch: AppDispatch) {
    const data = await getDataInvoices().then((res) => res)

    dispatch(listInvoicesReducer(data))
  }
}

export function getInvoiceById(id: string): any {
  return async function (dispatch: AppDispatch) {
    const data = await getDataInvoices().then((res) => res)
    const invoice = data.filter((item) => item.id === id)[0]

    dispatch(getInvoiceByIdReducer(invoice))
  }
}
