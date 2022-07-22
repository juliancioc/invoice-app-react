import { createSlice } from '@reduxjs/toolkit'

import { getDataInvoices } from '../services/invoices'
import { AppDispatch } from '.'

const invoice = createSlice({
  name: 'invoices',
  initialState: {
    invoicesData: []
  },
  reducers: {
    listInvoices(state, { payload }) {
      return { ...state, invoicesData: payload }
    }
  }
})

export const { listInvoices } = invoice.actions
export default invoice.reducer

export function loadInvoices(): any {
  return async function (dispatch: AppDispatch) {
    const data = await getDataInvoices().then((res) => res)

    dispatch(listInvoices(data))
  }
}

